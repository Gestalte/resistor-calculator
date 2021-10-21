function NumberOfBandSelection(number) {
    switch (number) {
        case 4:
            document.getElementById("band3DropDown").selectedIndex = 0;
            selectBand3();
            document.getElementById("tempCoDropDown").selectedIndex = 0;
            SelectTempCo();

            d3.select("#band3DropDown").attr("hidden", true);
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
            d3.select("#band3DropDown").attr("hidden", null);
            d3.select("#band3DropDownLabel").attr("hidden", null);

            d3.select("#tempCoDropDown").attr("hidden", true);
            d3.select("#tempCoDropDownLabel").attr("hidden", true);
            document.getElementById("tempCoDropDown").selectedIndex = 0;
            SelectTempCo();

            d3.select("#band5")
                .attr("x1", xScale(18) + 8)
                .attr("x2", xScale(18) + 8)
                .attr("y1", yScale(3))
                .attr("y2", yScale(-3));

            break;
        case 6:
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

var bandColors = [
    ["none", "black"],
    ["black", "white"],
    ["brown", "white"],
    ["red", "white"],
    ["orange", "black"],
    ["yellow", "black"],
    ["green", "white"],
    ["blue", "white"],
    ["violet", "black"],
    ["gray", "white"],
    ["white", "black"],
];

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

var tempCoColors = [
    ["none", "black"],
    ["brown", "white"],
    ["red", "white"],
    ["orange", "black"],
    ["yellow", "black"],
    ["blue", "white"],
    ["violet", "black"],
];

function HandleSelection(colors, dropDownId, bandId) {
    var index = document.getElementById(dropDownId).selectedIndex;
    d3.select("#" + dropDownId).style('background', colors[index][0]).style('color', colors[index][1]);
    d3.select("#" + bandId).style("stroke", colors[index][0]);
}

function selectBand1() {
    HandleSelection(bandColors, "band1DropDown", "band1");
    SetResultsDisplay();
}

function selectBand2() {
    HandleSelection(bandColors, "band2DropDown", "band2");
    SetResultsDisplay();
}

function selectBand3() {
    HandleSelection(bandColors, "band3DropDown", "band3");
    SetResultsDisplay();
}

function SelectMultiplier() {
    HandleSelection(multiplierColors, "multiplierDropDown", "band4");
    SetResultsDisplay();
}

function SelectTolerance() {
    HandleSelection(toleranceColors, "toleranceDropDown", "band5");
    SetResultsDisplay();
}

function SelectTempCo() {
    HandleSelection(tempCoColors, "tempCoDropDown", "band6");
    SetResultsDisplay();
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
    .style("stroke", "none")
    .style("stroke-width", 16)
    .attr("id", "band1");

// Band 2
d3.select("svg")
    .append("line")
    .attr("x1", xScale(7) + 8)
    .attr("x2", xScale(7) + 8)
    .attr("y1", yScale(2))
    .attr("y2", yScale(-2))
    .style("stroke", "none")
    .style("stroke-width", 16)
    .attr("id", "band2");

// Band 3
d3.select("svg")
    .append("line")
    .attr("x1", xScale(9) + 8)
    .attr("x2", xScale(9) + 8)
    .attr("y1", yScale(2))
    .attr("y2", yScale(-2))
    .style("stroke", "none")
    .style("stroke-width", 16)
    .attr("id", "band3");

// Band 4
d3.select("svg")
    .append("line")
    .attr("x1", xScale(11) + 8)
    .attr("x2", xScale(11) + 8)
    .attr("y1", yScale(2))
    .attr("y2", yScale(-2))
    .style("stroke", "none")
    .style("stroke-width", 16)
    .attr("id", "band4");

// Band 5
d3.select("svg")
    .append("line")
    .attr("x1", xScale(14) + 8)
    .attr("x2", xScale(14) + 8)
    .attr("y1", yScale(2))
    .attr("y2", yScale(-2))
    .style("stroke", "none")
    .style("stroke-width", 16)
    .attr("id", "band5");

// Band 6
d3.select("svg")
    .append("line")
    .attr("x1", xScale(18) + 8)
    .attr("x2", xScale(18) + 8)
    .attr("y1", yScale(3))
    .attr("y2", yScale(-3))
    .style("stroke", "none")
    .style("stroke-width", 16)
    .attr("id", "band6");

function resetDropDowns() {
    NumberOfBandSelection(4);
    document.getElementById("resistorBands").selectedIndex = 0;

    document.getElementById("band1DropDown").selectedIndex = 0;
    document.getElementById("band2DropDown").selectedIndex = 0;
    document.getElementById("band3DropDown").selectedIndex = 0;
    document.getElementById("multiplierDropDown").selectedIndex = 0;
    document.getElementById("toleranceDropDown").selectedIndex = 0;
    document.getElementById("tempCoDropDown").selectedIndex = 0;

    selectBand1();
    selectBand2();
    selectBand3();
    SelectMultiplier();
    SelectTolerance();
    SelectTempCo();
}


function OhmUnits(amount) {
    var result = "";

    if (amount >= 1000000000) {
        result = (amount / 1000000000) + " GΩ";
    } else if (amount >= 1000000) {
        result = (amount / 1000000) + " MΩ";
    } else if (amount >= 1000) {
        result = (amount / 1000) + " KΩ";
    } else if (amount < 1000) {
        result = amount + " Ω";
    }

    return result;
}

function calculateResistance() {

    var band1 = document.getElementById("band1DropDown").value;
    var band2 = document.getElementById("band2DropDown").value;
    var band3 = document.getElementById("band3DropDown").value;
    var multiplier = document.getElementById("multiplierDropDown").value;

    var concatBands = "";
    concatBands = concatBands.concat(band1.toString()).concat(band2.toString()).concat(band3.toString());

    var multiplied = 0;
    if (concatBands !== "0" && concatBands !== "00" && concatBands !== "") {
        multiplied = parseInt(concatBands) * parseFloat(multiplier)
    }

    return multiplied;
}

function SetResultsDisplay() {
    var resistance = calculateResistance();
    var tolerance = document.getElementById("toleranceDropDown").value;
    var tempCo = document.getElementById("tempCoDropDown").value;

    var minimum = "0";
    var maximum = "0";

    if (resistance !== "" && tolerance !== "") {
        var percent = resistance / 100 * tolerance;
        minimum = resistance - percent;
        maximum = resistance + percent;
    }

    var results = [
        OhmUnits(resistance),
        tolerance === "" ? "" : "±" + tolerance + "%",
        OhmUnits(minimum),
        OhmUnits(maximum),
        tempCo === "" ? "" : tempCo + " ppm/°C"
    ]

    d3.selectAll("td.data").data(d3.values(results)).html(p => p);
}

d3.text("infobox.html", data => {
    d3.select("body").append("div").attr("id", "infobox").html(data);
});

resetDropDowns();