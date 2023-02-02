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
  scales: {
    xAxes: [{
        categoryPercentage: 1.0,
        barPercentage: 1.0
    }]
},
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Normal (0,1)',
    },
  },
};

const Statistics = require('statistics.js');
const stats = new Statistics([], {}, { })

export function Linep(props) {
  const z = parseFloat(props.data.z)
  const r = props.data.r

  const dist = stats.normalDistribution(0,1)
  let ks = Object.keys(dist).map((x)=>parseFloat(x)).sort() 
  let ks1 = ks.slice(0,parseInt(ks.length/2))
  let ks2 = ks.slice(parseInt(ks.length/2),parseInt(ks.length))
  ks = ks1.reverse().concat(ks2)
  let values = ks.map((x)=>dist[String(x)])
  


  const colors = function(x,n,r){
    let colorsArr = Array.from({length: (parseInt(n)+1) }, (v, i) => 'rgba(53, 162, 235, 0.5)')
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

  const indexData = ks.indexOf(parseFloat(z.toFixed(2)))
  const probability = stats.normalCumulativeValue(z);

  


  const data = {
  labels:ks,
  datasets: [
    {
      fill: true,
      label: 'Probabilidad',
      data: values,
      backgroundColor: colors(indexData,ks.length,r)
    }
  ],
};

  return (
    <>
  <Bar options={options} data={data} />
  <ResultDiscrete
  dataRes={{
    'probability':probability,
    'r':r,
    'z':z
  }} />
  </>
  )
}
