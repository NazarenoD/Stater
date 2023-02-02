import React, { useState } from 'react';
import { MDBRadio, MDBInput, MDBRow, MDBCol } from 'mdb-react-ui-kit';

import  { MathJaxContext, MathJax } from 'better-react-mathjax'

import { BarPlot } from './bar-figure';

export default function Hgeo() {
    const [n,set_n] = useState(5)
    const handle_n = event => {
        set_n(event.target.value)
    }


    const [x,set_x] = useState(2)
    const handle_x = event => {
        set_x(event.target.value)
    }

    const [r,set_r] = useState('-')
    const handle_r = event => {
        set_r(event.target.value)
    }

    const [N,set_N] = useState(8)
    const [arr,set_NArr] = useState([0,1,2,3,4,5,6,7,8])
    const handle_N = event => {
        const arr = Array.from({length: (parseInt(event.target.value)+1) }, (v, i) => i);
        set_NArr(arr)
        set_N(event.target.value)
    }
    const [K,set_K] = useState(5)
    const handle_K = event => {
        set_K(event.target.value)
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
          <MDBInput type="number" min={0} id='ex0' label='Ensayos [n]' onChange={handle_n} value={n}/>
        </MDBCol>
        <MDBCol>
          <MDBInput type="number" min={0} id='ex2' label='Exitos [x]' onChange={handle_x} value={x}/>
        </MDBCol>
        </MDBRow>

        <MDBRow className='mt-2'>
        <MDBCol>
          <MDBInput type="number" min={0} id='ex0' label='Poblacion [N]' onChange={handle_N} value={N}/>
        </MDBCol>
        <MDBCol>
          <MDBInput type="number" min={0} id='ex1' label='Exitos Pob. [K]' onChange={handle_K} value={K}/>
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
            "\\(Pr\\left(X\\leq r \\right) = \\sum_{x=1}^r \\frac{\\left(\\begin{array}{c}K\\\\ x\\end{array}\\right) \\left(\\begin{array}{c}N-K \\\\ n-x\\end{array}\\right)}{\\left(\\begin{array}{c}N\\\\ n\\end{array}\\right)}\\)"
            }</MathJax>
    </MathJaxContext>
    </div>
    <div className='m-2'>
    <MathJaxContext>
            <MathJax className="Math-c">{
            "\\(E\\left(X\\right)=n\\left(\\frac{K}{N}\\right)\\)"
            }</MathJax>
    </MathJaxContext>
    </div>
    <div className='m-2'>
    <MathJaxContext>
            <MathJax className="Math-c">{
            "\\(V\\left(X\\right)=n\\left(\\frac{K}{N}\\right)\\left(1-\\frac{K}{N} \\right)\\left(\\frac{N-n}{N-1}\\right)\\)"
            }</MathJax>
    </MathJaxContext>
    </div>
    </div>
    </div>
    </div>



    <div className="col-md">

        <BarPlot data= {{
             "n" : n, 
             "x" : x,
             "r" : r,
             "K" : K,
             "N" : N,
             "NArr" : arr
             }} />
    
    </div>
    </div>
    </div>


    <div className='text-justify m-2 p-2'>
    <h4 style={{'text-align' : 'justify'}}>La distribución hipergeométrica es una distribución discreta que modela el número de eventos 
    en una muestra de tamaño fijo tomada sin reposición. Fue obtenida por Jakob Bernoulli (1654-1705) y 
    publicada en su obra póstuma Ars Conjectandi en 1713.</h4>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>


    </>

  );
}