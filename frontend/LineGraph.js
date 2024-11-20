const width = 1400;
const height = 600;

const marginLeft = 60;
const marginBottom = 30;
const marginRight = 30;
const marginTop = 10;

const svgLine = d3.select("#line-viz").append("svg").attr("width", width + marginLeft + marginRight).attr("height", height + marginTop + marginBottom).append("g").attr("transform", `translate(${marginLeft}, ${marginTop})`)

d3.json(`/api/density`).then((data) => {
    console.log(data);

    // Grupperer data efter density_class. group(data, keys) grupperer data efter keys med anonym funktion
    // Laver det til en 'InternMap' (her får man 1 array med index tilsvarende grupperne, hvert er et objekt med den grupperede key værdi som key, og værdien til den key er et nyt array med de tilhørende værdier
    const sumstat = d3.group(data, (d) => d.density_class);
    console.log(sumstat); // Eksempel på ovenstående forklaring

    // Tilføjer x-akse
    const xAxis = d3.scaleLinear()
                    .domain(d3.extent(data, function(d) { return d.year}))  // Domain er 'range' for data
                    .range([0, width]);  // Range er den aktuelle range som data skal vises i (normalt svg'ets størrelse i pixels)
    
    svgLine.append("g")
    .attr("transform", `translate(0, ${height})`) // Sætter x og y værdien for vores g element
    .call(d3.axisBottom(xAxis).ticks(19));  // axisBottom bestemmer hvor ticks' skal stritte ud. xAxis scaler g elementet

    // Tilføjer y-akse
    const yAxis = d3.scaleLinear()
                    .domain([0, d3.max(data, function(d) { return +d.high})])
                    .range([height, 0]);
    svgLine.append("g")
           .call(d3.axisLeft(yAxis));

    // Farven til hver gruppering
    const color = d3.scaleOrdinal()
                    .range(["#FFFF00", "#ff0000"])

    // Tegn linjerne
    svgLine.selectAll(".line")
    .data(sumstat)
    .join("path")
      .attr("fill", "none")
      .attr("stroke", function(d){ return color(d[0]) })
      .attr("stroke-width", 1.5)
      .attr("d", function(d){
        return d3.line()
                .x(function(d) {return xAxis(d.year); })
                .y(function(d) {return yAxis(+d.high); })
                (d[1])
      })
});