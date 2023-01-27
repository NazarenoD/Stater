import React, { useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBInput } from 'mdb-react-ui-kit';
import Calculus from './calculus';

export default function TableAOV(props) {
    const groups = parseInt(props.data.groups)
    const rows = parseInt(props.data.rows)
    const arrGroup = Array.from({length: (groups + 1) }, (v, i) => i+1)
    const arrRows = Array.from({length: (rows + 1) }, (v, i) => i+1)

    const [g1,Setg1] = useState(Array.from({length: (20) }, (v, i) => NaN))
    const [g2,Setg2] = useState(Array.from({length: (20) }, (v, i) => NaN))
    const [g3,Setg3] = useState(Array.from({length: (20) }, (v, i) => NaN))
    const [g4,Setg4] = useState(Array.from({length: (20) }, (v, i) => NaN))
    const [g5,Setg5] = useState(Array.from({length: (20) }, (v, i) => NaN))

    const handleSample = (e,group,row)=>{
        switch (group) {
            case 1:
                Setg1(g1.map((x,i)=>{
                    if (i === parseInt(row)){
                        return parseFloat(e.target.value)
                    }
                    return x
                }))
                break;
            case 2:
                Setg2(g2.map((x,i)=>{
                    if (i === parseInt(row)){
                        return parseFloat(e.target.value)
                    }
                    return x
                }))
                break;
            case 3:
                Setg3(g3.map((x,i)=>{
                    if (i === parseInt(row)){
                        return parseFloat(e.target.value)
                    }
                    return x
                }))
                break;
            case 4:
                Setg4(g4.map((x,i)=>{
                    if (i === parseInt(row)){
                        return parseFloat(e.target.value)
                    }
                    return x
                }))
                break;
            case 5:
                Setg5(g5.map((x,i)=>{
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
      <MDBTableHead className='bg-dark'>
        <tr>
          <th scope='col'>#</th>
          {arrGroup.map((m,v)=>{
                    return(<th key={v+100} scope='col'>Grupo {m} </th>)
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
        'g1':g1,
        'g2':g2,
        'g3':g3,
        'g4':g4,
        'g5':g5,
    }}
    />
    </>
  );
}