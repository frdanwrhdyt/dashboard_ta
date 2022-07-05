/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function lineChart({ datas, label }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 900px)",
  });
  const labels = datas?.data?.datetime.concat(datas?.predict?.datetime);
  const pt = datas?.data?.pt;

  const predict = datas?.data?.pt.concat(datas?.predict?.pt);

  // var predict = [];
  // for (var i = 0; i < pt.length - 1; ++i) {
  //   predict.push(NaN);
  // }
  // predict = predict.concat([pt[pt.length - 1], datas?.predict?.pt]);
  const data = {
    labels,
    datasets: [
      {
        label: `Average data ${label.toLowerCase()}`,
        data: pt,
        borderColor: "rgb(22 78 99)",
        backgroundColor: "rgba(22, 78, 99, 0.5)",
        tension: 0.2,
        pointRadius: 2,
      },
      {
        label: `Predict ${label.toLowerCase()} later`,
        data: predict,
        borderColor: "rgb(251, 180, 84)",
        backgroundColor: "rgba(251, 180, 84, .5)",
        pointRadius: 2,
        tension: 0.2,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    scales: {
      x: {
        display: isDesktopOrLaptop ? true : false,
        grid: {
          display: false,
        },
        title: {
          display: false,
          text: "Datetime",
        },
      },
      y: {
        display: false,
        // grid: {
        //   display: false,
        // },
        title: {
          display: true,
          text: "Power Total (kW)",
        },
      },
    },
  };
  return (
    <Line className=" md:max-h-[400px] w-full" options={options} data={data} />
  );
}
