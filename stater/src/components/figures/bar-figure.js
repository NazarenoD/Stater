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

const stats = new Statistics()



export function BarPlot(props) {
    
    
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Binomial',
          },
        },
      };


    const labs = Array.from({length: (parseInt(props.data.n)+1) }, (v, i) => i);
    const data = {
        labels : labs,
        datasets: [
          {
            label: 'Dataset 2',
            data: stats.binomialDistribution(props.data.n, props.data.p),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };
    return <Bar options={options} data={data} />;
}
