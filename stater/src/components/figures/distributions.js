import React from 'react';
import { MDBRadio, MDBInput, MDBRow, MDBCol } from 'mdb-react-ui-kit';


export default function Distribution() {
  return (
    <div className='d-flex justify-content-around'>
    <div className='w-50 m-4 d-flex'>
        <div className='m-auto'>
        <MDBRow>
        <MDBCol>
          <MDBInput type="number" id='form10Example3' label='First name'/>
        </MDBCol>
        <MDBCol>
          <MDBInput type="number" id='form10Example4' label='Last name'/>
        </MDBCol>
        <MDBCol>
          <MDBInput type="number" id='form10Example5' label='Email address'/>
        </MDBCol>
        </MDBRow>
        </div>
        <div>
        <MDBRadio name='flexRadioDefault' id='flexRadioDefault0' label='>=' />
        <MDBRadio name='flexRadioDefault' id='flexRadioDefault1' label='=' />
        <MDBRadio name='flexRadioDefault' id='flexRadioDefault2' label='<=' defaultChecked />
        </div>

    </div>
    </div>

  );
}