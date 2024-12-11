document.addEventListener("DOMContentLoaded", () => {

// Definer dimensioner for diagrammet
    const w = 1000, h = 500, padding = 50;

// Funktion til at hente data fra API
const fetchData = async () => {
    const response = await fetch("/api/albums");
    return await response.json();
};

    // Funktion til at oprette diagrammet
    const createChart = async (sortByAvg = false) => {
        const data = await fetchData();
        if (!data || data.length === 0) return;

// Beregn gennemsnittet for hvert år
const GennemsnitData = data.reduce((nydata, d) => {
    nydata[d.year] = nydata[d.year] || { total: 0, count: 0 };
    nydata[d.year].total += +d.avg_measurement;
    nydata[d.year].count++;
    return nydata;
}, {});

// Formater dataen til et array og beregn gennemsnit
let formattedData = Object.entries(GennemsnitData)
    .map(([year, { total, count }]) => ({
        year: +year, // Kortere måde at konvertere til Number
        avg_measurement: total / count,
    }))
    
    .sort(sortByAvg ? (a, b) => b.avg_measurement - a.avg_measurement : undefined);

        d3.select("#chartContainer").select("svg").remove();

        const xScale = d3.scaleBand()
            .domain(formattedData.map(d => d.year))
            .range([padding, w - padding])
            .padding(0.1);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(formattedData, d => d.avg_measurement)])
            .range([h - padding, padding]);

        const svg = d3.select("#chartContainer")
            .append("svg")
            .attr("class", "chart-svg")
            .attr("width", w)
            .attr("height", h);

        svg.append("g")
            .attr("class", "x-axis")
            .attr("transform", `translate(0, ${h - padding})`)
            .call(d3.axisBottom(xScale))
            .selectAll("text")
            .attr("class", "x-axis-label");

        svg.append("g")
            .attr("class", "y-axis")
            .attr("transform", `translate(${padding}, 0)`)
            .call(d3.axisLeft(yScale));
            
            // Tilføj gridlines langs Y-aksen
        svg.append("g")
           .attr("class", "grid")
           .attr("transform", `translate(${padding}, 0)`)
           .call(d3.axisLeft(yScale)
           .tickSize(-w + 2 * padding) // Lav gridlines på tværs af diagrammet
           .tickFormat("") // Fjern tekst for grid ticks
            )
           .selectAll("line")
           .attr("stroke", "#ddd") // Ændre farve på gridlines
           .attr("stroke-dasharray", "5,2"); // Lav stregerne stiplede
            
        const tooltip = d3.select("body")
            .append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

        svg.selectAll("rect")
            .data(formattedData)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", d => xScale(d.year))
            .attr("y", h - padding)
            .attr("width", xScale.bandwidth())
            .attr("height", 0)
            .on("mouseover", (event, d) => {
                tooltip.style("opacity", 1)
                    .html(`År: ${d.year}<br>Gennemsnit: ${d.avg_measurement.toFixed(2)} pr. kubikmeter (m3)`)
                    .style("left", `${event.pageX + 10}px`)
                    .style("top", `${event.pageY - 30}px`);
            })
            .on("mousemove", event => {
                tooltip.style("left", `${event.pageX + 10}px`).style("top", `${event.pageY - 30}px`);
            })
            .on("mouseout", () => tooltip.style("opacity", 0))
            .transition()
            .duration(2000)
            .delay((_, i) => i * 100)
            .attr("y", d => yScale(d.avg_measurement))
            .attr("height", d => h - padding - yScale(d.avg_measurement));

        svg.append("text")
            .attr("class", "x-label")
            .attr("x", w / 2)
            .attr("y", h - 5)
            .text("År");

        svg.append("text")
            .attr("class", "y-label")
            .attr("transform", "rotate(-90)")
            .attr("x", -h / 2)
            .attr("y", 11)
            .text("Totale Gennemsnitlig mikroplast i havene pr. m3");
    };

    document.getElementById("comparisonButton").addEventListener("click", () => createChart());
    document.getElementById("rankingButton").addEventListener("click", () => createChart(true));

    // Vis det første diagram, når siden indlæses
    createChart();
});
