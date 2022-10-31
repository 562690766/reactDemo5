import React,{Component} from 'react'
import Reg from './components/Reg'
import Login from './components/Login'
export default class App extends Component{
    render(){
        return (
            <div>
                首页
                <Reg></Reg>
                <br/>
                <hr/>
                <Login></Login>
            </div>
        )
    }
}