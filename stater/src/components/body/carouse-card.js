import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function CarouselCard(props) {
  const id = props.data.id
  let title = ''
  let description = ''
  let link = ''
  if(id===1){
    title = 'Regresión Lineal'
    description = 'Podemos ayudarte con tu regresión'
    link = '/Regression'
  }
  if(id===2){
    title = 'ANOVA'
    description = 'Compara medias rapidamente'
    link = '/Anova'
  }
  if(id===3){
    title = 'Ejercicios'
    description = 'Practica Practica y Practica!'
    link = '/Exercises'
  }
  return (
    <MDBCard className='pt-1 bg-dark'>
      <MDBCardBody className='bg-dark'>
        <MDBCardTitle className='card-carousel'>{title}</MDBCardTitle>
        <MDBCardText className='text-white card-carousel'>{description}</MDBCardText>
        <div className='justify-content-center align-items-center h-100'>
                <div className='text-white'>
                <MDBBtn tag="a" outline size="lg" href={link}>
                Vamos!
                </MDBBtn>
                </div>
            </div>
      </MDBCardBody>
    </MDBCard>
  );
}