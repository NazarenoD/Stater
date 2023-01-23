import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

const Statistics = require('statistics.js');


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
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
      text: 'Chart.js Bar Chart',
    },
  },
};




const stats = new Statistics()



const labels = [0, 1, 2, 3, 4, 5];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 2',
      data: stats.binomialDistribution(5, 0.5),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function BarPlot() {
  return <Bar options={options} data={data} />;
}
