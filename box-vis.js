const svg = d3.selectAll(".visual-container").append("svg").attr("width", 1122).attr("height", 302);
console.log(svg);


// top of box

svg.append('line')
.attr('x1', 50)
.attr('y1', 75)
.attr('x2', 100)
.attr('y2', 110)
.attr('stroke', 'red');

svg.append('line')
.attr('x1', 100)
.attr('y1', 110)
.attr('x2', 150)
.attr('y2', 75)
.attr('stroke', 'red');

svg.append('line')
.attr('x1', 150)
.attr('y1', 75)
.attr('x2', 100)
.attr('y2', 40)
.attr('stroke', 'red');

svg.append('line')
.attr('x1', 100)
.attr('y1', 40)
.attr('x2', 50)
.attr('y2', 75)
.attr('stroke', 'red');


// bottom of box


svg.append('line')
.attr('x1', 50)
.attr('y1', 145)
.attr('x2', 100)
.attr('y2', 180)
.attr('stroke', 'red');

svg.append('line')
.attr('x1', 100)
.attr('y1', 180)
.attr('x2', 150)
.attr('y2', 145)
.attr('stroke', 'red');

svg.append('line')
.attr('x1', 150)
.attr('y1', 145)
.attr('x2', 100)
.attr('y2', 110)
.attr('stroke', 'red');

svg.append('line')
.attr('x1', 100)
.attr('y1', 110)
.attr('x2', 50)
.attr('y2', 145)
.attr('stroke', 'red');


// Sides of box


svg.append('line')
.attr('x1', 50)
.attr('y1', 75)
.attr('x2', 50)
.attr('y2', 145)
.attr('stroke', 'red');


svg.append('line')
.attr('x1', 150)
.attr('y1', 75)
.attr('x2', 150)
.attr('y2', 145)
.attr('stroke', 'red');


svg.append('line')
.attr('x1', 100)
.attr('y1', 110)
.attr('x2', 100)
.attr('y2', 180)
.attr('stroke', 'red');