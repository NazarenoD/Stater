import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export default function Exercises() {
  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
        <th scope='col'>#</th>
          <th colSpan={2} scope='col'>Tema</th>
          <th scope='col'>Dificultad</th>
          
          <th scope='col'>Documento Google Drive</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
            <th scope='col'>1</th>
          <td colSpan={2}>
            <div className='d-flex align-items-center justify-content-center'>
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Introduccion a la Probabilidad</p>
                <p className='text-muted mb-0'>marginal conjunta union y condicional</p>
              </div>
            </div>
          </td>
          <td>
            <MDBBadge color='success' pill>Fácil</MDBBadge>
          </td>
          <td>
          <MDBBtn outline color='success'>Vamos!</MDBBtn>
          </td>
        </tr>
        <tr>
            <th scope='col'>1</th>
          <td colSpan={2}>
            <div className='d-flex align-items-center justify-content-center'>
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Medidas de posición</p>
                <p className='text-muted mb-0'>Media Mediana Moda Cuartiles</p>
              </div>
            </div>
          </td>
          <td>
            <MDBBadge color='success' pill>Fácil</MDBBadge>
          </td>
          <td>
          <MDBBtn outline color='success'>Vamos!</MDBBtn>
          </td>
        </tr>
        <tr>
            <th scope='col'>1</th>
          <td colSpan={2}>
            <div className='d-flex align-items-center justify-content-center'>
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Introduccion a la Probabilidad</p>
                <p className='text-muted mb-0'>marginal conjunta union y condicional</p>
              </div>
            </div>
          </td>
          <td>
            <MDBBadge color='success' pill>Fácil</MDBBadge>
          </td>
          <td>
          <MDBBtn outline color='success'>Vamos!</MDBBtn>
          </td>
        </tr>
        <tr>
            <th scope='col'>1</th>
          <td colSpan={2}>
            <div className='d-flex align-items-center justify-content-center'>
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Medidas de dispersión</p>
                <p className='text-muted mb-0'>Varianza, desvío estándar, coeficiente de variación, Covarianza</p>
              </div>
            </div>
          </td>
          <td>
            <MDBBadge color='success' pill>Fácil</MDBBadge>
          </td>
          <td>
          <MDBBtn outline color='success'>Vamos!</MDBBtn>
          </td>
        </tr>
        <tr>
            <th scope='col'>1</th>
          <td colSpan={2}>
            <div className='d-flex align-items-center justify-content-center'>
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Introduccion a la Probabilidad</p>
                <p className='text-muted mb-0'>marginal conjunta union y condicional</p>
              </div>
            </div>
          </td>
          <td>
            <MDBBadge color='success' pill>Fácil</MDBBadge>
          </td>
          <td>
          <MDBBtn outline color='success'>Vamos!</MDBBtn>
          </td>
        </tr>
        <tr>
            <th scope='col'>1</th>
          <td colSpan={2}>
            <div className='d-flex align-items-center justify-content-center'>
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Introduccion a la Probabilidad</p>
                <p className='text-muted mb-0'>marginal conjunta union y condicional</p>
              </div>
            </div>
          </td>
          <td>
            <MDBBadge color='success' pill>Fácil</MDBBadge>
          </td>
          <td>
          <MDBBtn outline color='success'>Vamos!</MDBBtn>
          </td>
        </tr>
       
      </MDBTableBody>
    </MDBTable>
    </>
  );
}