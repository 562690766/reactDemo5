import React from 'react'
let UserName=(props)=>{
    let {name}=props;
    return (
        <div>
            <label htmlFor="uname" >{name}</label>
            <input type="text" id='uname' defaultValue="请输入用户名" />
        </div>
    )
}
export default UserName;