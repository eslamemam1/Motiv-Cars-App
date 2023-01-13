import React, { useLayoutEffect } from "react";
import "../../App.css";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

function CarStatistics() {
  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv2");

    root.setThemes([
  am5themes_Animated.new(root)
    ]);
    let chart = root.container.children.push(am5xy.XYChart.new(root, {
  panX: true,
  panY: true,
  wheelX: "panX",
  wheelY: "zoomX",
  pinchZoomX:true
    }));
    
    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
  behavior: "none"
}));
cursor.lineY.set("visible", false);


// Generate random data
let date = new Date();
date.setHours(0, 0, 0, 0);
let value = 100;

function generateData() {
  value = Math.round((Math.random() * 10 - 5) + value);
  am5.time.add(date, "day", 1);
  return {
    date: date.getTime(),
    value: value
  };
}

function generateDatas(count) {
  let data = [];
  for (var i = 0; i < count; ++i) {
    data.push(generateData());
  }
  return data;
}


// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
let xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
  maxDeviation: 0.5,
  baseInterval: {
    timeUnit: "day",
    count: 1
  },
  renderer: am5xy.AxisRendererX.new(root, {
  pan:"zoom"
}),
  tooltip: am5.Tooltip.new(root, {})
}));

let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
  maxDeviation:1,
  renderer: am5xy.AxisRendererY.new(root, {
  pan:"zoom"
})
}));


// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
let series = chart.series.push(am5xy.SmoothedXLineSeries.new(root, {
  name: "Series",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "value",
  valueXField: "date",
  tooltip: am5.Tooltip.new(root, {
    labelText: "{valueY}"
  })
}));

series.fills.template.setAll({
  visible: true,
  fillOpacity: 0.2
});

series.bullets.push(function() {
  return am5.Bullet.new(root, {
    locationY: 0,
    sprite: am5.Circle.new(root, {
      radius: 4,
      stroke: root.interfaceColors.get("background"),
      strokeWidth: 2,
      fill: series.get("fill")
    })
  });
});


// Add scrollbar
// https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
chart.set("scrollbarX", am5.Scrollbar.new(root, {
  orientation: "horizontal"
}));


let data = generateDatas(50);
series.data.setAll(data);

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div className=" w-full h-full relative">
      <div className=" w-full h-full absolute left-[35px] top-[15px]">
        <p className=" font-[700] text-[20px] text-[#242731]">
          Car Statistics
        </p>
        <div className=" absolute top-[40px] flex justify-between w-[85%]">
           <div>
          <p className=" font-[700] text-[14px] text-[#5F6165]">20 February 2022</p>
          </div>
          <div className=" w-[167px] bg-[#F5F4F6] flex justify-between">
            <a
              className=" hover:rounded-[7px] hover:bg-[#FF764C] hover:text-white"
              href="#day"
            >
              Day
            </a>
            <a
              className=" ml-2 mr-2 hover:rounded-[7px] hover:bg-[#FF764C] hover:text-white"
              href="#Week"
            >
              Week
            </a>
            <a
              className="hover:rounded-[7px] hover:bg-[#FF764C] hover:text-white"
              href="#Month"
            >
              Month
            </a>
          </div>
        </div>
      </div>
      <div
        className=" absolute left-[15px] bottom-3 "
        id="chartdiv2"
        style={{ width: "90%", height: "70%" }}
      ></div>
    </div>
  );
}

export default CarStatistics;
