const svg = d3.selectAll(".visual-container").append("svg").attr("width", 1122).attr("height", 302);
console.log(svg);

svg.append('line')
.attr('x1', 10)
.attr('y1', 10)
.attr('x2', 200)
.attr('y2', 100)
.attr('stroke', 'red')