import React,{Component} from 'react';
export default class App extends Component{
    constructor(props){
        super(props);
     this.state={
        text:""
     }
    }
   changeText=(event)=>{
        console.log("键抬起就触发");
        this.setState({
            text:event.target.value
        })
   }
   render(){
    console.log("render");
    let {text}=this.state;
    return(
        <div>
            <h3>App组件</h3>
            <input type="text" onKeyUp={this.changeText}/>
        </div>
    )
   }
}