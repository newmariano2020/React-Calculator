
import React from "react";

import './mathoperation.css';

const Split = ({number1,number2})=>{
    let result = 0;

    const operacion = (number1, number2)=>{
        result =(parseInt(number1) / parseInt(number2)) 
    }
    console.log(number1)

    return (
        <div style={{display:'flex',marginLeft: '40px'}}>
            
            <div className="result-span-son"><span className="span">{operacion(number1,number2)}{result}</span></div>

            
        </div>
    
    );
}

export default Split;