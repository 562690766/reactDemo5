import React from 'react'
// import Style from '../css/bootstrap.min.css'
let UserName=(props)=>{
    let {name}=props;
    // let className=Style["form-control"];
    return (
        <div>
            <label htmlFor="uname" >{name}</label>
            <input type="text" id='uname' defaultValue="请输入用户名" />
        </div>
    )
}
export default UserName;