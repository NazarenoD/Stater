import React from 'react';
import  { MathJaxContext, MathJax } from 'better-react-mathjax'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Scatter from './scatter';



export default function Calculus(props){
    const alpha = parseFloat(props.data.alpha)
    
    let jSearch = alpha>0.09? '0,1': (alpha>0.04? '0,05': '0,01')

    const filterWithZero = (item)=>{return (item === 0) || (isFinite(item))}

    let yValues = []
    let arrX = props.data.xValues.map((x,i)=>{
        if(isFinite(x) && isFinite(props.data.yValues[i])){
            yValues.push(props.data.yValues[i])
            return x
        }
    })
    const xValues = arrX.filter(filterWithZero)
    
    const mean = (arr)=>{
        let sum = 0
        arr.map((x)=>sum = sum+x)
        return sum/arr.length
    }
    const variance = (arr)=>{
        let sum = 0
        let m = mean(arr)
        arr.map((x)=>sum = sum+(Math.pow(x-m,2)))
        return sum/(arr.length-1)
    }
    const cov = (arrXVal,arrYVal)=>{
        let meanX = mean(arrXVal)
        let meanY = mean(arrYVal)
        let sum = 0
        arrXVal.map((x,i)=>sum = sum + ((x-meanX)*(arrYVal[i]-meanY)))
        return sum/(arrXVal.length-1)
    }

    const stats = (arrXVal,arrYVal)=>{
        let covar = cov(arrXVal,arrYVal)
        let varX = variance(arrXVal)
        let rScore = Math.pow(covar,2)/(varX*variance(arrYVal))
        let sct = variance(arrYVal)*(arrYVal.length-1)
        let scr = rScore*(sct)
        let sce = sct-scr
        let slope = covar/varX
        let intercept = mean(arrYVal)-(slope*mean(arrXVal))
        let prediction = arrXVal.map((x)=>intercept+slope*x)

        return {'sct':sct,'sce':sce,'scr':scr,'score':rScore,'predict':prediction,'intercept':intercept,'slope':slope}

    }
    

    let summary = stats(xValues,yValues)
    const f = require('./f.json')
    let glsearch = (yValues.length-3)>=0? (yValues.length-3):0
    console.log('holaaaa summary')
    console.log(summary)

    
    return(
        <>
        <div className="d-flex justify-content-around m-2">
        <MathJaxContext>
        <MathJax className="Math-c">{"\\("+"SCT =\\sum_{i=1} ^n \\left(y_{i}-\\overline{y}\\right)^{2}"+"\\)"}</MathJax>
        <MathJax className="Math-c">{"\\("+"SCE =\\sum_{i=1} ^n \\left(y_{i}-\\hat{y}_{i}\\right)^{2}"+"\\)"}</MathJax>
        <MathJax className="Math-c">{"\\("+"SCR =\\sum_{i=1} ^n \\left(\\hat{y}_{i}-\\overline{y}\\right)^{2}"+"\\)"}</MathJax>
        </MathJaxContext>
        </div>
        
        <div className="d-flex justify-content-around m-2">
        <MathJaxContext>
        <MathJax className="Math-c">{"\\("+"CMT = \\frac{SCT}{n-1}"+"\\)"}</MathJax>
        <MathJax className="Math-c">{"\\("+"CME = \\frac{SCE}{n-2}"+"\\)"}</MathJax>
        <MathJax className="Math-c">{"\\("+"CMR = \\frac{SCR}{1}"+"\\)"}</MathJax>
        </MathJaxContext>
        </div>
        
        <div className="d-flex justify-content-around m-2">
        <MathJaxContext>
        <MathJax className="Math-c">{"\\("+"\\frac{CMR}{CME}\\sim F_{\\frac{1}{n-2}}"+"\\)"}</MathJax>
        </MathJaxContext>
        </div>
        <hr></hr>
        <hr></hr>
        

        <MDBTable>
        <MDBTableHead>
        <tr>
          <th scope='col'>
          <div className="d-flex justify-content-around m-2">
            <MathJaxContext>
            <div className='d-flex'>
            <MathJax className="Math-c">{"\\(r^2 =\\)"}</MathJax>
            <div><b>{(summary.score||0).toFixed(2)}</b></div></div>
            </MathJaxContext>
        </div>
          </th>
          <th scope='col'>Suma de cuadrados</th>
          <th scope='col'>Grados de libertad</th>
          <th scope='col'>Cuadrados medios</th>
          <th scope='col'>F observado</th>
          <th scope='col'>F crítico</th>
        </tr>
        </MDBTableHead>
        <MDBTableBody>
        <tr>
          <th scope='row'>Regresion</th>
          <td>{(summary.scr||0).toFixed(2)} </td>
          <td>{1}</td>
          <td>{(summary.scr||0).toFixed(2)}</td>
          <td>{((summary.scr/((summary.sce/(yValues.length - 2))))||0).toFixed(2)}</td>
          <td>{(f[jSearch][glsearch][1]).toFixed(2)}</td>
        </tr>
        <tr>
          <th scope='row'>Error</th>
          <td>{(summary.sce||0).toFixed(2)}</td>
          <td>{(yValues.length - 2)||0}</td>
          <td>{(((summary.sce/(yValues.length - 2)))||0).toFixed(2)}</td>
        </tr>
        <tr>
          <th scope='row'>Total</th>
          <td>{(summary.sct||0).toFixed(2)}</td>
          <td>{(yValues.length - 1)||0}</td>
        </tr>
        </MDBTableBody>
        </MDBTable>
        <div className="d-flex justify-content-center m-4">
        <MathJaxContext>
        <MathJax className="Math-c m-2">{"\\("+"y=ax+b"+"\\)"}</MathJax>


       
            <div className='d-flex m-2'>
            <MathJax className="Math-c">{"\\(a =\\)"}</MathJax>
            <div><b>{(summary.slope||0).toFixed(2)}</b></div></div>
      

    
            <div className='d-flex m-2'>
            <MathJax className="Math-c">{"\\(b =\\)"}</MathJax>
            <div><b>{(summary.intercept||0).toFixed(2)}</b></div></div>
      
        </MathJaxContext>
        </div>
        <Scatter
        data = {{
            'xValues':xValues,
            'yValues':yValues,
            'predict': summary.predict
        }}
        />
        </>
    )

}