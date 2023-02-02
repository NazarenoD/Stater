import React from 'react';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

export default function Hello() {
  return (
    <>
    <div className='d-flex justify-content-center bg-light'>
    <div className='w-75 bg-light'>
    <h3 style={{'text-align' : 'justify'}}>
    Bienvenido a <bold className='fw-bolder'>STATER</bold> esta página te ayudara a realizar cálculos estadísticos de uso frecuente en los cursos de estadística descriptiva e inferencial.
    </h3>
    <hr></hr>
    <h4>Las funciones activas son:</h4>
    <MDBListGroup className='m-2' style={{ minWidthL: '22rem' }} light>
      <MDBListGroupItem className='bg-success text-white bg-gradient'>Cálculo de análisis de varianza</MDBListGroupItem>
      
      <MDBListGroupItem className='bg-success text-white bg-gradient'>Cálculo de regresión lineal simple</MDBListGroupItem>
      <hr></hr>
    </MDBListGroup>
    <h3 style={{'text-align' : 'justify'}}>Adicionalmente podrás calcular probabilidades a partir de los modelos de probabilidad mas conocidos y requeridos</h3>
    <div className='d-flex justify-content-center'>
    <MDBListGroup light numbered style={{ minWidth: '22rem' }} className='w-25 m-2'>
      <MDBListGroupItem className='bg-success text-white p-2 bg-gradient' style={{'text-align' : 'justify'}}>Binomial</MDBListGroupItem>
      <MDBListGroupItem className='bg-success text-white p-2 bg-gradient' style={{'text-align' : 'justify'}}>Hipergeométrica</MDBListGroupItem>
      <MDBListGroupItem className='bg-success text-white p-2 bg-gradient' style={{'text-align' : 'justify'}}>Poisson</MDBListGroupItem>
      <MDBListGroupItem className='bg-success text-white p-2 bg-gradient' style={{'text-align' : 'justify'}}>Normal</MDBListGroupItem>
    </MDBListGroup>
    </div>
    </div>
    </div>
    </>
  );
}