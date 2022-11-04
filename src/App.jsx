import React,{Component} from 'react';
import Child from './Child'
export default class App extends Component{
   constructor(){
    super();
    this.state={
        name:"tom",
    }
   }
  getInfo=(name)=>{
    this.setState({name:name})
  }
   render(){
   let {name}=this.state;
   let {getInfo}=this;
    return( 
        <div>
            <h3>App组件</h3>
            <p>父组件state值name:{name}</p>
            <Child name={name} getInfo={getInfo}></Child>
        </div>
    )
   }
}