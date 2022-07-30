import React , { useState }  from "react";
import Add from "./Add";
import Substract from './subtract';
import Split from './split';
import Multiply from './multiply'
import './mathoperation.css';



const Mathoperation = () =>{
 
    const [selection, setSelection] = useState('-');
    const [number1, setNumber1] = useState(0); 
    const [number2, setNumber2] = useState(0);

    
let inicializationTrigger = true;

    const selectOperation =(e)=>{
        setSelection(e);
        inicialization();
    }
    const inicialization = () =>{
        inicializationTrigger = true; 
    }

    let condicional;

    if (selection === '+' && inicializationTrigger === true) {
        condicional = <Add number1={number1} number2={number2} />
        inicializationTrigger = false  
    }
    if (selection === '-'&& inicializationTrigger) {
        condicional = < Substract number1={number1} number2={number2} />
        inicializationTrigger = false
    }
    if (selection === '/' && inicializationTrigger) {
        condicional = < Split number1={number1} number2={number2} />
        inicializationTrigger = false
    }
    if (selection === '*' && inicializationTrigger) {
        condicional = < Multiply number1={number1} number2={number2} />
        inicializationTrigger = false;
    }

    else{console.log('wrong')}

    return(
        <div>
            <div className="container">
                
                <div className="row" >
                <div className="box-style">
                    
                    
                    <input type='number' className="input" onChange={event=>setNumber1(event.target.value)} value={number1}  placeholder='ingrese su primer numero' ></input>
                    <select value={selection} onChange={e=>selectOperation(e.target.value)} className='select'> 
                        <option value='+'>+</option>
                        <option value='-'>-</option>
                        <option value='*'>*</option>
                        <option value='/'>/</option>

                    </select > 
                    <input type='number' className="input" onChange={event=>setNumber2(event.target.value)} value={number2} placeholder='ingrese su segundo numero'></input>

                    <div className="result-span"><span className="span">=</span>
                    {condicional}
                    </div>
                    

                    
                   
                   
                </div>
                </div>
            </div>
        </div>

    )
}

export default Mathoperation;

