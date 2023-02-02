import  { MathJaxContext, MathJax } from 'better-react-mathjax'

export default function ResultDiscrete(props){
    let r = props.dataRes.r
    let x = parseInt(props.dataRes.x)
    let lambda = parseFloat(props.dataRes.lambda)
    let data = props.dataRes.data



    let res = 0
    
    if (r === '='){
      res = (data[x]||0).toFixed(4)
    }
    if (r === '-'){
      let sum = 0
      data.slice(0,x+1).map(x=>sum = sum+x)
      res = sum.toFixed(4)
    }
    if (r === '+'){
      let sum = 0
      data.slice(x+1,data.lenght).map(x=>sum = sum+x)
      res = (sum||0).toFixed(4)
    }


    return (
        <div className='d-flex justify-content-around mb-2'>
        <MathJaxContext>
        <div className='d-flex'>
        <MathJax className="Math-c">{"\\(Pr \\left(X=x \\right) =\\)"}</MathJax>
        <div><b>{res}</b></div></div>
        

        <div className='d-flex'>
        <div className='d-flex'>
        <MathJax className="Math-c">{"\\(E\\left(X\\right)=\\)"}</MathJax>
        <b>{(lambda).toFixed(4)}</b></div></div>
        <div className='d-flex'>
        <div className='d-flex'>
        <MathJax className="Math-c">{"\\(V\\left(X\\right)=\\)"}</MathJax>
        <b>{(lambda).toFixed(4)}</b></div></div>
            
        </MathJaxContext>
        </div>
        )
    }