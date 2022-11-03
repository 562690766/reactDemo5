import React,{Component} from 'react';
import Child from './Child'
export default class App extends Component{
   constructor(){
    super();
    this.state={
        userName:"tom",
        age:{}
    }
   }
   handdleClick=()=>{
    this.setState({
        userName:"赵四"
    })
   }
   render(){
    ;let {userName}=this.state;
    return( 
        <div>
            <h3>App组件</h3>
            <Child name={userName} age={26}></Child>
            <button onClick={this.handdleClick}>点击发生改变</button>
        </div>
    )
   }
}