import React from 'react';
import  { MathJaxContext, MathJax } from 'better-react-mathjax'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';


export default function Calculus(props){

    const g1 = props.data.g1.filter(Boolean)
    const g2 = props.data.g2.filter(Boolean)
    const g3 = props.data.g3.filter(Boolean)
    const g4 = props.data.g4.filter(Boolean)
    const g5 = props.data.g5.filter(Boolean)

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
                console.log("hola")
                console.log(Math.pow(x-genMedia,2)*sizes[i])
                console.log("media general")
                console.log(genMedia)
                console.log("tamaño")
                console.log(sizes[i])
                console.log("valor de xz")
                console.log(x)
                console.log("dif cuadrad")
                console.log(Math.pow(x-genMedia,2))
           
                console.log(gmsce)
            })
            return gmsce
        }
      
        arr.map((x,i)=>{
                if(x[0] && x[1]){
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
    console.log(summary)

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
          <th scope='col'>p-value</th>
        </tr>
        </MDBTableHead>
        <MDBTableBody>
        <tr>
          <th scope='row'>Entre Grupos</th>
          <td>{summary.SCE} </td>
          <td>{summary.c-1}</td>
          <td>{(summary.SCE)/(summary.c-1)}</td>
          <td>{((summary.SCE)/(summary.c-1))/((summary.SCT-summary.SCE)/(summary.N-summary.c))||0}</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope='row'>Dentro de Grupos</th>
          <td>{summary.SCT-summary.SCE}</td>
          <td>{summary.N-summary.c}</td>
          <td>{(summary.SCT-summary.SCE)/(summary.N-summary.c)||0}</td>
        </tr>
        <tr>
          <th scope='row'>Total</th>
          <td>{summary.SCT}</td>
          <td>{summary.N-1}</td>
        </tr>
        </MDBTableBody>
        </MDBTable>
        </>
    )

}