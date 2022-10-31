import React from "react"
let Password =(props)=>{
    let {pwd}=props;
    let {id}=props;
    return (
        <>
            <label htmlFor={id}>{pwd}</label>
            <input type="password" id={id} ></input>
        </>
    )
}
export default Password;