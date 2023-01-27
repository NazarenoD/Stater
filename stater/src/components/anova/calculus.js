import React from 'react';
import  { MathJaxContext, MathJax } from 'better-react-mathjax'
export default function Calculus(props){

    return(
        <MathJaxContext>
        <MathJax className="Math-c">{"\\("+"SCT =\\sum_{j=1}^c\\sum_{i=1}^{n_{j}}\\left(x_{i,j}-\\overline{\\overline{x}}\\right)^{2}"+"\\)"}</MathJax>
        <MathJax className="Math-c">{"\\("+"SCD =\\sum_{j=1}^c\\sum_{i=1}^{n_{j}}\\left(x_{i,j}-\\overline{x}_{j}\\right)^{2}"+"\\)"}</MathJax>
        <MathJax className="Math-c">{"\\("+"SCE =\\sum_{j=1}^c n_{j} \\left( \\overline{x}_{j}-\\overline{\\overline{x}}\\right)^{2}"+"\\)"}</MathJax>
        </MathJaxContext>
    )

}