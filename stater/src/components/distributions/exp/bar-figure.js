import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const Statistics = require('statistics.js');
const stats = new Statistics()

export function Linep(props) {
  const v = props.data.v
  const x = props.data.x
  const r = props.data.r

  const dist = stats.normalDistribution(0,1)
  let ks = Object.keys(dist).map((x)=>parseFloat(x)).sort() 
  let ks1 = ks.slice(0,parseInt(ks.length/2))
  let ks2 = ks.slice(parseInt(ks.length/2),parseInt(ks.length))
  ks = ks1.reverse().concat(ks2)
  let arrNeg = ks.map((x)=>dist[String(x)])

  console.log(dist)

  const data = {
  labels:ks,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: arrNeg,
      borderColor: 'rgb(50, 162, 235)',
      backgroundColor: 'rgba(0, 20, 235, 0.5)'
    }
  ],
};

  return <Line options={options} data={data} />;
}
