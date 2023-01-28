import  { MathJaxContext, MathJax } from 'better-react-mathjax'

export default function ResultDiscrete(props){
    const p = parseFloat(props.dataRes.probability)
    const r = props.dataRes.r
    const z = parseFloat(props.dataRes.z)

    let res = (zValue)=>{
      if(zValue>4 || zValue<-4) return 1
      else return p
    }
    res(z)
    if (r==='-'){
      return (
        <div className='d-flex justify-content-around mb-2'>
        <MathJaxContext>
        <MathJax className="Math-c">{"\\("+`Pr \\left(X \\leq x \\right) = ${res(z).toFixed(4)} `+"\\)"}</MathJax>
        
        </MathJaxContext>
        </div>
      )
    }
    if (r==='+'){
        return (
            <div className='d-flex justify-content-around mb-2'>
            <MathJaxContext>
            <MathJax className="Math-c">{"\\("+`Pr \\left(X>x \\right) = ${(1-res(z)).toFixed(4)} `+"\\)"}</MathJax>
           
            </MathJaxContext>
            </div>
          )
      }
    }