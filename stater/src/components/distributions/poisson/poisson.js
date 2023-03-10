import React, { useState } from 'react';
import { MDBRadio, MDBInput, MDBRow, MDBCol } from 'mdb-react-ui-kit';

import  { MathJaxContext, MathJax } from 'better-react-mathjax'

import { BarPlot } from './bar-figure';

export default function Poisson() {
  
    const [lambda,set_lambda] = useState(5)
    const handle_lambda = event => {
        if(parseFloat(event.target.value)>0){
            set_lambda(event.target.value)
        }
        
    }

    const [x,set_x] = useState(2)
    const handle_x = event => {
        set_x(event.target.value)
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
          <MDBInput type="number" min={0} step={0.1} id='ex1' label={<div>Lambda &#x03BB;</div>} onChange={handle_lambda} value={lambda}/>
        </MDBCol>
        <MDBCol>
          <MDBInput type="number" min={0} id='ex2' label='Exitos [x]' onChange={handle_x} value={x}/>
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

        <MDBRadio name='r' id='r=' label={
            <MathJaxContext>
                <MathJax className="Math-c">{"\\(Pr \\left(X=x \\right)\\)"}</MathJax>
            </MathJaxContext>} onChange={handle_r} value={'='}/>

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
            "\\(Pr\\left(X\\leq r\\right) = \\sum_{x=0} ^r \\frac{\\lambda^{x}e^{-\\lambda}}{x!}\\)"
            }</MathJax>
    </MathJaxContext>
    </div>
    <div className='m-2'>
    <MathJaxContext>
            <MathJax className="Math-c">{
            "\\(E\\left(X\\right)=\\lambda\\)"
            }</MathJax>
    </MathJaxContext>
    </div>
    <div className='m-2'>
    <MathJaxContext>
            <MathJax className="Math-c">{
            "\\(V\\left(X\\right)=\\lambda\\)"
            }</MathJax>
    </MathJaxContext>
    </div>
    </div>
    </div>
    </div>



    <div className="col-md">

        <BarPlot data= {{
             "lambda" : lambda,
             "x" : x,
             "r" : r,
             }} />
    
    </div>
    </div>
    </div>

    <div className='text-justify m-2 p-2'>
    <h4 className='jtf'>El nombre de esta distribuci??n proviene de su creador, 
    Sim??on-Denis Poisson (1781-1840), un matem??tico y fil??sofo franc??s,
     que quer??a modelar la frecuencia de eventos durante un intervalo de tiempo fijado.
      Tambi??n particip?? en perfeccionar la ley de los grandes n??meros.</h4>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>


    </>

  );
}