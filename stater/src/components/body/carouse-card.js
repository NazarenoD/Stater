import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBCard className='pt-1 bg-dark'>
      <MDBCardBody className='bg-dark'>
        <MDBCardTitle className='card-carousel'>Card title</MDBCardTitle>
        <MDBCardSubTitle className='card-carousel'>Card subtitle</MDBCardSubTitle>
        <MDBCardText className='text-white card-carousel'>
          Some quick example text to build on
        </MDBCardText>
        <div className='justify-content-center align-items-center h-100'>
                <div className='text-white'>
                <MDBBtn tag="a" outline size="lg">
                Call to action
                </MDBBtn>
                </div>
            </div>
      </MDBCardBody>
    </MDBCard>
  );
}