import express from 'express';
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
console.log('Connecting to database', process.env.PG_DATABASE);

const db = new pg.Pool({
    host: process.env.PG_HOST,
    port: parseInt(process.env.PG_PORT),
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    ssl: process.env.PG_REQUIRE_SSL ? {
        rejectUnauthorized: false,
    } : undefined,
});

(async () => {
    try {
        const dbResult = await db.query('SELECT NOW()');
        console.log('Database connection established on', dbResult.rows[0].now);
    } catch (error) {
        console.error('Error connecting to database:', error);
        process.exit(1);  // Stop the server if DB connection fails
    }
})();

const port = process.env.PORT || 3000;
const server = express();

server.use(express.static('frontend'));
server.use(onEachRequest);
server.get('/api/albums', onGetAlbums);
server.listen(port, onServerReady);

async function onGetAlbums(request, response) {
    try {
        const dbResult = await db.query(
            `select ocean, max(measurement), extract(year from date) as year from samples
join oceans using (ocean_id)
where unit_id = 2
group by ocean_id, ocean, year
order by year;`
    );
        response.json(dbResult.rows);
    } catch (error) {
        console.error('Error fetching data from database:', error);
        response.status(500).json({ error: 'Failed to retrieve data' });
    }
}

function onEachRequest(request, response, next) {
    console.log(new Date(), request.method, request.url);
    next();
}

function onServerReady() {
    console.log('Webserver running on port', port);
}