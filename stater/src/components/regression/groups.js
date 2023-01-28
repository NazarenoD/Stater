import React, { useState } from 'react';
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
} from 'mdb-react-ui-kit';
import TableRegression from './table';

export default function Regression() {
    
    const [rows,SetRows] = useState(4)


    const [alpha,SetAlpha] = useState(0.1)
    const handleAlpha = (event)=>{
        SetAlpha(event.target.value)
    }

  return (
    <>
    <MDBRow className='d-flex justify-content-around m-2'>
      <MDBCol>
        <div className='d-flex justify-content-center'>
        <MDBBtn onClick={()=>SetRows((value)=>value>3? value-1:value)}>
      <MDBIcon fas icon="angle-left" className='mt-1'/>
        </MDBBtn>
      <div className='m-2'>Filas</div>
      <MDBBtn onClick={()=>SetRows((value)=>value<20? value+1:value)}>
      <MDBIcon fas icon="angle-right"className='mt-1'/>
      </MDBBtn>
        </div>
      </MDBCol>
      
      <MDBCol className='d-flex'>
      

      <MDBCol>
        <select className="select btn" onChange={handleAlpha}>
            <option value="0.10">0,10</option>
            <option value="0.05">0,05</option>
            <option value="0.01">0,01</option>
        </select>
        
        <label className="form-label select-label m-2 pt-1">Alfa</label>
        
      </MDBCol>
      </MDBCol>
     
    </MDBRow>
    <TableRegression
    data = {{'rows':rows,'alpha':alpha}}
    />
    </>
  );
}