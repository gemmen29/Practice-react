import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar/ChartBar";

const Chart = (props) => {
  const totalMaximum = props.dataPoints
    .map((dataPoint) => dataPoint.value)
    .reduce((max, acc) => (max < acc ? acc : max), 0);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
