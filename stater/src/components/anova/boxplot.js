import React from 'react';
import Plot from 'react-plotly.js';

export default function Boxplot(props){
    console.log(Object.values(props.data))
    return (
      <Plot
        data={Object.values(props.data)}
        layout={ {width: 450, height: 450, title: 'Box Plot'} }
      />
    );
  }
