import React, { useState } from 'react';
import { MDBRadio, MDBInput, MDBRow, MDBCol } from 'mdb-react-ui-kit';

import  { MathJaxContext, MathJax } from 'better-react-mathjax'

import { BarPlot } from './bar-figure';

export default function Binomial() {
    const [n,set_n] = useState(5)
    const [nArr,set_nArr] = useState([0,1,2,3,4,5])
    const handle_n = event => {
        set_n(event.target.value||0)

        const arr = Array.from({length: (parseInt(event.target.value)+1) }, (v, i) => i)
        set_nArr(arr)
    }

    const [p,set_p] = useState(0.5)
    const handle_p = event => {
        set_p(event.target.value||0)
    }

    const [x,set_x] = useState(2)
    const handle_x = event => {
        set_x(event.target.value)
    }

    const [r,set_r] = useState('-')
    const handle_r = event => {
        set_r(event.target.value)
        console.log(event.target.value)
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
          <MDBInput type="number" min={0} id='ex0' label='Ensayos [n]' onChange={handle_n} value={n}/>
        </MDBCol>
        <MDBCol>
          <MDBInput type="number" min={0} max={1} step={0.01} id='ex1' label='Probabilidad [p]' onChange={handle_p} value={p}/>
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

        <MDBRadio name='r' id='r=' label={
            <MathJaxContext>
                <MathJax className="Math-c">{"\\("+"Pr \\left(X=x \\right)"+"\\)"}</MathJax>
            </MathJaxContext>} onChange={handle_r} value={'='}/>

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
            "\\("+"Pr\\left(X\\leq r\\right) = \\sum_{x=0}^r \\left(\\begin{array}{c}n\\\\ x\\end{array}\\right) p^{x} \\left(1-p\\right)^{n-x}"+"\\)"
            }</MathJax>
    </MathJaxContext>
    </div>
    <div className='m-2'>
    <MathJaxContext>
            <MathJax className="Math-c">{
            "\\("+"E\\left(X\\right)=np"+"\\)"
            }</MathJax>
    </MathJaxContext>
    </div>
    <div className='m-2'>
    <MathJaxContext>
            <MathJax className="Math-c">{
            "\\("+"V\\left(X\\right)=np(1-p)"+"\\)"
            }</MathJax>
    </MathJaxContext>
    </div>
    </div>
    </div>
    </div>



    <div className="col-md">

        <BarPlot data= {{
             "n" : n, 
             "p" : p,
             "x" : x,
             "r" : r,
             "nArr" : nArr
             }} />
    
    </div>
    </div>
    </div>





    </>

  );
}