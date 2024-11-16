const svg = d3.selectAll(".visualisering-content").append("svg").attr("width", 1000).attr("height", 300);

d3.json(`/api/albums`).then((data) => {
  
    console.log(data);

    function createBucket  (scaling, xShift, yShift) {
        svg.append("line")
        .attr('x1', 50 * scaling + xShift)
        .attr('y1', 200 * scaling + yShift)
        .attr('x2', 100 * scaling + xShift)
        .attr('y2', 300 * scaling + yShift)
        .attr('stroke', 'blue')
    
        svg.append("line")
        .attr('x1', 100 * scaling + xShift)
        .attr('y1', 300 * scaling + yShift)
        .attr('x2', 200 * scaling + xShift)
        .attr('y2', 300 * scaling + yShift)
        .attr('stroke', 'blue')
    
        svg.append("line")
        .attr('x1', 200 * scaling + xShift)
        .attr('y1', 300 * scaling + yShift)
        .attr('x2', 250 * scaling + xShift)
        .attr('y2', 200 * scaling + yShift)
        .attr('stroke', 'blue')
    };

    createBucket (1.25, -3, -75);
    createBucket (1.25, 597, -75);



    svg
    .append("circle")
    .attr('cx', 400)
    .attr('cy', 280)
    .attr('r', 10)
    .attr('stroke', 'black')
    .attr('fill', '#dfe3eb')

    svg
    .append("text")
    .text("= 100 microplastics")
    .attr("x", 420)
    .attr("y", 285)
    .style("fill", "#fcffc7")

   

    function createPlasticAtla2019 () {
        // Runder til nærmeste 100 plastic (50 plastik bliver til 100, 49 bliver til 0)
        makeBalls = Math.round(data[2].max / 100);
        console.log(makeBalls);

       for (i = 1; i<makeBalls; i++) {
        svg.append("circle")
        .attr('cx', 185)
        .attr('cy', -10)
        .attr('r', 10)
        .attr('stroke', 'black')
        .attr('fill', '#dfe3eb')
        .transition()
        .duration(1000 * (i * 0.5)) // Tiden bliver langsommere pr cirkel så de ikke alle falder på samme tid
        .attr('cx', 115 + (i * 20)) // Fordelt ud baseret på deres radius gange 2
        .attr('cy', 288)
       }

    };


    function createPlasticPacific2019 () {
        makeBalls = Math.round(data[3].max / 100);
        console.log(makeBalls);
        let time = 2000;
        let timeFactor = 1;

        for (i = 0; i<makeBalls; i++) {
            svg.append("circle")
            .attr('cx', 770)
            .attr('cy', -10)
            .attr('r', 10)
            .attr('stroke', 'black')
            .attr('fill', '#dfe3eb')
            .transition()
            .duration(time * (i * timeFactor))
            .attr('cx', 733 + (i * 20))
            .attr('cy', 288)
        }
    }




    function createPlasticAtla2021 () {
        // Runder til nærmeste 100 plastic (50 plastik bliver til 100, 49 bliver til 0)
        makeBalls = Math.round(data[7].max / 100);
        console.log(makeBalls);

       for (i = 1; i<=makeBalls; i++) { // Kom til at starte i på 1, derfor kører den til <= makeBalls istedet for, så alle bolde bliver lavet
        let time = 1000;
        let timeFactor = 0.05;

        if (i < 7){
        svg.append("circle")
        .attr('cx', 185)
        .attr('cy', -10)
        .attr('r', 10)
        .attr('stroke', 'black')
        .attr('fill', '#dfe3eb')
        .transition()
        .duration(time * (i * timeFactor)) // Tiden bliver langsommere pr cirkel så de ikke alle falder på samme tid
        .attr('cx', 115 + (i * 20)) // Fordelt ud baseret på deres radius gange 2
        .attr('cy', 288)
       } else if (i >= 7 && i <= 13) {
        svg.append("circle")
        .attr('cx', 185)
        .attr('cy', -10)
        .attr('r', 10)
        .attr('stroke', 'black')
        .attr('fill', '#dfe3eb')
        .transition()
        .duration(time * (i * timeFactor))
        .attr('cx', -13 + (i * 20)) 
        .attr('cy', 268)
       } else if (i > 13 && i <=21) {
        svg.append("circle")
        .attr('cx', 185)
        .attr('cy', -10)
        .attr('r', 10)
        .attr('stroke', 'black')
        .attr('fill', '#dfe3eb')
        .transition()
        .duration(time * (i * timeFactor))
        .attr('cx', -165 + (i * 20)) 
        .attr('cy', 248)
       } else if (i > 21 && i <= 30) {
        svg.append("circle")
        .attr('cx', 185)
        .attr('cy', -10)
        .attr('r', 10)
        .attr('stroke', 'black')
        .attr('fill', '#dfe3eb')
        .transition()
        .duration(time * (i * timeFactor))
        .attr('cx', -335 + (i * 20)) 
        .attr('cy', 228)
       } else if (i > 30 && i <= 40) {
        svg.append("circle")
        .attr('cx', 185)
        .attr('cy', -10)
        .attr('r', 10)
        .attr('stroke', 'black')
        .attr('fill', '#dfe3eb')
        .transition()
        .duration(time * (i * timeFactor))
        .attr('cx', -528 + (i * 20)) 
        .attr('cy', 208)
       } else if (i > 40 && i <=51) {
        svg.append("circle")
        .attr('cx', 185)
        .attr('cy', -10)
        .attr('r', 10)
        .attr('stroke', 'black')
        .attr('fill', '#dfe3eb')
        .transition()
        .duration(time * (i * timeFactor))
        .attr('cx', -735 + (i * 20)) 
        .attr('cy', 188)
       } else if (i > 51 && i <= 63) {
        svg.append("circle")
        .attr('cx', 185)
        .attr('cy', -10)
        .attr('r', 10)
        .attr('stroke', 'black')
        .attr('fill', '#dfe3eb')
        .transition()
        .duration(time * (i * timeFactor))
        .attr('cx', -965 + (i * 20)) 
        .attr('cy', 168)
       } else if (i > 63 && i <= 75) {
        svg.append("circle")
        .attr('cx', 185)
        .attr('cy', -10)
        .attr('r', 10)
        .attr('stroke', 'black')
        .attr('fill', '#dfe3eb')
        .transition()
        .duration(time * (i * timeFactor))
        .attr('cx', -1205 + (i * 20)) 
        .attr('cy', 148)
       } else if (i > 75 && i <= 87) {
        svg.append("circle")
        .attr('cx', 185)
        .attr('cy', -10)
        .attr('r', 10)
        .attr('stroke', 'black')
        .attr('fill', '#dfe3eb')
        .transition()
        .duration(time * (i * timeFactor))
        .attr('cx', -1445 + (i * 20)) 
        .attr('cy', 128)
       } else if (i > 87 && i <= 99) {
        svg.append("circle")
        .attr('cx', 185)
        .attr('cy', -10)
        .attr('r', 10)
        .attr('stroke', 'black')
        .attr('fill', '#dfe3eb')
        .transition()
        .duration(time * (i * timeFactor))
        .attr('cx', -1685 + (i * 20)) 
        .attr('cy', 108)
       } else if (i > 99 && i<=111) {
        svg.append("circle")
        .attr('cx', 185)
        .attr('cy', -10)
        .attr('r', 10)
        .attr('stroke', 'black')
        .attr('fill', '#dfe3eb')
        .transition()
        .duration(time * (i * timeFactor))
        .attr('cx', -1925 + (i * 20)) 
        .attr('cy', 88)
       } else if (i> 111 && i<= 123) {
        svg.append("circle")
        .attr('cx', 185)
        .attr('cy', -10)
        .attr('r', 10)
        .attr('stroke', 'black')
        .attr('fill', '#dfe3eb')
        .transition()
        .duration(time * (i * timeFactor))
        .attr('cx', -2165 + (i * 20)) 
        .attr('cy', 68)
       } else if (i > 123 && i <= 135) {
        svg.append("circle")
        .attr('cx', 185)
        .attr('cy', -10)
        .attr('r', 10)
        .attr('stroke', 'black')
        .attr('fill', '#dfe3eb')
        .transition()
        .duration(time * (i * timeFactor))
        .attr('cx', -2405 + (i * 20)) 
        .attr('cy', 48)
       } else if (i > 135 && i <= 147) {
        svg.append("circle")
        .attr('cx', 185)
        .attr('cy', -10)
        .attr('r', 10)
        .attr('stroke', 'black')
        .attr('fill', '#dfe3eb')
        .transition()
        .duration(time * (i * timeFactor))
        .attr('cx', -2645 + (i * 20)) 
        .attr('cy', 28)
       } else if (i > 147 && i <= 159) {
        svg.append("circle")
        .attr('cx', 185)
        .attr('cy', -10)
        .attr('r', 10)
        .attr('stroke', 'black')
        .attr('fill', '#dfe3eb')
        .transition()
        .duration(time * (i * timeFactor))
        .attr('cx', -2885 + (i * 20)) 
        .attr('cy', 8)
       } else if (i > 159) {
        svg
        .append("text")
        .text("There are 405 balls in this bucket")
        .attr("x", 350)
        .attr("y", 100)
        .style("fill", "#fcffc7")
        .style("opacity", 0)
        .transition()
        .duration(4000)
        .style("opacity", 1)

        svg
        .append("text")
        .text("<----")
        .attr("transform", "translate(350,20)rotate(90)")
        .style("fill", "#fcffc7")
        .style("opacity", 0)
        .transition()
        .delay(2000)
        .duration(4000)
        .style("opacity", 1)

        svg
        .append("text")
        .text("Continues...")
        .attr("x", 375)
        .attr("y", 55)
        .style("fill", "#fcffc7")
        .style("opacity", 0)
        .transition()
        .delay(5000)
        .duration(4000)
        .style("opacity", 1)

        break
       }

    };

};


function createPlasticPacific2021 () {
    makeBalls = Math.round(data[7].max / 100);
    console.log(makeBalls);

   for (i = 1; i<=makeBalls; i++) { // Kom til at starte i på 1, derfor kører den til <= makeBalls istedet for, så alle bolde bliver lavet
    let time = 1000;
    let timeFactor = 0.45;

    if (i < 7){
    svg.append("circle")
    .attr('cx', 770)
    .attr('cy', -10)
    .attr('r', 10)
    .attr('stroke', 'black')
    .attr('fill', '#dfe3eb')
    .transition()
    .duration(time * (i * timeFactor)) // Tiden bliver langsommere pr cirkel så de ikke alle falder på samme tid
    .attr('cx', 713 + (i * 20)) // Fordelt ud baseret på deres radius gange 2
    .attr('cy', 288)
   } else if (i >= 7 && i <= 13) {
    svg.append("circle")
    .attr('cx', 770)
    .attr('cy', -10)
    .attr('r', 10)
    .attr('stroke', 'black')
    .attr('fill', '#dfe3eb')
    .transition()
    .duration(time * (i * timeFactor))
    .attr('cx', 585 + (i * 20)) 
    .attr('cy', 268)
};
}

};

createPlasticAtla2021();
createPlasticPacific2021 ();



});