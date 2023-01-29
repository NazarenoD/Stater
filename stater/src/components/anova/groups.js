import React, { useState } from 'react';
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
} from 'mdb-react-ui-kit';
import TableAOV from './table';

export default function AOV() {
    const [groups,SetGroups] = useState(2)
    const handleGroups = (event)=>{
        SetGroups(event.target.value)
    }
    const [rows,SetRows] = useState(3)

    const [alpha,SetAlpha] = useState(0.1)
    const handleAlpha = (event)=>{
        SetAlpha(event.target.value)
    }


  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <MDBRow className='d-flex justify-content-around m-2'>
      <MDBCol>
        <select className="select btn" onChange={handleGroups}>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        
        <label className="form-label select-label m-2 pt-1">Grupos</label>
        
      </MDBCol>
      
      <MDBCol className='d-flex'>
        <MDBBtn onClick={()=>SetRows((value)=>value>3? value-1:value)}>
      <MDBIcon fas icon="angle-left" className='mt-1'/>
        </MDBBtn>
      <div className='m-2'>Filas</div>
      <MDBBtn onClick={()=>SetRows((value)=>value<20? value+1:value)}>
      <MDBIcon fas icon="angle-right"className='mt-1'/>
      </MDBBtn>


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
    <TableAOV
    data = {{'groups':groups,'rows':rows,'alpha':alpha}}
    />
    </>
  );
}