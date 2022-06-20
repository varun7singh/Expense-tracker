import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar.js";

const ChartContainer = (props) => {

  const datavalue = props.items.map((lmao) => lmao.value);
  const mValue = Math.max(...datavalue);
console.log(mValue);

  return (
    <div className="chart">
      {props.items.map((dataPoints) => (
        <ChartBar
          key={dataPoints.label}
          maxValue={mValue}
          value={dataPoints.value}
          label={dataPoints.label}
        />
      ))}
    </div>
  );
};

export default ChartContainer;
