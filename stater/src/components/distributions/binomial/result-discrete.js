import  { MathJaxContext, MathJax } from 'better-react-mathjax'

export default function ResultDiscrete(props){
    let r = props.dataRes.r
    let x = parseInt(props.dataRes.x)
    let n = parseInt(props.dataRes.n)
    let p = parseFloat(props.dataRes.p)
    let data = props.dataRes.data
    if (r==='='){
      return (
        <div className='d-flex justify-content-around mb-2'>
        <MathJaxContext>
        <MathJax className="Math-c">{"\\("+`Pr \\left(X=x \\right) = ${(data[x]||0).toFixed(4)} `+"\\)"}</MathJax>
        <MathJax className="Math-c">{
            "\\("+`E\\left(X\\right)=${(n*p).toFixed(4)}`+"\\)"
            }</MathJax>
            <MathJax className="Math-c">{
            "\\("+`V\\left(X\\right)=${(n*p*(1-p)).toFixed(4)}`+"\\)"
            }</MathJax>
        </MathJaxContext>
        </div>
        )
    }
    if (r==='-'){
      let sum = 0
      data.slice(0,x+1).map(x=>sum = sum+x)
      return (
        <div className='d-flex justify-content-around mb-2'>
        <MathJaxContext>
        <MathJax className="Math-c">{"\\("+`Pr \\left(X \\leq x \\right) = ${sum.toFixed(4)} `+"\\)"}</MathJax>
        <MathJax className="Math-c">{
            "\\("+`E\\left(X\\right)=${(n*p).toFixed(4)}`+"\\)"
            }</MathJax>
            <MathJax className="Math-c">{
            "\\("+`V\\left(X\\right)=${(n*p*(1-p)).toFixed(4)}`+"\\)"
            }</MathJax>
        </MathJaxContext>
        </div>
      )
    }
    if (r==='+'){
        let sum = 0
        data.slice(x+1,n+1).map(x=>sum = sum+x)
        return (
            <div className='d-flex justify-content-around mb-2'>
            <MathJaxContext>
            <MathJax className="Math-c">{"\\("+`Pr \\left(X>x \\right) = ${sum.toFixed(4)} `+"\\)"}</MathJax>
            <MathJax className="Math-c">{
            "\\("+`E\\left(X\\right)=${(n*p).toFixed(4)}`+"\\)"
            }</MathJax>
            <MathJax className="Math-c">{
            "\\("+`V\\left(X\\right)=${(n*p*(1-p)).toFixed(4)}`+"\\)"
            }</MathJax>
            </MathJaxContext>
            </div>
          )
      }
    }