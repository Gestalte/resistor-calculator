function NumberOfBandSelection(number) {
    switch (number) {
        case 4:
            d3.select("#band3").style("stroke", "none");
            d3.select("#band6").style("stroke", "none");

            d3.select("#band3DropDown").attr("hidden", true);
            d3.select("#band3DropDownLabel").attr("hidden", true);
            d3.select("#tempCoDropDown").attr("hidden", true);
            d3.select("#tempCoDropDownLabel").attr("hidden", true);

            // Move Band 5 to end of resistor
            d3.select("#band5")
                .attr("x1", xScale(18) + 8)
                .attr("x2", xScale(18) + 8)
                .attr("y1", yScale(3))
                .attr("y2", yScale(-3));

            break;
        case 5:
            d3.select("#band3").style("stroke", "black");
            d3.select("#band6").style("stroke", "none");

            d3.select("#band3DropDown").attr("hidden", null);
            d3.select("#band3DropDownLabel").attr("hidden", null);

            d3.select("#tempCoDropDown").attr("hidden", true);
            d3.select("#tempCoDropDownLabel").attr("hidden", true);

            d3.select("#band5")
                .attr("x1", xScale(18) + 8)
                .attr("x2", xScale(18) + 8)
                .attr("y1", yScale(3))
                .attr("y2", yScale(-3));

            break;
        case 6:
            d3.select("#band3").style("stroke", "black");
            d3.select("#band6").style("stroke", "black");

            d3.select("#band3DropDown").attr("hidden", null);
            d3.select("#band3DropDownLabel").attr("hidden", null);
            d3.select("#tempCoDropDown").attr("hidden", null);
            d3.select("#tempCoDropDownLabel").attr("hidden", null);

            // Move Band 5 to before the end of resistor
            d3.select("#band5")
                .attr("x1", xScale(14) + 8)
                .attr("x2", xScale(14) + 8)
                .attr("y1", yScale(2))
                .attr("y2", yScale(-2));

            break;
    };
}

function HandleSelection(colors, dropDownId, bandId) {
    var index = document.getElementById(dropDownId).selectedIndex;

    d3.select("#" + dropDownId).style('background', colors[index][0]).style('color', colors[index][1]);

    d3.select("#" + bandId).style("stroke", colors[index][0]);
}

var bandColors = [
    ["none", "black"],
    ["black","white"],
    ["brown","white"],
    ["red","white"],
    ["orange","black"],
    ["yellow","black"],
    ["green","white"],
    ["blue","white"],
    ["violet","black"],
    ["gray","white"],
    ["white","black"],
];

function selectBand1(){
    HandleSelection(bandColors, "band1DropDown", "band1");
}

function selectBand2(){
    HandleSelection(bandColors, "band2DropDown", "band2");
}

function selectBand3(){
    HandleSelection(bandColors, "band3DropDown", "band3");
}

var multiplierColors = [
    ["none", "black"],
    ["black", "white"],
    ["brown", "white"],
    ["red", "white"],
    ["orange", "black"],
    ["yellow", "black"],
    ["green", "white"],
    ["blue", "white"],
    ["violet", "black"],
    ["grey", "white"],
    ["white", "black"],
    ["gold", "black"],
    ["silver", "black"],
];

function SelectMultiplier() {
    HandleSelection(multiplierColors, "multiplierDropDown", "band4");
}

var toleranceColors = [
    ["none", "black"],
    ["brown", "white"],
    ["red", "white"],
    ["green", "white"],
    ["blue", "white"],
    ["violet", "black"],
    ["grey", "white"],
    ["gold", "black"],
    ["silver", "black"],
];

function SelectTolerance() {
    HandleSelection(toleranceColors, "toleranceDropDown", "band5");
}

var tempCoColors =[
    ["none", "black"],
    ["brown", "white"],
    ["red", "white"],
    ["orange", "black"],
    ["yellow", "black"],
    ["blue", "white"],
    ["violet", "black"],
];

function SelectTempCo() {
    HandleSelection(tempCoColors, "tempCoDropDown", "band6");
}

