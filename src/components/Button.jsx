import React from 'react'
import Style from '../css/bootstrap.min.css'
const Button =(props)=>{
    let {btn}=props;
    let className=Style.btn+" "+Style["btn-primary"]+" "+Style["btn-lg"];
    return (
        <div>
            <input type="button" defaultValue={btn} className={className}></input>
        </div>
    )
}
export default Button;