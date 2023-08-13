function NumberOfBandSelection() {
    var number = parseInt(document.getElementById("resistorBands").value);

    if (number === 4) {
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
            .attr("y1", yScale(3.1))
            .attr("y2", yScale(-3.1));
    } else if (number === 5) {
        d3.select("#band3DropDown").attr("hidden", null);
        d3.select("#band3DropDownLabel").attr("hidden", null);

        d3.select("#tempCoDropDown").attr("hidden", true);
        d3.select("#tempCoDropDownLabel").attr("hidden", true);
        document.getElementById("tempCoDropDown").selectedIndex = 0;
        SelectTempCo();

        d3.select("#band5")
            .attr("x1", xScale(18) + 8)
            .attr("x2", xScale(18) + 8)
            .attr("y1", yScale(3.1))
            .attr("y2", yScale(-3.1));
    } else if (number === 6) {
        d3.select("#band3DropDown").attr("hidden", null);
        d3.select("#band3DropDownLabel").attr("hidden", null);

        d3.select("#tempCoDropDown").attr("hidden", null);
        d3.select("#tempCoDropDownLabel").attr("hidden", null);

        // Move Band 5 to before the end of resistor
        d3.select("#band5")
            .attr("x1", xScale(14) + 8)
            .attr("x2", xScale(14) + 8)
            .attr("y1", yScale(1.95))
            .attr("y2", yScale(-1.95));
    }

    if (number !== 6){
        d3.select("#TempCoResult").attr("hidden", true);
    }else{
        d3.select("#TempCoResult").attr("hidden", null);
    }
}

var bandColors = [
    "cb-none",
    "cw-black",
    "cw-brown",
    "cw-red",
    "cb-orange",
    "cb-yellow",
    "cw-green",
    "cw-blue",
    "cb-violet",
    "cw-grey",
    "cb-white",
];

var multiplierColors = [
    "cb-none",
    "cw-black",
    "cw-brown",
    "cw-red",
    "cb-orange",
    "cb-yellow",
    "cw-green",
    "cw-blue",
    "cb-violet",
    "cw-grey",
    "cb-white",
    "cb-gold",
    "cb-silver",
];

var toleranceColors = [
    "cb-none",
    "cw-brown",
    "cw-red",
    "cw-green",
    "cw-blue",
    "cb-violet",
    "cw-grey",
    "cb-gold",
    "cb-silver",
];

var tempCoColors = [
    "cb-none",
    "cw-brown",
    "cw-red",
    "cb-orange",
    "cb-yellow",
    "cw-blue",
    "cb-violet",
];

function HandleSelection(colors, dropDownId, bandId) {
    var index = document.getElementById(dropDownId).selectedIndex;

    d3.select("#" + dropDownId).attr("class",colors[index]);
    d3.select("#" + bandId).attr("class",colors[index]); 
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
    .style("stroke-width", "1em");

var shapeArea = d3.area()
    .x(d => xScale(d.a))
    .y0(d => yScale(d.b))
    .y1(d => yScale(-d.b))
    .curve(d3.curveCardinal);

// Resistor body
d3.select("svg")
    .append("path")
    .attr("d", shapeArea(resistorBodyShape))
    .attr("fill", "lavender")
    .attr("stroke-width", 2)
    .attr("z-index", -1);

// Band 1
d3.select("svg")
    .append("line")
    .attr("x1", xScale(3) + 8)
    .attr("x2", xScale(3) + 8)
    .attr("y1", yScale(3.1))
    .attr("y2", yScale(-3.1))
    .attr("id", "band1")
    .attr("z-index", 1);

// Band 2
d3.select("svg")
    .append("line")
    .attr("x1", xScale(7) + 8)
    .attr("x2", xScale(7) + 8)
    .attr("y1", yScale(1.95))
    .attr("y2", yScale(-1.95))
    .attr("id", "band2")
    .attr("z-index", 1);

// Band 3
d3.select("svg")
    .append("line")
    .attr("x1", xScale(9) + 8)
    .attr("x2", xScale(9) + 8)
    .attr("y1", yScale(1.9))
    .attr("y2", yScale(-1.9))
    .attr("id", "band3")
    .attr("z-index", 1);

// Band 4
d3.select("svg")
    .append("line")
    .attr("x1", xScale(11) + 8)
    .attr("x2", xScale(11) + 8)
    .attr("y1", yScale(1.9))
    .attr("y2", yScale(-1.9))
    .attr("id", "band4")
    .attr("z-index", 1);

// Band 5
d3.select("svg")
    .append("line")
    .attr("x1", xScale(14) + 8)
    .attr("x2", xScale(14) + 8)
    .attr("y1", yScale(2.3))
    .attr("y2", yScale(-2.3))
    .attr("id", "band5")
    .attr("z-index", 1);

// Band 6
d3.select("svg")
    .append("line")
    .attr("x1", xScale(18) + 8)
    .attr("x2", xScale(18) + 8)
    .attr("y1", yScale(3.1))
    .attr("y2", yScale(-3.1))
    .attr("id", "band6")
    .attr("z-index", 1);

d3.select("svg")
    .append("path")
    .attr("d", shapeArea(resistorBodyShape))
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 2)
    .attr("z-index", 2);

function resetDropDowns() {
    document.getElementById("resistorBands").selectedIndex = 0;
    NumberOfBandSelection();

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
    d3.select("div.top-row").append("div").attr("id", "infobox").html(data);
    d3.select("#TempCoResult").attr("hidden", true);
});

resetDropDowns();