var resistorBodyShape = [
    { a: 1, b: 2 },
    { a: 2, b: 3 },
    { a: 5, b: 3 },
    { a: 7, b: 2 },
    { a: 15, b: 2 },
    { a: 17, b: 3 },
    { a: 20, b: 3 },
    { a: 21, b: 2 },
];

var xScale = d3.scaleLinear().domain([0, 22]).range([20, 480]);
var yScale = d3.scaleLinear().domain([-4, 4]).range([200, 20]);

//var xAxis = d3.axisBottom()
//    .scale(xScale)
//    .tickSize(200)
//    .ticks(22);

//var yAxis = d3.axisRight()
//    .scale(yScale)
//    .tickSize(480)
//    .ticks(9);

//d3.select("svg").append("g").attr("id", "xAxisG").call(xAxis);
//d3.select("svg").append("g").attr("id", "yAxisG").call(yAxis);

// Wire
d3.select("svg")
    .append("line")
    .attr("x1", xScale(0))
    .attr("x2", xScale(22))
    .attr("y1", yScale(0))
    .attr("y2", yScale(0))
    .style("stroke", "black")
    .style("stroke-width", 16);

var shapeArea = d3.area()
    .x(d => xScale(d.a))
    .y0(d => yScale(d.b))
    .y1(d => yScale(-d.b)).curve(d3.curveCardinal);

// Resistor body
d3.select("svg")
    .append("path")
    .attr("d", shapeArea(resistorBodyShape))
    .attr("fill", "lavender")
    .attr("stroke", "black")
    .attr("stroke-width", 2);

// Band 1
d3.select("svg")
    .append("line")
    .attr("x1", xScale(3) + 8)
    .attr("x2", xScale(3) + 8)
    .attr("y1", yScale(3))
    .attr("y2", yScale(-3))
    .style("stroke", "brown")
    .style("stroke-width", 16)
    .attr("id", "band1");

// Band 2
d3.select("svg")
    .append("line")
    .attr("x1", xScale(7) + 8)
    .attr("x2", xScale(7) + 8)
    .attr("y1", yScale(2))
    .attr("y2", yScale(-2))
    .style("stroke", "white")
    .style("stroke-width", 16)
    .attr("id", "band2");

// Band 3
d3.select("svg")
    .append("line")
    .attr("x1", xScale(9) + 8)
    .attr("x2", xScale(9) + 8)
    .attr("y1", yScale(2))
    .attr("y2", yScale(-2))
    .style("stroke", "silver")
    .style("stroke-width", 16)
    .attr("id", "band3");

// Band 4
d3.select("svg")
    .append("line")
    .attr("x1", xScale(11) + 8)
    .attr("x2", xScale(11) + 8)
    .attr("y1", yScale(2))
    .attr("y2", yScale(-2))
    .style("stroke", "gold")
    .style("stroke-width", 16)
    .attr("id", "band4");

// Band 5
d3.select("svg")
    .append("line")
    .attr("x1", xScale(14) + 8)
    .attr("x2", xScale(14) + 8)
    .attr("y1", yScale(2))
    .attr("y2", yScale(-2))
    .style("stroke", "red")
    .style("stroke-width", 16)
    .attr("id", "band5");

// Band 6
d3.select("svg")
    .append("line")
    .attr("x1", xScale(18) + 8)
    .attr("x2", xScale(18) + 8)
    .attr("y1", yScale(3))
    .attr("y2", yScale(-3))
    .style("stroke", "yellow")
    .style("stroke-width", 16)
    .attr("id", "band6");

function OhmUnits(amount) {
    var result = "";

    if (amount >= 1000000000) {
        result = "GΩ";
    } else if (amount >= 1000000) {
        result = "MΩ";
    } else if (amount >= 1000) {
        result = "KΩ";
    } else if (amount < 1000) {
        result = "Ω";
    }

    return result;
}

d3.text("infobox.html", data => {
    d3.select("body").append("div").attr("id", "infobox").html(data);
});