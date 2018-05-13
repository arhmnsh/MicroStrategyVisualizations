var my = this;
this.addUseAsFilterMenuItem();
var containerId = "container" + Date.now();

var getColor = function (metricLine) {
  if (metricLine == "North") {
    return '#FF1493';
  } else if (metricLine == "East") {
    return '#FFD700';
  } else if (metricLine == "West") {
    return '#8A2BE2';
  } else if (metricLine == "") {
    return '#00FF7F';
  }
};

// console.log(this.dataInterface);

var myData = this.dataInterface.getRawData(
  mstrmojo.models.template.DataInterface.ENUM_RAW_DATA_FORMAT.ROWS_ADV,
  { hasSelection: true }
);
// console.log("myData", myData);

var attributes = [];
var metrics = [];

var rowTitles = this.dataInterface.getRowTitles();
attributes = rowTitles.titles.map(function (row) {
  return row.n;
});
// console.log("attributes", attributes);

var colTitles = this.dataInterface.getColTitles();
metrics = colTitles.titles[0].es.map(function (row) {
  return row.n;
});
// console.log("metrics", metrics);

var categories = [];
//var values = [{data: [], type: 'column'}];
var values = [];
for (var i = 0; i < metrics.length; i++) {
  // console.log(i, metrics[i]);
  values.push({
    data: [],
     color: getColor(metrics[i]),
    name: metrics[i]
  });
}

myData.forEach(function (row, index) {
  var catName = row.headers[0].name;
  if (row.headers.length > 1) {
    catName += "<br>" + row.headers[1].name;
  }
  //categories.push(row.headers[0].name + '<br>' + row.headers[1].name);
  categories.push(catName);
  //values.push(parseInt(row.values[0].v.replace(',', '')));

  row.values.forEach(function (metricRow, metricIndex) {
    values[metricIndex].data.push(parseInt(metricRow.v.replace(/,/g, "")));
  });
});

// console.log("preparied values, ", values);

// console.log("categories", categories);
// console.log("values", values);

var dm = this.domNode;

var containerWidth = dm.clientWidth;
var containerHeight = dm.clientHeight;
var dynamicWidth = categories.length * 100;

if (document.getElementById("container") === null) {
  var container = document.createElement("div");
  container.id = containerId;
  container.style.cssText = "width: 100%; height: 100%;";
  dm.append(container);
  // dm.append(buttonContainer);
  // buttonContainer.append(districtBtn);
  // buttonContainer.append(regionBtn);
  // buttonContainer.append(weekBtn);
}

var chart = Highcharts.chart(containerId, {
  chart: {
    zoomType: "x",
    type: 'line',
    backgroundColor: {
      color: 'transparent'
    }
  },
  credits: {
    enabled: false
  },
  title: {
    text: ""
  },
  xAxis: {
    categories: categories
  },
  yAxis: {
    title: {
      text: ""
    }
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle"
  },

  plotOptions: {},

  series: values
});
// districtBtn.addEventListener("click", function() {
//   chart.update({
//     chart: {
//       zoomType: "x"
//     },
//     subtitle: {
//       text: "Plain"
//     }
//   });
// });
// regionBtn.addEventListener("click", function() {
//   chart.update({
//     chart: {
//       inverted: true,
//       polar: false,
//       zoomType: "x"
//     },
//     subtitle: {
//       text: "Inverted"
//     }
//   });
// });
// weekBtn.addEventListener("click", function() {
//   chart.update({
//     chart: {
//       inverted: false,
//       polar: true,
//       zoomType: "x"
//     },
//     subtitle: {
//       text: "Polar"
//     }
//   });
// });
