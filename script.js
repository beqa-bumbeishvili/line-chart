var dataset = [
    { key: "Jelly", value: 60, date: "2014/01/01" },
    { key: "Jelly", value: 58, date: "2014/01/02" },
    { key: "Jelly", value: 59, date: "2014/01/03" },
    { key: "Jelly", value: 56, date: "2014/01/04" },
    { key: "Jelly", value: 57, date: "2014/01/05" },
    { key: "Jelly", value: 55, date: "2014/01/06" },
    { key: "Jelly", value: 56, date: "2014/01/07" },
    { key: "Jelly", value: 52, date: "2014/01/08" },
    { key: "Jelly", value: 54, date: "2014/01/09" },
    { key: "Jelly", value: 57, date: "2014/01/10" },
    { key: "Jelly", value: 56, date: "2014/01/11" },
    { key: "Jelly", value: 59, date: "2014/01/12" },
    { key: "Jelly", value: 56, date: "2014/01/13" },
    { key: "Jelly", value: 52, date: "2014/01/14" },
    { key: "Jelly", value: 48, date: "2014/01/15" },
    { key: "Jelly", value: 47, date: "2014/01/16" },
    { key: "Jelly", value: 48, date: "2014/01/17" },
    { key: "Jelly", value: 45, date: "2014/01/18" },
    { key: "Jelly", value: 43, date: "2014/01/19" },
    { key: "Jelly", value: 41, date: "2014/01/20" },
    { key: "Jelly", value: 37, date: "2014/01/21" },
    { key: "Jelly", value: 36, date: "2014/01/22" },
    { key: "Jelly", value: 39, date: "2014/01/23" },
    { key: "Jelly", value: 41, date: "2014/01/24" },
    { key: "Jelly", value: 42, date: "2014/01/25" },
    { key: "Jelly", value: 40, date: "2014/01/26" },
    { key: "Jelly", value: 43, date: "2014/01/27" },
    { key: "Jelly", value: 41, date: "2014/01/28" },
    { key: "Jelly", value: 39, date: "2014/01/29" },
    { key: "Jelly", value: 40, date: "2014/01/30" },
    { key: "Jelly", value: 39, date: "2014/01/31" }
];

var svgWidth = 800;
var svgHeight = 450;
var margin = {
    top: 58,
    bottom: 100,
    left: 80,
    right: 40
};
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

var svg = d3.select("body")
    .append("svg")
    .attr("id", "chart")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

var lineChart = svg.append("g")
    .classed("display", true)
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var dataParser = d3.timeParse("%Y/%m/%d");

var x = d3.isoFormat().scale()
    .domain(d3.extent(dataset, function (d) {
        return dataParser(d.date);
    }))
    .range([0,width]);

var y = d3.scale.linear()
    .domain([0, d3.max(dataset, function (d) {
        return d.value;
    })]).range([height, 0]);

function plot(parameters) {
    //enter
    this.selectAll(".point")
        .data(parameters.data)
        .enter()
        .append("circle")
        .classed("point", true)
        .attr("r", 2);

    this.selectAll(".point")
    .attr("cx", function(d){
        return dataParser(d.date);
    })    
    //update

    this.selectAll(".point")
    .data(params.data)
    .exit()
    .remove();
    //exit
}

plot.call(chart, {
    data: dataset
});