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



import ResultDiscrete from './result-discrete';

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
    const colors = function(x,n,r){
      let colorsArr = Array.from({length: (parseInt(n)+1) }, (v, i) => 'rgba(53, 162, 235, 0.5)')
      if (r === '='){
        colorsArr[parseInt(x)] = 'rgba(30, 30, 30, 1)'
      }
      if (r === '-'){
        for (let i = 0; i<=parseInt(x); i++){
          colorsArr[parseInt(i)] = 'rgba(30, 30, 30, 1)'
        }
      }
      if (r === '+'){
        for (let i = 0; i<(parseInt(n)-parseInt(x)); i++){
          colorsArr[(parseInt(x)+parseInt(i)+1)] = 'rgba(30, 30, 30, 1)'
        }
      }
      return(colorsArr)
     
    }
    
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Poisson',
          },
        },
      };
    
    const data = {
        datasets: [
          {
            label: 'Probabilidad',
            data: stats.poissonDistribution(parseFloat(props.data.lambda)),
             //['rgba(53, 162, 235, 0.5)','rgba(53, 162, 235, 0.5)','rgba(30, 30, 30, 1)','rgba(53, 162, 235, 0.5)','rgba(53, 162, 235, 0.5)'],
          },
        ],
      };
    data.datasets[0].backgroundColor = colors(props.data.x,data.datasets[0].data.length,props.data.r)
    data.labels = data.datasets[0].data.map((x,i)=>i)
    
    return (
      <>
    <Bar options={options} data={data} />
    <ResultDiscrete
      dataRes = {{
      "lambda" : props.data.lambda,
      "x" : props.data.x,
      "r" : props.data.r,
      "data": data.datasets[0].data}}

    />
    </>

    );
}
