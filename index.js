import jsonData from "./data.json" assert { type: "json" };

var x1 = Object.keys(jsonData.Fare);
var y1 = Object.values(jsonData.Fare);
var y1 = Object.values(jsonData.Age);
var x2 = Object.keys(jsonData.Age);
var y2 = Object.values(jsonData.Age);

var trace1 = {
  x: x1,
  y: y1,
  type: "bar",
  name: "Fare",
};

var trace2 = {
  x: x2,
  y: y2,
  type: "bar",
  name: "Age",
  marker: {
    color: "red",
  },
};

var data = [trace1, trace2];

var layout = {
  barmode: "overlay",
  bargap: 0.05,
};

Plotly.newPlot("data-viz", data, layout);
