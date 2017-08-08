var w = 400;
var h = 500;

var monthlySales = [
    { "month": 1, "sales": 20 },
    { "month": 2, "sales": 14 },
    { "month": 3, "sales": 20 },
    { "month": 4, "sales": 21 },
    { "month": 5, "sales": 15 },
    { "month": 6, "sales": 22 },
    { "month": 7, "sales": 9 },
    { "month": 8, "sales": 6 },
    { "month": 9, "sales": 23 },
    { "month": 10, "sales": 7 },
    { "month": 11, "sales": 27 },
    { "month": 12, "sales": 11 }
]

var line = d3.line()
    .x(function (d) { return d.month })
    .y(function (d) { return h - d.sales })
    .curve(d3.curveLinear);

var svg = d3.select("body")
    .append("svg")
    .attr({
        "width": w,
        "height": h
    });               