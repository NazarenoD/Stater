import React, { useState } from 'react';
import { MDBRadio, MDBInput, MDBRow, MDBCol } from 'mdb-react-ui-kit';

import  { MathJaxContext, MathJax } from 'better-react-mathjax'
import { Linep } from './bar-figure';



export default function Exp() {
  
    const [v,set_v] = useState(5)
    const handle_v = event => {
        set_v(event.target.value)
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

    <div className="container">
    <div className="row">
    <div className="col-md">


    <div className='mt-4'>
    <div className='d-flex justify-content-around'>
    <div className='w-50 m-4 d-flex'>
        <div className='m-auto'>
        <MDBRow>
        <MDBCol>
          <MDBInput type="number" min={1} max={100} id='ex1' label={<div>gl [v]</div>} onChange={handle_v} value={v}/>
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
                <MathJax className="Math-c">{"\\("+"Pr \\left(X \\leq x \\right)"+"\\)"}</MathJax>
            </MathJaxContext>} defaultChecked onChange={handle_r} value={'-'}/>

        <MDBRadio name='r' id='r+' label={
            <MathJaxContext>
                <MathJax className="Math-c">{"\\("+"Pr \\left(X>x \\right)"+"\\)"}</MathJax>
            </MathJaxContext>} onChange={handle_r} value={'+'}/>
        </div>
    </div>


    <div>
    <div className='m-2'>
    <MathJaxContext>
            <MathJax className="Math-c">{
            "\\("+"Pr\\left(X\\leq r\\right) = \\sum_{x=0} ^r \\frac{\\lambda^{x}e^{-\\lambda}}{x!}"+"\\)"
            }</MathJax>
    </MathJaxContext>
    </div>
    <div className='m-2'>
    <MathJaxContext>
            <MathJax className="Math-c">{
            "\\("+"E\\left(X\\right)=\\lambda"+"\\)"
            }</MathJax>
    </MathJaxContext>
    </div>
    <div className='m-2'>
    <MathJaxContext>
            <MathJax className="Math-c">{
            "\\("+"V\\left(X\\right)=\\lambda"+"\\)"
            }</MathJax>
    </MathJaxContext>
    </div>
    </div>
    </div>
    </div>



    <div className="col-md">

    <Linep
    data = {{
        'v': v,
        'x': x,
        'r': r
    }}
    />
    
    </div>
    </div>
    </div>





    </>

  );
}