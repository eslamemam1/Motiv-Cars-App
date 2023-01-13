import React, { useLayoutEffect } from "react";
import "../../App.css";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

function MilesStatistics() {
  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(am5xy.XYChart.new(root, {
  panX: true,
  panY: true,
  wheelX: "panX",
  wheelY: "zoomX",
  pinchZoomX:true
}));

// Add cursor
// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
cursor.lineY.set("visible", false);


// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
let xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
xRenderer.labels.template.setAll({
  rotation: -90,
  centerY: am5.p50,
  centerX: am5.p100,
  paddingRight: 15
});

let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
  maxDeviation: 0.3,
  categoryField: "country",
  renderer: xRenderer,
  tooltip: am5.Tooltip.new(root, {})
}));

let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
  maxDeviation: 0.3,
  renderer: am5xy.AxisRendererY.new(root, {})
}));


// Create series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
let series = chart.series.push(am5xy.ColumnSeries.new(root, {
  name: "Series 1",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "value",
  sequencedInterpolation: true,
  categoryXField: "country",
  tooltip: am5.Tooltip.new(root, {
    labelText:"{valueY}"
  })
}));

series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5 });
series.columns.template.adapters.add("fill", function(fill, target) {
  return chart.get("colors").getIndex(series.columns.indexOf(target));
});

series.columns.template.adapters.add("stroke", function(stroke, target) {
  return chart.get("colors").getIndex(series.columns.indexOf(target));
});


    // Define data
    let data = [{
  country: "1PM",
  value: 2025
}, {
  country: "2PM",
  value: 1882
}, {
  country: "3PM",
  value: 1809
}, {
  country: "4PM",
  value: 1122
}, {
  country: "5PM",
  value: 1114
}, {
  country: "6PM",
  value: 984
}, {
  country: "7PM",
  value: 711
}, {
  country: "8PM",
  value: 665
}, {
  country: "9PM",
  value: 443
      }
    ];

xAxis.data.setAll(data);
series.data.setAll(data);


    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div className=" w-full h-full relative">
      <div className=" w-full h-full absolute left-[35px] top-[15px]">
        <p className=" font-[700] text-[20px] text-[#242731]">
          Miles Statistics
        </p>
        <div className=" absolute top-[40px] flex justify-between w-[85%]">
          <div>
            <a
              className=" hover:rounded-[7px] hover:bg-[#2884FF] hover:text-white"
              href="#day"
            >
              Day
            </a>
            <a
              className=" ml-2 mr-2 hover:rounded-[7px] hover:bg-[#2884FF] hover:text-white"
              href="#Week"
            >
              Week
            </a>
            <a
              className="hover:rounded-[7px] hover:bg-[#2884FF] hover:text-white"
              href="#Month"
            >
              Month
            </a>
          </div>
          <div>
          <p className=" font-[700] text-[14px] text-[#5F6165]">256 Miles</p>
          </div>
        </div>
      </div>
      <div
        className=" absolute left-[15px] bottom-3"
        id="chartdiv"
        style={{ width: "90%", height: "70%" }}
      ></div>
    </div>
  );
}

export default MilesStatistics;
