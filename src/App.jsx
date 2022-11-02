import { FileManager } from 'less';
import React,{Component} from 'react'
import Child from './Child'
export default class App extends Component{
     constructor(){
        super();
        this.state={
            age:19,
            num:0,
            flag:true
        }
    }
    handdleClick=()=>{
        let {flag}=this.state;
        this.setState({flag:!flag})
    }
    render(){
        let {age,num,flag}=this.state;
        return (
            <div>
                <h3>App</h3>
                <button onClick={()=>{
                    this.setState({age:22,num:100})
                }}>改变this.state.age</button>
                {flag?<Child name="jack" age={age} num={num}></Child>:<div>哈哈哈</div>}
                <button onClick={this.handdleClick}>change flag</button>
            </div>
        )
    }
}
