function fetchAlbums() {
    const year = d3.select('#year').property('value');
    d3.json(`/api/albums?start=${year}`).then((albums) => {
        if (albums.length === 0) {
            d3.select('#visuals').html('No albums found.')
        }
        const headers = Object.keys(albums[0]);
        const table = d3.select('#visuals')
            .html('')
            .append('table');
        table.append('thead')
            .append('tr')
            .selectAll('th')
            .data(headers)
            .enter()
            .append('th')
            .text((d) => d);
        table.append('tbody')
            .selectAll('tr')
            .data(albums)
            .enter()
            .append('tr')
            .selectAll('td')
            .data((d) => Object.values(d))
            .enter()
            .append('td')
            .text((d) => d);
    });
}