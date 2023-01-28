import React, { useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBInput } from 'mdb-react-ui-kit';
import Calculus from './calculus';


export default function TableRegression(props) {

    const alpha = props.data.alpha

    const arrGroup = Array.from({length: (2) }, (v, i) => i+1)
    const arrRows = Array.from({length: parseInt(props.data.rows) }, (v, i) => i+1)

    const [xValues,SetX] = useState(Array.from({length: (20) }, (v, i) => NaN))
    const [yValues,SetY] = useState(Array.from({length: (20) }, (v, i) => NaN))

    const labels = ['X','Y']

    const handleSample = (e,group,row)=>{
        switch (group) {
            case 1:
                SetX(xValues.map((x,i)=>{
                    if (i === parseInt(row)){
                        return parseFloat(e.target.value)
                    }
                    return x
                }))
                break;
            case 2:
                SetY(yValues.map((x,i)=>{
                    if (i === parseInt(row)){
                        return parseFloat(e.target.value)
                    }
                    return x
                }))
                break;
        
            default:
                break;
        } 
    }

  return (
    <>
    <MDBTable>
      <MDBTableHead className='bg-light'>
        <tr>
          <th scope='col'>#</th>
          {arrGroup.map((m,v)=>{
                    return(<th key={v+100} scope='col'>{labels[v]} </th>)
                })}
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {arrRows.map((x,i)=>{
            return(
                <tr key={i}>
                <th scope='row'>{x}</th>
                {arrGroup.map((t,r)=>{
                    return(<td key={r}><MDBInput onChange={(e)=>{handleSample(e,t,i)}} label='valor' id='form1' type='number' /></td>)
                })}
                </tr>
            )
        })}

      </MDBTableBody>
    </MDBTable>
    <Calculus
        data = {{
            'xValues':xValues,
            'yValues':yValues,
            'alpha':alpha
        }}
    />
    </>
  );
}