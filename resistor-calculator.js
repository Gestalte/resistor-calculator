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

function setBandColor(band, color) {
    d3.select(`${band}`).style("stroke", color);
}

function SelectBand(selection, id, band) {
    switch (selection) {
        case 0:
            d3.select(`${id}`).style("background", "black").style("color", "white");
            setBandColor(band, "black");
            break;
        case 1:
            d3.select(`${id}`).style("background", "brown").style("color", "white");
            setBandColor(band, "brown");
            break;
        case 2:
            d3.select(`${id}`).style("background", "red").style("color", "white");
            setBandColor(band, "red");
            break;
        case 3:
            d3.select(`${id}`).style("background", "orange").style("color", "black");
            setBandColor(band, "orange");
            break;
        case 4:
            d3.select(`${id}`).style("background", "yellow").style("color", "black");
            setBandColor(band, "yellow");
            break;
        case 5:
            d3.select(`${id}`).style("background", "green").style("color", "white");
            setBandColor(band, "green");
            break;
        case 6:
            d3.select(`${id}`).style("background", "blue").style("color", "white");
            setBandColor(band, "blue");
            break;
        case 7:
            d3.select(`${id}`).style("background", "violet").style("color", "black");
            setBandColor(band, "violet");
            break;
        case 8:
            d3.select(`${id}`).style("background", "gray").style("color", "white");
            setBandColor(band, "gray");
            break;
        case 9:
            d3.select(`${id}`).style("background", "white").style("color", "black");
            setBandColor(band, "white");
            break;
    };
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

var xAxis = d3.axisBottom()
    .scale(xScale)
    .tickSize(200)
    .ticks(22);

var yAxis = d3.axisRight()
    .scale(yScale)
    .tickSize(480)
    .ticks(9);

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