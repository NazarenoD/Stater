import React from 'react';
import  { MathJaxContext, MathJax } from 'better-react-mathjax'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Boxplot from './boxplot';


export default function Calculus(props){
    const alpha = parseFloat(props.data.alpha)
    
    let jSearch = alpha>0.09? '0,1': (alpha>0.04? '0,05': '0,01')

    const filterWithZero = (item)=>{return (item === 0) || (isFinite(item))}

    const g1 = props.data.g1.filter(filterWithZero)
    const g2 = props.data.g2.filter(filterWithZero)
    const g3 = props.data.g3.filter(filterWithZero)
    const g4 = props.data.g4.filter(filterWithZero)
    const g5 = props.data.g5.filter(filterWithZero)




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
    const sct = (values,sizes,genMedia)=>{
        let gm = 0
        values.map((x,i)=>{
            gm = gm + Math.pow(x-genMedia,2)*sizes[i]
        })
        return gm
    }
    

    const setStats = (arr)=>{
        let vars = []
        let means = []
        let sizes = []
        let indexArr = []
        let totalArray = []
        const generalMean = (meansI,sizesI)=>{
            let gm = 0
            let tz = 0
            meansI.map((x,i)=>{
                gm = gm + x*sizesI[i]
                tz = tz + sizesI[i]
            })
            return gm/tz
        }
        const sce = (values,sizes,genMedia)=>{
            let gmsce = 0
            values.map((x,i)=>{
                gmsce = gmsce +sizes[i] * Math.pow(x-genMedia,2)
    
            })
            return gmsce
        }
        
        arr.map((x,i)=>{
                if(isFinite(x[0]) && isFinite(x[1])){
                    if (variance(x) !==0){
                        totalArray = totalArray.concat(x)
                        
                        vars.push(variance(x))
                        means.push(mean(x))
                        sizes.push(x.length)
                        indexArr.push(i)
                    }
                    return true
                } 
        })
    
        let gmt = generalMean(means,sizes)
        let N = totalArray.length
        let c = sizes.length
        let SCE = sce(means,sizes,gmt)
        let SCT = variance(totalArray)*(N-1)

        return {
            "means":means,
            "variances":vars,
            "sizes":sizes,
            "index":indexArr,
            "globalMean":gmt,
            "SCE":SCE,
            "SCT":SCT,
            "N":N,
            "c":c
        }
    }
    const summary = setStats([g1,g2,g3,g4,g5])
    let num = summary.c - 1
    let den = (summary.N - summary.c - 1)>=0 ? summary.N - summary.c - 1 : summary.N - summary.c

    const f = require('./f.json')
   
    return(
        <>
        <div className="d-flex justify-content-around m-2">
        <MathJaxContext>
        <MathJax className="Math-c">{"\\("+"SCT =\\sum_{j=1}^c\\sum_{i=1}^{n_{j}}\\left(x_{i,j}-\\overline{\\overline{x}}\\right)^{2}"+"\\)"}</MathJax>
        <MathJax className="Math-c">{"\\("+"SCD =\\sum_{j=1}^c\\sum_{i=1}^{n_{j}}\\left(x_{i,j}-\\overline{x}_{j}\\right)^{2}"+"\\)"}</MathJax>
        <MathJax className="Math-c">{"\\("+"SCE =\\sum_{j=1}^c n_{j} \\left( \\overline{x}_{j}-\\overline{\\overline{x}}\\right)^{2}"+"\\)"}</MathJax>
        </MathJaxContext>
        </div>
        
        <div className="d-flex justify-content-around m-2">
        <MathJaxContext>
        <MathJax className="Math-c">{"\\("+"CMT = \\frac{SCT}{N-1}"+"\\)"}</MathJax>
        <MathJax className="Math-c">{"\\("+"CMD = \\frac{SCD}{N-c}"+"\\)"}</MathJax>
        <MathJax className="Math-c">{"\\("+"CME = \\frac{SCE}{c-1}"+"\\)"}</MathJax>
        </MathJaxContext>
        </div>
        
        <div className="d-flex justify-content-around m-2">
        <MathJaxContext>
        <MathJax className="Math-c">{"\\("+"\\frac{CME}{CMD}\\sim F_{\\frac{c-1}{N-c}}"+"\\)"}</MathJax>
        </MathJaxContext>
        </div>
        <hr></hr>
        <hr></hr>
        

        <MDBTable>
        <MDBTableHead>
        <tr>
          <th scope='col'></th>
          <th scope='col'>Suma de cuadrados</th>
          <th scope='col'>Grados de libertad</th>
          <th scope='col'>Cuadrados medios</th>
          <th scope='col'>F observado</th>
          <th scope='col'>F crítico</th>
        </tr>
        </MDBTableHead>
        <MDBTableBody>
        <tr>
          <th scope='row'>Entre Grupos</th>
          <td>{(summary.SCE||0).toFixed(2)} </td>
          <td>{summary.c-1}</td>
          <td>{((summary.SCE)/(summary.c-1)).toFixed(2)}</td>
          <td>{(((summary.SCE)/(summary.c-1))/((summary.SCT-summary.SCE)/(summary.N-summary.c))||0).toFixed(2)}</td>
          <td>{(f[jSearch][den][num]||0).toFixed(2)}</td>
        </tr>
        <tr>
          <th scope='row'>Dentro de Grupos</th>
          <td>{(summary.SCT-summary.SCE).toFixed(2)}</td>
          <td>{summary.N-summary.c}</td>
          <td>{((summary.SCT-summary.SCE)/(summary.N-summary.c)||0).toFixed(2)}</td>
        </tr>
        <tr>
          <th scope='row'>Total</th>
          <td>{(summary.SCT).toFixed(2)}</td>
          <td>{summary.N-1}</td>
        </tr>
        </MDBTableBody>
        </MDBTable>
        <Boxplot
        data = {{
                'g1':{
                    'name': 'grupo-1',
                    y : g1,
                    type: 'box'
                },
                'g2':{
                    'name': 'grupo-2',
                    y : g2,
                    type: 'box'
                },
                'g3':{
                    'name': 'grupo-3',
                    y : g3,
                    type: 'box'
                },
                'g4':{
                    'name': 'grupo-4',
                    y : g4,
                    type: 'box'
                },
                'g5':{
                    'name': 'grupo-5',
                    y : g5,
                    type: 'box'
                },
            }
        }/>
        </>
    )

}