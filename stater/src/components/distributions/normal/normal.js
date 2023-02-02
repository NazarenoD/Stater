import React, { useState } from 'react';
import { MDBRadio, MDBInput, MDBRow, MDBCol } from 'mdb-react-ui-kit';

import  { MathJaxContext, MathJax } from 'better-react-mathjax'
import { Linep } from './bar-figure';



export default function Normal() {
  
    const [z,set_z] = useState(0)
    const handle_z = event => {
        set_z(event.target.value)
    }


    const [r,set_r] = useState('-')
    const handle_r = event => {
        set_r(event.target.value)
    }

  return (
    <>
    <br></br>
    <br></br>
    <br></br>

    <div className="container">
    <div className="row">
    <div className="col-md">


    <div className='mt-4'>
    <div className='d-flex justify-content-around'>
    <div className='w-50 m-4 d-flex'>
        <div className='m-auto'>
        <MDBRow>
        <MDBCol>
          <MDBInput type="number" step={0.1} id='ex1' label={<div>Estand. [z]</div>} onChange={handle_z} value={z}/>
        </MDBCol>
        </MDBRow>
        </div>
        
    </div>
    

    </div>
    <div className='d-flex justify-content-center'>
        <div>
        <MDBRadio name='r' id='r-' label={
            <MathJaxContext>
                <MathJax className="Math-c">{"\\(Pr \\left(X \\leq x \\right)\\)"}</MathJax>
            </MathJaxContext>} defaultChecked onChange={handle_r} value={'-'}/>

        <MDBRadio name='r' id='r+' label={
            <MathJaxContext>
                <MathJax className="Math-c">{"\\(Pr \\left(X>x \\right)\\)"}</MathJax>
            </MathJaxContext>} onChange={handle_r} value={'+'}/>
        </div>
    </div>


    <div>
    <div className='m-2'>
    <MathJaxContext>
            <MathJax className="Math-c">{
            "\\(z=\\frac{x-\\mu}{\\sigma}\\)"
            }</MathJax>
    </MathJaxContext>
    </div>
    <div className='m-2'>
    <MathJaxContext>
            <MathJax className="Math-c">{
            "\\(Pr\\left(X\\leq x\\right) = \\int_{-\\infty}^{x} \\frac{1}{\\sqrt{2\\pi}}e^{-\\frac{1}{2} z^{2}}dz\\)"
            }</MathJax>
    </MathJaxContext>
    </div>
    </div>
    </div>
    </div>

    <div className="col-md">

    <Linep
    data = {{
        'z': z,
        'r': r
    }}
    />
    </div>
    </div>
    </div>
    <div className='text-justify m-2 p-2'>
    <h4 style={{'text-align' : 'justify'}}>La distribución normal fue reconocida por primera vez por el francés Abraham de Moivre (1667-1754). 
        Posteriormente, Carl Friedrich Gauss (1777-1855) elaboró desarrollos más profundos y formuló la ecuación de la curva; 
        de ahí que también se la conozca, más comúnmente, como la"campana de Gauss".</h4>
    </div>
    </>

  );
}