const svg = d3.selectAll(".visual-container").append("svg").attr("width", 1560).attr("height", 1002);
console.log(svg);


function createBox (xShift, yShift, ScalingFactor) {

svg.append('line')
  .attr('x1', 156 * ScalingFactor + xShift)  
  .attr('y1', 655 * ScalingFactor + yShift)  
  .attr('x2', 312 * ScalingFactor + xShift) 
  .attr('y2', 720 * ScalingFactor + yShift) 
  .attr('stroke', '#fcffc7');

svg.append('line')
  .attr('x1', 312 * ScalingFactor  + xShift)
  .attr('y1', 720 * ScalingFactor + yShift) 
  .attr('x2', 468 * ScalingFactor  + xShift)
  .attr('y2', 655 * ScalingFactor + yShift)  
  .attr('stroke', '#fcffc7');

svg.append('line')
  .attr('x1', 468 * ScalingFactor  + xShift)
  .attr('y1', 655 * ScalingFactor + yShift )  
  .attr('x2', 312 * ScalingFactor  + xShift)
  .attr('y2', 590 * ScalingFactor + yShift) 
  .attr('stroke', '#fcffc7');

svg.append('line')
  .attr('x1', 312 * ScalingFactor  + xShift)
  .attr('y1', 590 * ScalingFactor + yShift)  
  .attr('x2', 156 * ScalingFactor  + xShift)
  .attr('y2', 655 * ScalingFactor + yShift)  
  .attr('stroke', '#fcffc7');

// Bottom of box

svg.append('line')
  .attr('x1', 156 * ScalingFactor  + xShift)
  .attr('y1', 865 * ScalingFactor + yShift)
  .attr('x2', 312 * ScalingFactor  + xShift) 
  .attr('y2', 925 * ScalingFactor  + yShift)  
  .attr('stroke', '#fcffc7');

svg.append('line')
  .attr('x1', 312 * ScalingFactor  + xShift)
  .attr('y1', 925 * ScalingFactor + yShift) 
  .attr('x2', 468 * ScalingFactor  + xShift)
  .attr('y2', 865 * ScalingFactor + yShift) 
  .attr('stroke', '#fcffc7');

svg.append('line')
  .attr('x1', 468 * ScalingFactor  + xShift)
  .attr('y1', 865 * ScalingFactor + yShift)  
  .attr('x2', 312 * ScalingFactor  + xShift)
  .attr('y2', 800 * ScalingFactor + yShift)  
  .attr('stroke', '#fcffc7');

svg.append('line')
  .attr('x1', 312 * ScalingFactor  + xShift)
  .attr('y1', 800 * ScalingFactor + yShift) 
  .attr('x2', 156 * ScalingFactor  + xShift)
  .attr('y2', 865 * ScalingFactor + yShift)  
  .attr('stroke', '#fcffc7');

// Sides of box

svg.append('line')
  .attr('x1', 156 * ScalingFactor  + xShift)
  .attr('y1', 655 * ScalingFactor + yShift)  
  .attr('x2', 156 * ScalingFactor  + xShift)
  .attr('y2', 865 * ScalingFactor + yShift)  
  .attr('stroke', '#fcffc7');

svg.append('line')
  .attr('x1', 468 * ScalingFactor + xShift)
  .attr('y1', 655 * ScalingFactor + yShift)  
  .attr('x2', 468 * ScalingFactor + xShift)
  .attr('y2', 865 * ScalingFactor + yShift) 
  .attr('stroke', '#fcffc7');

svg.append('line')
  .attr('x1', 312 * ScalingFactor  + xShift)
  .attr('y1', 720 * ScalingFactor + yShift) 
  .attr('x2', 312 * ScalingFactor  + xShift) 
  .attr('y2', 925 * ScalingFactor + yShift)  
  .attr('stroke', '#fcffc7');

  return this;
}

createBox(0, 500, 0.5);
createBox(250, 500, 0.5);

createBox(500, 500, 0.5);
createBox(750, 500, 0.5);
createBox(1000, 500, 0.5);