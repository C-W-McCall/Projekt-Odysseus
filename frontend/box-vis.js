const svg = d3.selectAll(".visualisering-content").append("svg").attr("width", 1200).attr("height", 300).attr("id", "spandChartSvg")


d3.json(`/api/albums`).then((data) => {
  
    console.log(data);


    // Alle år tekstenes X og Y koordinat
    let årTextX = 575;
    let årTextY = 20;

    // Hav tekstenes y koordinat
    let oceanTextY = 170;

    // Hav-tekstenes x koordinat
    let atlaTextX = 389;
    let pacificTextX = 1000;
    let arcticTextX = 112;
    let indiTextX = 685;

    // Starten på 'create balls' funktionernes x koordinat
    let atlaStart = 262;
    let pacifStart = 862;
    let indiStart = 562;
    let arctiStart = -38;

    // Selve værdien der kommer frem's y koordinat start transition og slut transition
    let oceanMeasurementYStart = 170;
    let oceanMeasurementYEnd = 140;

    // Mesasurements x koordinat over spanden
    let atlaMeasurementX = 430;
    let pacifMeasurementX = 1033;
    let indiMeasurementX = 735;
    let arctiMeasurementX = 135;

    function createBucket  (scaling, xShift, yShift) {
        svg.append("line")
        .attr('x1', 50 * scaling + xShift)
        .attr('y1', 200 * scaling + yShift)
        .attr('x2', 100 * scaling + xShift)
        .attr('y2', 300 * scaling + yShift)
        .attr('stroke', '#fcffc7')
    
        svg.append("line")
        .attr('x1', 100 * scaling + xShift)
        .attr('y1', 300 * scaling + yShift)
        .attr('x2', 200 * scaling + xShift)
        .attr('y2', 300 * scaling + yShift)
        .attr('stroke', '#fcffc7')
    
        svg.append("line")
        .attr('x1', 200 * scaling + xShift)
        .attr('y1', 300 * scaling + yShift)
        .attr('x2', 250 * scaling + xShift)
        .attr('y2', 200 * scaling + yShift)
        .attr('stroke', '#fcffc7')
    };

    createBucket (1.25, -40, -75);
    createBucket (1.25, 260, -75);
    createBucket (1.25, 560, -75);
    createBucket (1.25, 860, -75);



    // Teksten til Atlantic over bucket
    svg
    .append("text")
    .text("Atlanterhavet")
    .attr("x", atlaTextX)
    .attr("y", oceanTextY)
    .style("fill", "#fcffc7")
    .style("font-size", 20)


    // Teksten til Pacific over bucket
    svg
    .append("text")
    .text("Stillehavet")
    .attr("x", pacificTextX)
    .attr("y", oceanTextY)
    .style("fill", "#fcffc7")
    .style("font-size", 20)

    // Teksten til Arctic over bucket
    svg
    .append("text")
    .text("Ishavet")
    .attr("x", arcticTextX)
    .attr("y", oceanTextY)
    .style("fill", "#fcffc7")
    .style("font-size", 20)

    // Teksten til Indian over buvket
    svg
    .append("text")
    .text("Indiske Ocean")
    .attr("x", indiTextX)
    .attr("y", oceanTextY)
    .style("fill", "#fcffc7")
    .style("font-size", 20)
   
    // Show buttons
    function show2014 () {
      svg.selectAll("#viz").remove();
        svg.selectAll("#viz_year").remove();
        createPlasticAtla2014 (atlaStart);
        createPlasticPacific2014 (pacifStart);

        svg
        .append("text")
        .text("2014")
        .attr("x", årTextX)
        .attr("y", årTextY)
        .attr("id", "viz_year")
        .style("fill", "#fcffc7")
        .style("font-size", 20);
        
        let Pac2014 = data[3].avg_measurement
        svg
        .append("text")
        .text(`${Pac2014.slice(0, 4)}`)  // .slice 'cutter' en værdi (tal eller string) hvor 0 er start på cut (altså starten) og 4 er der hvor cuttet skal gå exclusiv den værdi
        .attr("x", pacifMeasurementX)
        .attr("y", oceanMeasurementYStart)
        .attr("id", "viz_year")
        .style("fill", "#fcffc7")
        .style("font-size", 16)
        .style("opacity", 0)
        .transition()
        .duration(1000)
        .attr("x", pacifMeasurementX)
        .attr("y", oceanMeasurementYEnd)
        .style("opacity", 1);

        let Atl2014 = data[1].avg_measurement
        svg
        .append("text")
        .text(`${Atl2014.slice(0, 4)}`)
        .attr("x", atlaMeasurementX)
        .attr("y", oceanMeasurementYStart)
        .attr("id", "viz_year")
        .style("fill", "#fcffc7")
        .style("font-size", 16)
        .style("opacity", 0)
        .transition()
        .duration(1000)
        .attr("x", atlaMeasurementX)
        .attr("y", oceanMeasurementYEnd)
        .style("opacity", 1);
    };
   
    function show2015 () {
      svg.selectAll("#viz").remove();
      svg.selectAll("#viz_year").remove();
      createPlasticAtla2015 (atlaStart);
      createPlasticPacific2015 (pacifStart);
        

        svg
        .append("text")
        .text("2015")
        .attr("x", årTextX)
        .attr("y", årTextY)
        .attr("id", "viz_year")
        .style("fill", "#fcffc7")
        .style("font-size", 20);

        let Pac2015 = data[7].avg_measurement
        svg
        .append("text")
        .text(`${Pac2015.slice(0, 3)}`)
        .attr("x", pacifMeasurementX)
        .attr("y", oceanMeasurementYStart)
        .attr("id", "viz_year")
        .style("fill", "#fcffc7")
        .style("font-size", 16)
        .style("opacity", 0)
        .transition()
        .duration(1000)
        .attr("x", pacifMeasurementX)
        .attr("y", oceanMeasurementYEnd )
        .style("opacity", 1);

        let Atl2015 = data[5].avg_measurement
        svg
        .append("text")
        .text(`${Atl2015.slice(0, 4)}`)
        .attr("x", atlaMeasurementX)
        .attr("y", oceanMeasurementYStart)
        .attr("id", "viz_year")
        .style("fill", "#fcffc7")
        .style("font-size", 16)
        .style("opacity", 0)
        .transition()
        .duration(1000)
        .attr("x", 430)
        .attr("y", oceanMeasurementYEnd )
        .style("opacity", 1);
        
    };


    function show2016 () {
      svg.selectAll("#viz").remove();
      svg.selectAll("#viz_year").remove();
      createPlasticAtla2016 (atlaStart)
      createPlasticArc2016 (arctiStart)
        

        svg
        .append("text")
        .text("2016")
        .attr("x", årTextX)
        .attr("y", årTextY)
        .attr("id", "viz_year")
        .style("fill", "#fcffc7")
        .style("font-size", 20);

        let Atl2016 = data[9].avg_measurement
        svg
        .append("text")
        .text(`${Atl2016.slice(0, 3)}`)
        .attr("x", atlaMeasurementX)
        .attr("y", oceanMeasurementYStart)
        .attr("id", "viz_year")
        .style("fill", "#fcffc7")
        .style("font-size", 16)
        .style("opacity", 0)
        .transition()
        .duration(1000)
        .attr("x", atlaMeasurementX)
        .attr("y", oceanMeasurementYEnd)
        .style("opacity", 1);

        let Arc2016 = data[8].avg_measurement
        svg
        .append("text")
        .text(`${Arc2016.slice(0, 2)}`)
        .attr("x", arctiMeasurementX)
        .attr("y", oceanMeasurementYStart)
        .attr("id", "viz_year")
        .style("fill", "#fcffc7")
        .style("font-size", 16)
        .style("opacity", 0)
        .transition()
        .duration(1000)
        .attr("x", arctiMeasurementX)
        .attr("y", oceanMeasurementYEnd )
        .style("opacity", 1);
    };


    function show2017 () {
      svg.selectAll("#viz").remove();
      svg.selectAll("#viz_year").remove();
      createPlasticAtla2017 (atlaStart);
      createPlasticIndia2017 (indiStart);
      createPlasticPacific2017 (pacifStart);

        svg
        .append("text")
        .text("2017")
        .attr("x", årTextX)
        .attr("y", årTextY)
        .attr("id", "viz_year")
        .style("fill", "#fcffc7")
        .style("font-size", 20);

        let Atl2017 = data[13].avg_measurement
        svg
        .append("text")
        .text(`${Atl2017.slice(0, 3)}`)
        .attr("x", atlaMeasurementX)
        .attr("y", oceanMeasurementYStart)
        .attr("id", "viz_year")
        .style("fill", "#fcffc7")
        .style("font-size", 16)
        .style("opacity", 0)
        .transition()
        .duration(1000)
        .attr("x", atlaMeasurementX)
        .attr("y", oceanMeasurementYEnd )
        .style("opacity", 1);

        let Pac2017 = data[15].avg_measurement
        svg
        .append("text")
        .text(`${Pac2017.slice(0, 4)}`)
        .attr("x", pacifMeasurementX)
        .attr("y", oceanMeasurementYStart)
        .attr("id", "viz_year")
        .style("fill", "#fcffc7")
        .style("font-size", 16)
        .style("opacity", 0)
        .transition()
        .duration(1000)
        .attr("x", pacifMeasurementX)
        .attr("y", oceanMeasurementYEnd )
        .style("opacity", 1);

        let Indi2017 = data[14].avg_measurement
        svg
        .append("text")
        .text(`${Indi2017.slice(0, 2)}`)
        .attr("x", indiMeasurementX)
        .attr("y", oceanMeasurementYStart)
        .attr("id", "viz_year")
        .style("fill", "#fcffc7")
        .style("font-size", 16)
        .style("opacity", 0)
        .transition()
        .duration(1000)
        .attr("x", indiMeasurementX)
        .attr("y", oceanMeasurementYEnd )
        .style("opacity", 1);
    }


    function show2018 () {
      svg.selectAll("#viz").remove();
      svg.selectAll("#viz_year").remove();
      createPlasticAtla2018 (atlaStart);
      createPlasticPacific2018 (pacifStart);

        svg
        .append("text")
        .text("2018")
        .attr("x", årTextX)
        .attr("y", årTextY)
        .attr("id", "viz_year")
        .style("fill", "#fcffc7")
        .style("font-size", 20);

        let Atl2018 = data[17].avg_measurement
        svg
        .append("text")
        .text(`${Atl2018.slice(0, 3)}`)
        .attr("x", atlaMeasurementX)
        .attr("y", oceanMeasurementYStart)
        .attr("id", "viz_year")
        .style("fill", "#fcffc7")
        .style("font-size", 16)
        .style("opacity", 0)
        .transition()
        .duration(1000)
        .attr("x", atlaMeasurementX)
        .attr("y", oceanMeasurementYEnd )
        .style("opacity", 1);

        let Pac2018 = data[19].avg_measurement
        svg
        .append("text")
        .text(`${Pac2018.slice(0, 4)}`)
        .attr("x", pacifMeasurementX)
        .attr("y", oceanMeasurementYStart)
        .attr("id", "viz_year")
        .style("fill", "#fcffc7")
        .style("font-size", 16)
        .style("opacity", 0)
        .transition()
        .duration(1000)
        .attr("x", pacifMeasurementX)
        .attr("y", oceanMeasurementYEnd )
        .style("opacity", 1);
    }

    function show2019 () {
        svg.selectAll("#viz").remove();
        svg.selectAll("#viz_year").remove();
        createPlasticAtla2019 (atlaStart);
        createPlasticPacific2019 (pacifStart);
        createPlasticArc2019 (arctiStart);
        createPlasticIndia2019 (indiStart);

        svg
        .append("text")
        .text("2019")
        .attr("x", årTextX)
        .attr("y", årTextY)
        .attr("id", "viz_year")
        .style("fill", "#fcffc7")
        .style("font-size", 20);

        let Atl2019 = data[21].avg_measurement
        svg
        .append("text")
        .text(`${Atl2019.slice(0, 4)}`)
        .attr("x", atlaMeasurementX)
        .attr("y", oceanMeasurementYStart)
        .attr("id", "viz_year")
        .style("fill", "#fcffc7")
        .style("font-size", 16)
        .style("opacity", 0)
        .transition()
        .duration(1000)
        .attr("x", atlaMeasurementX)
        .attr("y", oceanMeasurementYEnd )
        .style("opacity", 1);

        let Pac2019 = data[23].avg_measurement
        svg
        .append("text")
        .text(`${Pac2019.slice(0, 5)}`)
        .attr("x", pacifMeasurementX)
        .attr("y", oceanMeasurementYStart)
        .attr("id", "viz_year")
        .style("fill", "#fcffc7")
        .style("font-size", 16)
        .style("opacity", 0)
        .transition()
        .duration(1000)
        .attr("x", pacifMeasurementX)
        .attr("y", oceanMeasurementYEnd )
        .style("opacity", 1);

        let Indi2019 = data[22].avg_measurement
        svg
        .append("text")
        .text(`${Indi2019.slice(0, 4)}`)
        .attr("x", indiMeasurementX)
        .attr("y", oceanMeasurementYStart)
        .attr("id", "viz_year")
        .style("fill", "#fcffc7")
        .style("font-size", 16)
        .style("opacity", 0)
        .transition()
        .duration(1000)
        .attr("x", indiMeasurementX)
        .attr("y", oceanMeasurementYEnd )
        .style("opacity", 1);

        let Arc2019 = data[20].avg_measurement
        svg
        .append("text")
        .text(`${Arc2019.slice(0, 4)}`)
        .attr("x", arctiMeasurementX)
        .attr("y", oceanMeasurementYStart)
        .attr("id", "viz_year")
        .style("fill", "#fcffc7")
        .style("font-size", 16)
        .style("opacity", 0)
        .transition()
        .duration(1000)
        .attr("x", arctiMeasurementX)
        .attr("y", oceanMeasurementYEnd )
        .style("opacity", 1);
        
    };


    function show2020 () {
      svg.selectAll("#viz").remove();
      svg.selectAll("#viz_year").remove();
      createPlasticAtla2020 (atlaStart);
      createPlasticIndia2020 (indiStart);
      createPlasticPacific2020 (pacifStart);


      svg
      .append("text")
      .text("2020")
      .attr("x", årTextX)
      .attr("y", årTextY)
      .attr("id", "viz_year")
      .style("fill", "#fcffc7")
      .style("font-size", 20);

      let Atl2020 = data[25].avg_measurement
        svg
        .append("text")
        .text(`${Atl2020.slice(0, 3)}`)
        .attr("x", atlaMeasurementX)
        .attr("y", oceanMeasurementYStart)
        .attr("id", "viz_year")
        .style("fill", "#fcffc7")
        .style("font-size", 16)
        .style("opacity", 0)
        .transition()
        .duration(1000)
        .attr("x", atlaMeasurementX)
        .attr("y", oceanMeasurementYEnd )
        .style("opacity", 1);

        let Pac2020 = data[27].avg_measurement
        svg
        .append("text")
        .text(`${Pac2020.slice(0, 2)}`)
        .attr("x", pacifMeasurementX)
        .attr("y", oceanMeasurementYStart)
        .attr("id", "viz_year")
        .style("fill", "#fcffc7")
        .style("font-size", 16)
        .style("opacity", 0)
        .transition()
        .duration(1000)
        .attr("x", pacifMeasurementX)
        .attr("y", oceanMeasurementYEnd )
        .style("opacity", 1);

        let Indi2020 = data[26].avg_measurement
        svg
        .append("text")
        .text(`${Indi2020.slice(0, 3)}`)
        .attr("x", indiMeasurementX)
        .attr("y", oceanMeasurementYStart)
        .attr("id", "viz_year")
        .style("fill", "#fcffc7")
        .style("font-size", 16)
        .style("opacity", 0)
        .transition()
        .duration(1000)
        .attr("x", indiMeasurementX)
        .attr("y", oceanMeasurementYEnd )
        .style("opacity", 1);
    }


// create 2014 cirklerne

    function createPlasticPacific2014 (xShift) {
      makeBalls = Math.round(data[3].avg_measurement / 0.10);
      console.log(makeBalls);
   
         for (i = 1; i<=makeBalls; i++) { 
          let time = 1000;
          let timeFactor = 0.05;
          let r = 5
          let d = r * 2
   
          if (i < 12){
          svg.append("circle")
          .attr('cx', 185)
          .attr('cy', -10)
          .attr('r', r)
          .attr("id", "viz")
          .attr('stroke', 'black')
          .attr('fill', '#FFFFFF')
          .transition()
          .duration(time * (i * timeFactor)) 
          .attr('cx', 115 + (i * d) + xShift)
          .attr('cy', 293)
         }
   
     }
    };


    function createPlasticAtla2014 (xShift) {
      makeBalls = Math.round(data[1].avg_measurement / 0.10);
      console.log(makeBalls);
   
         for (i = 1; i<=makeBalls; i++) { 
          let time = 1000;
          let timeFactor = 0.05;
          let r = 5
          let d = r * 2
   
          if (i < 12){
          svg.append("circle")
          .attr('cx', 185)
          .attr('cy', -10)
          .attr('r', r)
          .attr("id", "viz")
          .attr('stroke', 'black')
          .attr('fill', '#FFFFFF')
          .transition()
          .duration(time * (i * timeFactor)) 
          .attr('cx', 115 + (i * d) + xShift)
          .attr('cy', 293)
         }
   
     }
    };

// create 2015 cirklerne

    function createPlasticAtla2015 (xShift) {
      makeBalls = Math.round(data[5].avg_measurement / 0.10);
      console.log(makeBalls);

      for (i = 1; i<=makeBalls; i++) { 
      
            for (i = 1; i<=makeBalls; i++) { 
             let time = 1000;
             let timeFactor = 0.05;
             let r = 5
             let d = r * 2
      
             if (i < 12){
             svg.append("circle")
             .attr('cx', 185)
             .attr('cy', -10)
             .attr('r', r)
             .attr("id", "viz")
             .attr('stroke', 'black')
             .attr('fill', '#FFFFFF')
             .transition()
             .duration(time * (i * timeFactor)) 
             .attr('cx', 115 + (i * d) + xShift)
             .attr('cy', 293)
             }
        }
    }};


    function createPlasticPacific2015 (xShift) {
      makeBalls = Math.round(data[7].avg_measurement / 100);
      console.log(makeBalls);

      for (i = 1; i<=makeBalls; i++) { 
      
         for (i = 1; i<=makeBalls; i++) { 
            let time = 1000;
            let timeFactor = 0.05;
     
            if (i < 7){
            svg.append("circle")
            .attr('cx', 185)
            .attr('cy', -10)
            .attr('r', 10)
            .attr("id", "viz")
            .attr('stroke', 'black')
            .attr('fill', '#EB8242')
            .transition()
            .duration(time * (i * timeFactor)) 
            .attr('cx', 115 + (i * 20) + xShift)
            .attr('cy', 288)
           }
         }
    }};


// create 2016 cirklerne

    function createPlasticArc2016 (xShift) {
      makeBalls = Math.round(data[8].avg_measurement / 1);
      console.log(makeBalls);
      for (i = 1; i<=makeBalls; i++) { 
         let time = 1000;
         let timeFactor = 0.05;
  
         if (i < 7){
         svg.append("circle")
         .attr('cx', 185)
         .attr('cy', -10)
         .attr('r', 10)
         .attr("id", "viz")
         .attr('stroke', 'black')
         .attr('fill', '#F6DA63')
         .transition()
         .duration(time * (i * timeFactor)) 
         .attr('cx', 115 + (i * 20) + xShift)
         .attr('cy', 288)
        } else if (i >= 7 && i <= 13) {
         svg.append("circle")
         .attr('cx', 185)
         .attr('cy', -10)
         .attr('r', 10)
         .attr("id", "viz")
         .attr('stroke', 'black')
         .attr('fill', '#F6DA63')
         .transition()
         .duration(time * (i * timeFactor))
         .attr('cx', -13 + (i * 20) + xShift) 
         .attr('cy', 268)
        } else if (i > 13 && i <=21) {
         svg.append("circle")
         .attr('cx', 185)
         .attr('cy', -10)
         .attr('r', 10)
         .attr("id", "viz")
         .attr('stroke', 'black')
         .attr('fill', '#F6DA63')
         .transition()
         .duration(time * (i * timeFactor))
         .attr('cx', -165 + (i * 20) + xShift) 
         .attr('cy', 248)
        } else if (i > 21 && i <= 30) {
         svg.append("circle")
         .attr('cx', 185)
         .attr('cy', -10)
         .attr('r', 10)
         .attr("id", "viz")
         .attr('stroke', 'black')
         .attr('fill', '#F6DA63')
         .transition()
         .duration(time * (i * timeFactor))
         .attr('cx', -335 + (i * 20) + xShift) 
         .attr('cy', 228)
        }

     }};


    function createPlasticAtla2016 (xShift) {
      makeBalls = Math.round(data[9].avg_measurement / 100);
      console.log(makeBalls);
      for (i = 1; i<=makeBalls; i++) { 
         let time = 1000;
         let timeFactor = 0.05;
  
         if (i < 7){
         svg.append("circle")
         .attr('cx', 185)
         .attr('cy', -10)
         .attr('r', 10)
         .attr("id", "viz")
         .attr('stroke', 'black')
         .attr('fill', '#EB8242')
         .transition()
         .duration(time * (i * timeFactor)) 
         .attr('cx', 115 + (i * 20) + xShift)
         .attr('cy', 288)
        }
     }};


// create 2017 cirklerne

function createPlasticAtla2017 (xShift) {
   makeBalls = Math.round(data[13].avg_measurement / 100);
      console.log(makeBalls);
      for (i = 1; i<=makeBalls; i++) { 
         let time = 1000;
         let timeFactor = 0.05;
  
         if (i < 7){
         svg.append("circle")
         .attr('cx', 185)
         .attr('cy', -10)
         .attr('r', 10)
         .attr("id", "viz")
         .attr('stroke', 'black')
         .attr('fill', '#EB8242')
         .transition()
         .duration(time * (i * timeFactor)) 
         .attr('cx', 115 + (i * 20) + xShift)
         .attr('cy', 288)
        }
     }
};

function createPlasticIndia2017 (xShift) {
   makeBalls = Math.round(data[14].avg_measurement / 1);
   console.log(makeBalls);
   for (i = 1; i<=makeBalls; i++) { 
      let time = 1000;
      let timeFactor = 0.05;

      if (i < 7){
      svg.append("circle")
      .attr('cx', 185)
      .attr('cy', -10)
      .attr('r', 10)
      .attr("id", "viz")
      .attr('stroke', 'black')
      .attr('fill', '#F6DA63')
      .transition()
      .duration(time * (i * timeFactor)) 
      .attr('cx', 115 + (i * 20) + xShift)
      .attr('cy', 288)
     } else if (i >= 7 && i <= 13) {
      svg.append("circle")
      .attr('cx', 185)
      .attr('cy', -10)
      .attr('r', 10)
      .attr("id", "viz")
      .attr('stroke', 'black')
      .attr('fill', '#F6DA63')
      .transition()
      .duration(time * (i * timeFactor))
      .attr('cx', -13 + (i * 20) + xShift) 
      .attr('cy', 268)
     } else if (i > 13 && i <=21) {
      svg.append("circle")
      .attr('cx', 185)
      .attr('cy', -10)
      .attr('r', 10)
      .attr("id", "viz")
      .attr('stroke', 'black')
      .attr('fill', '#F6DA63')
      .transition()
      .duration(time * (i * timeFactor))
      .attr('cx', -165 + (i * 20) + xShift) 
      .attr('cy', 248)
     };
}};

function createPlasticPacific2017 (xShift) {
   makeBalls = Math.round(data[15].avg_measurement / 100);
        console.log(makeBalls);
        let time = 1000;
        let timeFactor = 0.05;

        for (i = 1; i<=makeBalls; i++) { 
         if (i < 7){
         svg.append("circle")
         .attr('cx', 185)
         .attr('cy', -10)
         .attr('r', 10)
         .attr("id", "viz")
         .attr('stroke', 'black')
         .attr('fill', '#EB8242')
         .transition()
         .duration(time * (i * timeFactor)) 
         .attr('cx', 115 + (i * 20) + xShift)
         .attr('cy', 288)
        } else if (i >= 7 && i <= 13) {
         svg.append("circle")
         .attr('cx', 185)
         .attr('cy', -10)
         .attr('r', 10)
         .attr("id", "viz")
         .attr('stroke', 'black')
         .attr('fill', '#EB8242')
         .transition()
         .duration(time * (i * timeFactor))
         .attr('cx', -13 + (i * 20) + xShift) 
         .attr('cy', 268)
        } else if (i > 13 && i <=21) {
         svg.append("circle")
         .attr('cx', 185)
         .attr('cy', -10)
         .attr('r', 10)
         .attr("id", "viz")
         .attr('stroke', 'black')
         .attr('fill', '#EB8242')
         .transition()
         .duration(time * (i * timeFactor))
         .attr('cx', -165 + (i * 20) + xShift) 
         .attr('cy', 248)
        } else if (i > 21 && i <= 30) {
         svg.append("circle")
         .attr('cx', 185)
         .attr('cy', -10)
         .attr('r', 10)
         .attr("id", "viz")
         .attr('stroke', 'black')
         .attr('fill', '#EB8242')
         .transition()
         .duration(time * (i * timeFactor))
         .attr('cx', -335 + (i * 20) + xShift) 
         .attr('cy', 228)
        } else if (i > 30 && i <= 40) {
         svg.append("circle")
         .attr('cx', 185)
         .attr('cy', -10)
         .attr('r', 10)
         .attr("id", "viz")
         .attr('stroke', 'black')
         .attr('fill', '#EB8242')
         .transition()
         .duration(time * (i * timeFactor))
         .attr('cx', -528 + (i * 20) + xShift) 
         .attr('cy', 208)
        }
        }
    };


// create 2018 cirklerne

function createPlasticAtla2018 (xShift) {
   makeBalls = Math.round(data[17].avg_measurement / 100);
   console.log(makeBalls);
   for (i = 1; i<=makeBalls; i++) { 
      let time = 1000;
      let timeFactor = 0.05;

      if (i < 7){
      svg.append("circle")
      .attr('cx', 185)
      .attr('cy', -10)
      .attr('r', 10)
      .attr("id", "viz")
      .attr('stroke', 'black')
      .attr('fill', '#EB8242')
      .transition()
      .duration(time * (i * timeFactor)) 
      .attr('cx', 115 + (i * 20) + xShift)
      .attr('cy', 288)
     }
  }
};


function createPlasticPacific2018 (xShift) {
   makeBalls = Math.round(data[19].avg_measurement / 100);
   console.log(makeBalls);
   for (i = 1; i<=makeBalls; i++) { 
      let time = 1000;
      let timeFactor = 0.05;

      if (i < 7){
      svg.append("circle")
      .attr('cx', 185)
      .attr('cy', -10)
      .attr('r', 10)
      .attr("id", "viz")
      .attr('stroke', 'black')
      .attr('fill', '#EB8242')
      .transition()
      .duration(time * (i * timeFactor)) 
      .attr('cx', 115 + (i * 20) + xShift)
      .attr('cy', 288)
     }else if (i >= 7 && i <= 13) {
      svg.append("circle")
      .attr('cx', 185)
      .attr('cy', -10)
      .attr('r', 10)
      .attr("id", "viz")
      .attr('stroke', 'black')
      .attr('fill', '#EB8242')
      .transition()
      .duration(time * (i * timeFactor))
      .attr('cx', -13 + (i * 20) + xShift) 
      .attr('cy', 268)
     } else if (i > 13 && i <=21) {
      svg.append("circle")
      .attr('cx', 185)
      .attr('cy', -10)
      .attr('r', 10)
      .attr("id", "viz")
      .attr('stroke', 'black')
      .attr('fill', '#EB8242')
      .transition()
      .duration(time * (i * timeFactor))
      .attr('cx', -165 + (i * 20) + xShift) 
      .attr('cy', 248)
     }
  }
};


// create 2019 cirklerne

    function createPlasticIndia2019 (xShift) {
      makeBalls = Math.round(data[22].avg_measurement / 100);
      console.log(makeBalls);

      for (i = 1; i<=makeBalls; i++) { 
       let time = 1000;
       let timeFactor = 0.05;

       if (i < 7){
       svg.append("circle")
       .attr('cx', 185)
       .attr('cy', -10)
       .attr('r', 10)
       .attr("id", "viz")
       .attr('stroke', 'black')
       .attr('fill', '#EB8242')
       .transition()
       .duration(time * (i * timeFactor)) 
       .attr('cx', 115 + (i * 20) + xShift)
       .attr('cy', 288)
      } else if (i >= 7 && i <= 13) {
       svg.append("circle")
       .attr('cx', 185)
       .attr('cy', -10)
       .attr('r', 10)
       .attr("id", "viz")
       .attr('stroke', 'black')
       .attr('fill', '#EB8242')
       .transition()
       .duration(time * (i * timeFactor))
       .attr('cx', -13 + (i * 20) + xShift) 
       .attr('cy', 268)
      } else if (i > 13 && i <=21) {
       svg.append("circle")
       .attr('cx', 185)
       .attr('cy', -10)
       .attr('r', 10)
       .attr("id", "viz")
       .attr('stroke', 'black')
       .attr('fill', '#EB8242')
       .transition()
       .duration(time * (i * timeFactor))
       .attr('cx', -165 + (i * 20) + xShift) 
       .attr('cy', 248)
      } else if (i > 21 && i <= 30) {
       svg.append("circle")
       .attr('cx', 185)
       .attr('cy', -10)
       .attr('r', 10)
       .attr("id", "viz")
       .attr('stroke', 'black')
       .attr('fill', '#EB8242')
       .transition()
       .duration(time * (i * timeFactor))
       .attr('cx', -335 + (i * 20) + xShift) 
       .attr('cy', 228)
      } else if (i > 30 && i <= 40) {
       svg.append("circle")
       .attr('cx', 185)
       .attr('cy', -10)
       .attr('r', 10)
       .attr("id", "viz")
       .attr('stroke', 'black')
       .attr('fill', '#EB8242')
       .transition()
       .duration(time * (i * timeFactor))
       .attr('cx', -528 + (i * 20) + xShift) 
       .attr('cy', 208)
      } else if (i > 40 && i <=51) {
       svg.append("circle")
       .attr('cx', 185)
       .attr('cy', -10)
       .attr('r', 10)
       .attr("id", "viz")
       .attr('stroke', 'black')
       .attr('fill', '#EB8242')
       .transition()
       .duration(time * (i * timeFactor))
       .attr('cx', -735 + (i * 20) + xShift) 
       .attr('cy', 188)
      }

  }};


    function createPlasticArc2019 (xShift) {
      makeBalls = Math.round(data[20].avg_measurement / 0.10);
      console.log(makeBalls);

      for (i = 1; i<=makeBalls; i++) { 
       let time = 1000;
       let timeFactor = 0.05;
       let r = 5
       let d = r * 2

       if (i < 7){
       svg.append("circle")
       .attr('cx', 185)
       .attr('cy', -10)
       .attr('r', r)
       .attr("id", "viz")
       .attr('stroke', 'black')
       .attr('fill', '#FFFFFF')
       .transition()
       .duration(time * (i * timeFactor)) 
       .attr('cx', 115 + (i * d) + xShift)
       .attr('cy', 293)
      }

  }};



    function createPlasticAtla2019 (xShift) {
        makeBalls = Math.round(data[21].avg_measurement / 500);
        console.log(makeBalls);

        for (i = 1; i<=makeBalls; i++) { 
         let time = 1000;
         let timeFactor = 0.05;
 
         if (i < 7){
         svg.append("circle")
         .attr('cx', 185)
         .attr('cy', -10)
         .attr('r', 10)
         .attr("id", "viz")
         .attr('stroke', 'black')
         .attr('fill', '#DA2D2D')
         .transition()
         .duration(time * (i * timeFactor)) 
         .attr('cx', 115 + (i * 20) + xShift)
         .attr('cy', 288)
        } else if (i >= 7 && i <= 13) {
         svg.append("circle")
         .attr('cx', 185)
         .attr('cy', -10)
         .attr('r', 10)
         .attr("id", "viz")
         .attr('stroke', 'black')
         .attr('fill', '#DA2D2D')
         .transition()
         .duration(time * (i * timeFactor))
         .attr('cx', -13 + (i * 20) + xShift) 
         .attr('cy', 268)
        } else if (i > 13 && i <=21) {
         svg.append("circle")
         .attr('cx', 185)
         .attr('cy', -10)
         .attr('r', 10)
         .attr("id", "viz")
         .attr('stroke', 'black')
         .attr('fill', '#DA2D2D')
         .transition()
         .duration(time * (i * timeFactor))
         .attr('cx', -165 + (i * 20) + xShift) 
         .attr('cy', 248)
        } else if (i > 21 && i <= 30) {
         svg.append("circle")
         .attr('cx', 185)
         .attr('cy', -10)
         .attr('r', 10)
         .attr("id", "viz")
         .attr('stroke', 'black')
         .attr('fill', '#DA2D2D')
         .transition()
         .duration(time * (i * timeFactor))
         .attr('cx', -335 + (i * 20) + xShift) 
         .attr('cy', 228)
        }

    }};


    function createPlasticPacific2019 (xShift) {
        makeBalls = Math.round(data[23].avg_measurement / 500);
        console.log(makeBalls);
        let time = 1000;
        let timeFactor = 0.05;

        for (i = 1; i<=makeBalls; i++) { 
         let time = 1000;
         let timeFactor = 0.05;
 
         if (i < 7){
         svg.append("circle")
         .attr('cx', 185)
         .attr('cy', -10)
         .attr('r', 10)
         .attr("id", "viz")
         .attr('stroke', 'black')
         .attr('fill', '#DA2D2D')
         .transition()
         .duration(time * (i * timeFactor)) 
         .attr('cx', 115 + (i * 20) + xShift)
         .attr('cy', 288)
        } else if (i >= 7 && i <= 13) {
         svg.append("circle")
         .attr('cx', 185)
         .attr('cy', -10)
         .attr('r', 10)
         .attr("id", "viz")
         .attr('stroke', 'black')
         .attr('fill', '#DA2D2D')
         .transition()
         .duration(time * (i * timeFactor))
         .attr('cx', -13 + (i * 20) + xShift) 
         .attr('cy', 268)
        } else if (i > 13 && i <=21) {
         svg.append("circle")
         .attr('cx', 185)
         .attr('cy', -10)
         .attr('r', 10)
         .attr("id", "viz")
         .attr('stroke', 'black')
         .attr('fill', '#DA2D2D')
         .transition()
         .duration(time * (i * timeFactor))
         .attr('cx', -165 + (i * 20) + xShift) 
         .attr('cy', 248)
        } else if (i > 21 && i <= 30) {
         svg.append("circle")
         .attr('cx', 185)
         .attr('cy', -10)
         .attr('r', 10)
         .attr("id", "viz")
         .attr('stroke', 'black')
         .attr('fill', '#DA2D2D')
         .transition()
         .duration(time * (i * timeFactor))
         .attr('cx', -335 + (i * 20) + xShift) 
         .attr('cy', 228)
        }
        }
    }


// create 2020 cirklerne

    function createPlasticAtla2020 (xShift) {
      makeBalls = Math.round(data[25].avg_measurement / 0.1);
        console.log(makeBalls);

        for (i = 1; i<=makeBalls; i++) { 
         let time = 1000;
         let timeFactor = 0.05;
 
         let r = 5
         let d = r * 2
  
         if (i < 12){
         svg.append("circle")
         .attr('cx', 185)
         .attr('cy', -10)
         .attr('r', r)
         .attr("id", "viz")
         .attr('stroke', 'black')
         .attr('fill', '#FFFFFF')
         .transition()
         .duration(time * (i * timeFactor)) 
         .attr('cx', 115 + (i * d) + xShift)
         .attr('cy', 293)
        }
    }};

    function createPlasticIndia2020 (xShift) {
      makeBalls = Math.round(data[26].avg_measurement / 100);
      console.log(makeBalls);

      for (i = 1; i<=makeBalls; i++) { 
       let time = 1000;
       let timeFactor = 0.05;

       if (i < 7){
       svg.append("circle")
       .attr('cx', 185)
       .attr('cy', -10)
       .attr('r', 10)
       .attr("id", "viz")
       .attr('stroke', 'black')
       .attr('fill', '#EB8242')
       .transition()
       .duration(time * (i * timeFactor)) 
       .attr('cx', 115 + (i * 20) + xShift)
       .attr('cy', 288)
      }
    }};

    function createPlasticPacific2020 (xShift) {
      makeBalls = Math.round(data[27].avg_measurement / 100);
        console.log(makeBalls);

        for (i = 1; i<=makeBalls; i++) { 
         let time = 1000;
         let timeFactor = 0.05;
 
         if (i < 7){
         svg.append("circle")
         .attr('cx', 185)
         .attr('cy', -10)
         .attr('r', 10)
         .attr("id", "viz")
         .attr('stroke', 'black')
         .attr('fill', '#EB8242')
         .transition()
         .duration(time * (i * timeFactor)) 
         .attr('cx', 115 + (i * 20) + xShift)
         .attr('cy', 288)
        }
    }};









// Tilføjer en 'eventListener' til knappen, som gør at når den bliver klikket kører den funktionen

const btn14 = document.getElementById("2014btn");
btn14.addEventListener("click", show2014, false);   // Tredje paratemer i addEventListener er optionel, og bruges ikke i vores projekt, ved ikke hvad det gør


const btn15 = document.getElementById("2015btn");
btn15.addEventListener("click", show2015, false);


const btn16 = document.getElementById("2016btn");
btn16.addEventListener("click", show2016, false);


const btn17 = document.getElementById("2017btn");
btn17.addEventListener("click", show2017, false);


const btn18 = document.getElementById("2018btn");
btn18.addEventListener("click", show2018, false);


const btn19 = document.getElementById("2019btn");
 btn19.addEventListener("click", show2019, false);


const btn20 = document.getElementById("2020btn");
btn20.addEventListener("click", show2020, false);


});