var width = 800;
var height = 300;
var margin = { top: 20, bottom: 20, left: 20, right: 20 };
var dataset = [
    { date: new Date(2007, 3, 24), value: 3.24 },
    { date: new Date(2007, 3, 25), value: 85.35 },
    { date: new Date(2007, 3, 26), value: 78.84 },
    { date: new Date(2007, 3, 27), value: 99.92 },
    { date: new Date(2007, 3, 30), value: 29.80 },
    { date: new Date(2007, 4, 1), value: 69.47 },
];

var xExtent = d3.extent(dataset, d => d.date);
var xScale = d3.scaleTime()
    .domain(xExtent).range([0, width - margin.right]);
var xAxis = d3.axisBottom().scale(xScale);

var yMax = d3.max(dataset, d => d.value);
var yScale = d3.scaleLinear()
    .domain([0, yMax]).range([height, 0]);
var yAxis = d3.axisLeft().scale(yScale);

var svg = d3.select('svg').append('g')
    .attr('transform', 'translate(40,20)');