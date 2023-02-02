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

const stats = new Statistics([], {}, { })



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
   
    const arr = []
    const denominator = stats.binomialCoefficient(parseInt(props.data.N),parseInt(props.data.n))
    for (let i=0;i<=parseInt(props.data.N);i++){
      let sol = stats.binomialCoefficient(parseInt(props.data.K),i)*
                stats.binomialCoefficient(parseInt(props.data.N)-parseInt(props.data.K),props.data.n-i)/
                denominator
      arr.push(sol || 0)
    }
   
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Hipergeometrica',
          },
        },
      };
    
    const data = {
        labels : props.data.NArr,
        datasets: [
          {
            label: 'Probabilidad',
            data: arr,
            backgroundColor: colors(props.data.x,props.data.N,props.data.r)
          },
        ],
      };
      
    return (
      <>
    <Bar options={options} data={data} />
    <ResultDiscrete
      dataRes = {{
      "x" : props.data.x,
      "n" : props.data.n,
      "r" : props.data.r,
      "N" : props.data.N,
      "K" : props.data.K,
      "data": arr}}

    />
    </>

    );
}
