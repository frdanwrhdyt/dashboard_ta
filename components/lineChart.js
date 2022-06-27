import React from "react";
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
  const labels = datas?.data?.datetime.concat(datas?.predict?.datetime);
  const pt = datas?.data?.pt;

  var predict = [];
  for (var i = 0; i < pt.length; ++i) {
    predict.push(NaN);
  }
  predict = predict.concat(datas?.predict?.pt);
  const data = {
    labels,
    datasets: [
      {
        label: `Average data ${label.toLowerCase()}`,
        data: pt,
        borderColor: "rgb(22 78 99)",
        backgroundColor: "rgba(22, 78, 99, 0.5)",
        tension: 0.4,
      },
      {
        label: `Predict ${label.toLowerCase()} later`,
        data: predict,
        borderColor: "rgb(136 19 55)",
        backgroundColor: "rgba(136, 19, 55, 0.5)",
        pointRadius: 10,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        display: true,
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
  return <Line className="md:max-h-[400px] " options={options} data={data} />;
}
