import React from 'react'
import UserName from './UserName'
import Password from './Password'
import Button from './Button'
const Login =(props)=>{
    return (
        <>
        登录
            <UserName name="用户名："></UserName>
            <Password id="ped3" pwd="密码："></Password>
            <br/>
            <Button btn="登录"></Button>

        </>
    )
}
export default Login;