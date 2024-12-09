document.addEventListener("DOMContentLoaded", () => {
    // Definer dimensioner for diagrammet
    const w = 1000, h = 500, padding = 50;

    // Funktion til at hente data fra API
    const fetchData = async () => {
        try {
            const response = await fetch("/api/albums");
            if (!response.ok) throw new Error("Network response was not ok");
            return await response.json();
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    };

    // Funktion til at oprette diagrammet
    const createChart = async (sortByAvg = false) => {
        const data = await fetchData();
        if (!data) return;

        const aggregatedData = data.reduce((acc, d) => {
            acc[d.year] = acc[d.year] || { total: 0, count: 0 };
            acc[d.year].total += +d.avg_measurement;
            acc[d.year].count++;
            return acc;
        }, {});

        let formattedData = Object.entries(aggregatedData).map(([year, { total, count }]) => ({
            year: +year,
            avg_measurement: total / count,
        }));

        if (sortByAvg) formattedData.sort((a, b) => b.avg_measurement - a.avg_measurement);

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
            .attr("width", w)
            .attr("height", h);

        svg.append("g")
            .attr("transform", `translate(0, ${h - padding})`)
            .call(d3.axisBottom(xScale))
            .selectAll("text")
            .attr("transform", "rotate(-45)")
            .style("text-anchor", "end");

        svg.append("g")
            .attr("transform", `translate(${padding}, 0)`)
            .call(d3.axisLeft(yScale));

        const tooltip = d3.select("body")
            .append("div")
            .style("position", "absolute")
            .style("background", "rgba(0, 0, 0, 0.7)")
            .style("color", "white")
            .style("border", "1px solid #ccc")
            .style("border-radius", "5px")
            .style("padding", "10px")
            .style("pointer-events", "none")
            .style("opacity", 0);

        svg.selectAll("rect")
            .data(formattedData)
            .enter()
            .append("rect")
            .attr("x", d => xScale(d.year))
            .attr("y", h - padding)
            .attr("width", xScale.bandwidth())
            .attr("height", 0)
            .attr("fill", "#59e36b")
            .on("mouseover", (event, d) => {
                tooltip.style("opacity", 1)
                    .html(`År: ${d.year}<br>Gennemsnitet: ${d.avg_measurement.toFixed(2)} stk pr. kubikmeter`)
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
            .attr("x", w / 2)
            .attr("y", h - 5)
            .attr("text-anchor", "middle")
            .attr("fill", "white")
            .text("År");

        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("x", -h / 2)
            .attr("y", 11)
            .attr("text-anchor", "middle")
            .attr("fill", "white")
            .text("Total gennemsnitlig måling (stk pr. kubikmeter)")
    };

    document.getElementById("comparisonButton").addEventListener("click", () => createChart());
    document.getElementById("rankingButton").addEventListener("click", () => createChart(true));

    // Vis det første diagram, når siden indlæses
    createChart();
});
