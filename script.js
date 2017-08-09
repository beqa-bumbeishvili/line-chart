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

var line = d3.line()
    .x(function (d) { return d.month })
    .y(function (d) { return h - d.sales })

var svg = d3.select("body")
    .append("svg")
    .attr({
        "width": w,
        "height": h
    });

var path = d3.select("svg").append("path")
    .attr({
        d: line(monthlySales),
        "fill": "none",
        "stroke": "blue"
    });

var label = d3.select("svg").selectAll("text")
    .data(monthlySales)
    .enter()
    .append("text")
    .text(function (d) {
        return d.sales;
    })
    .attr({
        x: function (d) {
            return d.month * 4;
        },
        y: function (d) {
            return h - d.sales;
        }
    })