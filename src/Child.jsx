import React,{Component} from 'react'
export default class Child extends Component{
    constructor(){
        super();
     this.state={
        name:"tom",
        text:"666"
     }
    }
   changeText=(event)=>{
        console.log("键抬起就触发");
        this.setState({
            text:event.target.value
        })
   }
   render(){
    let {name}=this.state;
    let {text}=this.state;
    return(
        <div>
            <h3>App组件</h3>
            <p>{name}</p>
            <input type="text" defaultValue={text}/>
            <button onKeyUp={changeText}></button>
        </div>
    )
   }
}