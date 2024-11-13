const svg = d3.selectAll(".visual-container").append("svg").attr("width", 1560).attr("height", 1002);
console.log(svg);


function createBox (xShift, yShift, ScalingFactor) {

svg.append('line')
  .attr('x1', 156 * ScalingFactor + xShift)  
  .attr('y1', 655 * ScalingFactor + yShift)  
  .attr('x2', 312 * ScalingFactor + xShift) 
  .attr('y2', 720 * ScalingFactor + yShift) 
  .attr('stroke', 'red');

svg.append('line')
  .attr('x1', 312 * ScalingFactor  + xShift)
  .attr('y1', 720 * ScalingFactor + yShift) 
  .attr('x2', 468 * ScalingFactor  + xShift)
  .attr('y2', 655 * ScalingFactor + yShift)  
  .attr('stroke', 'red');

svg.append('line')
  .attr('x1', 468 * ScalingFactor  + xShift)
  .attr('y1', 655 * ScalingFactor + yShift )  
  .attr('x2', 312 * ScalingFactor  + xShift)
  .attr('y2', 590 * ScalingFactor + yShift) 
  .attr('stroke', 'red');

svg.append('line')
  .attr('x1', 312 * ScalingFactor  + xShift)
  .attr('y1', 590 * ScalingFactor + yShift)  
  .attr('x2', 156 * ScalingFactor  + xShift)
  .attr('y2', 655 * ScalingFactor + yShift)  
  .attr('stroke', 'red');

// Bottom of box

svg.append('line')
  .attr('x1', 156 * ScalingFactor  + xShift)
  .attr('y1', 865 * ScalingFactor + yShift)
  .attr('x2', 312 * ScalingFactor  + xShift) 
  .attr('y2', 925 * ScalingFactor  + yShift)  
  .attr('stroke', 'red');

svg.append('line')
  .attr('x1', 312 * ScalingFactor  + xShift)
  .attr('y1', 925 * ScalingFactor + yShift) 
  .attr('x2', 468 * ScalingFactor  + xShift)
  .attr('y2', 865 * ScalingFactor + yShift) 
  .attr('stroke', 'red');

svg.append('line')
  .attr('x1', 468 * ScalingFactor  + xShift)
  .attr('y1', 865 * ScalingFactor + yShift)  
  .attr('x2', 312 * ScalingFactor  + xShift)
  .attr('y2', 800 * ScalingFactor + yShift)  
  .attr('stroke', 'red');

svg.append('line')
  .attr('x1', 312 * ScalingFactor  + xShift)
  .attr('y1', 800 * ScalingFactor + yShift) 
  .attr('x2', 156 * ScalingFactor  + xShift)
  .attr('y2', 865 * ScalingFactor + yShift)  
  .attr('stroke', 'red');

// Sides of box

svg.append('line')
  .attr('x1', 156 * ScalingFactor  + xShift)
  .attr('y1', 655 * ScalingFactor + yShift)  
  .attr('x2', 156 * ScalingFactor  + xShift)
  .attr('y2', 865 * ScalingFactor + yShift)  
  .attr('stroke', 'red');

svg.append('line')
  .attr('x1', 468 * ScalingFactor + xShift)
  .attr('y1', 655 * ScalingFactor + yShift)  
  .attr('x2', 468 * ScalingFactor + xShift)
  .attr('y2', 865 * ScalingFactor + yShift) 
  .attr('stroke', 'red');

svg.append('line')
  .attr('x1', 312 * ScalingFactor  + xShift)
  .attr('y1', 720 * ScalingFactor + yShift) 
  .attr('x2', 312 * ScalingFactor  + xShift) 
  .attr('y2', 925 * ScalingFactor + yShift)  
  .attr('stroke', 'red');

  return this;
}

createBox(-50, 300, 0.75);
createBox(250, 300, 0.75);

createBox(550, 300, 0.75);
createBox(850, 300, 0.75);
createBox(1150, 300, 0.75);


svg.append("rect")
.attr('x', 680)
.attr('y', 0)
.attr('width', 200)
.attr('height', 200)
.attr('fill', 'grey');



const averagePlasticPrM3InSea = [20000, 10000, 500, 500000, 4000]


for(let i = 0; i<averagePlasticPrM3InSea.length; i++) {
    console.log(Math.floor(averagePlasticPrM3InSea[i] / 100))
}



