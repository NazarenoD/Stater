import React from 'react';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

export default function Hello() {
  return (
    <>
    <div className='d-flex justify-content-center bg-gv p-4'>
    <div className='w-75'>
    <h3 className='jtf text-white'>
    Bienvenido a <b className='fw-bolder'>STATER</b> esta página te ayudará a realizar cálculos estadísticos de uso frecuente en los cursos de estadística descriptiva e inferencial.
    </h3>
    <hr></hr>
    <h4 className='text-white'>Las funciones activas son:</h4>
    <MDBListGroup className='m-2 bg-dark' dark>
      <MDBListGroupItem className='bg-dark text-white bg-gradient'>Cálculo de análisis de varianza</MDBListGroupItem>
      <MDBListGroupItem className='bg-dark text-white bg-gradient'>Cálculo de regresión lineal simple</MDBListGroupItem>
    </MDBListGroup>
    <hr></hr>
    <h3 className='jtf text-white'>Adicionalmente podrás calcular probabilidades a partir de los modelos de probabilidad más conocidos y requeridos.</h3>
    <div className='d-flex justify-content-center'>
    <MDBListGroup light numbered style={{ minWidth: '22rem' }} className='w-25 m-2'>
      <MDBListGroupItem className='bg-dark text-white p-2 bg-gradient jtf'>Binomial</MDBListGroupItem>
      <MDBListGroupItem className='bg-dark text-white p-2 bg-gradient jtf'>Hipergeométrica</MDBListGroupItem>
      <MDBListGroupItem className='bg-dark text-white p-2 bg-gradient jtf'>Poisson</MDBListGroupItem>
      <MDBListGroupItem className='bg-dark text-white p-2 bg-gradient jtf'>Normal</MDBListGroupItem>
    </MDBListGroup>
    </div>
    </div>
    </div>
    </>
  );
}