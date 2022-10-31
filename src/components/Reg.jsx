import React from 'react';
import UserName from './UserName'
import Password from './Password'
import Button from './Button'
const Reg =(props)=>{
        return (
            <div>
                欢迎注册App
                <UserName name="用户名："></UserName>
                <Password pwd="密&nbsp;&nbsp;&nbsp;&nbsp;码:" id="pwd1"></Password>
                <br/>
                <Password pwd="确认密码:" id="pwd2"></Password>
                <Button btn="注册"></Button>
            </div>
        )
    }

export default Reg;