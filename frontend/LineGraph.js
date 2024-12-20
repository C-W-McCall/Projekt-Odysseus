const width = 1200;
const height = 600;

const marginLeft = 30;
const marginBottom = 30;
const marginRight = 30;
const marginTop = 10;

const svgLine = d3.select("#line-viz").append("svg").attr("width", width + marginLeft + marginRight + 90).attr("height", height + marginTop + marginBottom).append("g").attr("transform", `translate(${75}, ${marginTop})`)

const explainerStart = svgLine
                  .append("text")
                  .text("Hyppigheden af målinger med density class")
                  .attr("fill", "#fcffc7")
                  .attr("x", 50)
                  .attr("y", 20)
                  
                  

const explainerH = svgLine
                  .append("text")
                  .text("'Høj'")
                  .attr("fill", "#FFFF00")
                  .attr("x", 362)
                  .attr("y", 20)

const og = svgLine
                  .append("text")
                  .text("og")
                  .attr("fill", "#fcffc7")
                  .attr("x", 405)
                  .attr("y", 20)

const explainerVH = svgLine
                  .append("text")
                  .text("'Meget Høj'")
                  .attr("fill", "#ff0000")
                  .attr("x", 427)
                  .attr("y", 20)

const veryHighTxt = svgLine
                    .append("text")
                    .text("Meget Høj")
                    .attr("fill", "#ff0000")
                    .attr("x", 1200)
                    .attr("y", 515)

const HighTxt = svgLine
                    .append("text")
                    .text("Høj")
                    .attr("fill", "#FFFF00")
                    .attr("x", 1200)
                    .attr("y", 465)

const samplesText = svgLine
                      .append("text")
                      .text("Målinger")
                      .attr("fill", "#fcffc7")
                      .attr("x", -60)
                      .attr("y", 604)
                      .attr("font-size", 11)

const årText = svgLine
                      .append("text")
                      .text("år")
                      .attr("fill", "#fcffc7")
                      .attr("x", -25)
                      .attr("y", 616)
                      .attr("font-size", 11)



d3.json(`/api/density`).then((data) => {
    console.log(data);

    // Grupperer data efter density_class. group(data, keys) grupperer data efter keys med anonym funktion
    // Laver det til en 'InternMap' (her får man 1 array med index tilsvarende grupperne, hvert er et objekt med den grupperede key værdi som key, og værdien til den key er et nyt array med de tilhørende værdier
    const sumstat = d3.group(data, (d) => d.density_class);
    console.log(sumstat); // Eksempel på ovenstående forklaring

    // Tilføjer x-akse
    const xAxis = d3.scaleLinear()
                    .domain(d3.extent(data, function(d) { return d.year}))  // Domain er 'range' for data  d3.extent sætter både min og maks i en funktion
                    .range([0, width]);  // Range er den aktuelle range som data skal vises i (normalt svg'ets størrelse i pixels)
    
    svgLine.append("g")
    .attr("transform", `translate(0, ${height})`) // Sætter x og y værdien for vores g element
    .call(d3.axisBottom(xAxis).ticks(19).tickFormat(d => `${d}`));  // axisBottom bestemmer hvor ticks' skal stritte ud. xAxis scaler g elementet. tickFormat() bruges her til at fjerne , mellem 2 i fx 2014

    // Tilføjer y-akse
    const yAxis = d3.scaleLinear()
                    .domain([0, 400]) // Istedet for at lave max af data, laver jeg max statisk, så vi får den øverste tick med (hvis max bliver max af data kommer sidste tick ikke med)
                    .range([height, 0]);
    svgLine.append("g")
           .call(d3.axisLeft(yAxis)); // yAxis scaler g elementet

    // Farven til hver gruppering
    const color = d3.scaleOrdinal()
                    .range(["#FFFF00", "#ff0000"])


    // Lav linjerne baseret på data
    const path = svgLine.selectAll(".line")
    .data(sumstat)  // Brug sumstat, som er grupperet data efter værdierne 'high' og 'very high'
    .join("g") // g elementerne er en form for containere for line segmenterne af hver gruppe
    .selectAll("path")  //vælg alle path som ikke eksistere endnu (vi kommer til at have 2 path for hver gruppe én til den grå del og én til den farvede del)
    .data(d => {
        // Lav en konstant der splitter gupperne af dataet ind i to segmenter, før og efter 2012
        const før2012 = d[1].filter(dataPoint => +dataPoint.year <= 2012); // Her filtrerer vi data i sumstat, efter år under 2012 og år efter 2012 så vi kan give forskellige farver 
        const efter2012 = d[1].filter(dataPoint => +dataPoint.year >= 2012);  // (de inkluderer begge 2012, ellers bliver data mellem 2012 og 2013 eller 2012 og 2011 ikke inkluderet)
        console.log(d[0]);                                                    // d[1] er den del af sumstat og internMap som har 2 arrays med data, hvor d[0] er selve keys til de arrays
        console.log(d[1]);                                                    // Console-logger for at få bedre forståelse for InternMaps
        console.log(d[1].filter(dataPoint => +dataPoint.year >= 2012));
        return [
            { segment: før2012, color: "#808080" }, // Grå frave til år <= 2012
            { segment: efter2012, color: color(d[0]) } // Gruppe farver til år >= 2012 Returnere en array af 2 objects, med segmentet og farven
        ];   // Hele denne .data del 'transformere' dataen, så vi kan lave den til forskellige farver basc.
    })
    .join("path") // Laver et path element til hver segment inde i grupperne (4 i alt, 2 til hver gruppe 1 med farve og 1 der er grå)
    .attr("fill", "none")                   // .join("path") itererer åbenbart over array automatisk, hvilket er derfor i linje 121, at man ikke først skal d[0].color
    .attr("stroke", d => d.color) // Brug segmenternes farver (fordi d (eller data) operere med det det behandlede data i linje 107 istedet for linje 104)
    .attr("stroke-width", 1.5)
    .attr("d", d => {
        // Use d3.line to generate the path for each segment
        return d3.line()
            .x(dataPoint => xAxis(+dataPoint.year))  // Hver data's year-værdi til x
            .y(dataPoint => yAxis(+dataPoint.high)) // Hver data's measurement værdi (hedder high pga. dårlig query) til y (+ foran begge så man er sikker på at de bliver omdannet fra string til numeriske værdier)
            (d.segment); // Sætter d3's line() på segmenternes datapunkter
    });


    // Append cirkler på alle data punkter
    for(let i = 0; i < data.length; i++) {

        svgLine.append("circle")
        .attr("cx", xAxis(data[i].year))
        .attr("cy", yAxis(data[i].high))
        .attr("r", 3)
        .attr("fill", "yellow")
        .attr("stroke", "black")
        .attr("id", `datapoint${i}`)

    };

    
    
      
      
});