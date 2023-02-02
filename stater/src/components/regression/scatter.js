import React from 'react';
import Plot from 'react-plotly.js';

export default function Scatter(props){
    return (
      <Plot
        data={[
          {
            x: props.data.xValues,
            y: props.data.yValues,
            mode: 'markers',
            type: 'scatter',
            name: 'Muestra',
            marker: { size: 12 }
          },
          {
            x: props.data.xValues,
            y: props.data.predict,
            mode: 'lines',
            type: 'scatter',
            name: 'Regresion',
            marker: { size: 12 }
          }
        ]}
        layout={ {width: 450, height: 450, title: 'Dispersión',xaxis: {title: 'X'},yaxis: {title: 'Y'}} }
      />
    );
  }
