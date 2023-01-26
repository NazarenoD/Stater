import  { MathJaxContext, MathJax } from 'better-react-mathjax'

export default function ResultDiscrete(props){
    const p = parseFloat(props.dataRes.probability)
    const r = props.dataRes.r
    
    if (r==='-'){
      return (
        <div className='d-flex justify-content-around mb-2'>
        <MathJaxContext>
        <MathJax className="Math-c">{"\\("+`Pr \\left(X \\leq x \\right) = ${p.toFixed(4)} `+"\\)"}</MathJax>
        
        </MathJaxContext>
        </div>
      )
    }
    if (r==='+'){
        return (
            <div className='d-flex justify-content-around mb-2'>
            <MathJaxContext>
            <MathJax className="Math-c">{"\\("+`Pr \\left(X>x \\right) = ${(1-p).toFixed(4)} `+"\\)"}</MathJax>
           
            </MathJaxContext>
            </div>
          )
      }
    }