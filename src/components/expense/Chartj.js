import React from 'react'
import ChartContainer from '../chart/ChartContainer.js'
const Chartj = (props) => {
  const chartexpense = [
    {
      value: 0,
      label: "Jan",
    },
    {
      value: 0,
      label: "Feb",
    },
    {
      value: 0,
      label: "Mar",
    },
    {
      value: 0,
      label: "Apr",
    },
    {
      value: 0,
      label: "May",
    },
    {
      value: 0,
      label: "Jun",
    },
    {
      value: 0,
      label: "Jul",
    },
    {
      value: 0,
      label: "Aug",
    },
    {
      value: 0,
      label: "Sep",
    },
    {
      value: 0,
      label: "Oct",
    },
    {
      value: 0,
      label: "Nov",
    },
    {
      value: 0,
      label: "Dec",
    },
  ];
  for (const amount of props.items) {
    const date = amount.date.getMonth();
    chartexpense[date].value += amount.amount;
  }



  return <ChartContainer items={chartexpense}/>
}

export default Chartj
