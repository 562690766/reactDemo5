
import React,{Component} from 'react'
import Child from './Child'
export default class App extends Component{
    constructor (){ 
        super();
        this.state={
            text:""
        }
    }
    changeText=(event)=>{
        console.log("changeText处理函数被调用了")
        this.setState({
            text:event.target.value
        })
    }
        render(){
            console.log("render ")
            let {text}=this.state;
            return(
                <div>
                    <h3>App组件</h3>
                    <input type="text" onKeyUp={this.changeText}/>
                    <p>{text}</p>
                </div>
            )
        }
}
<App/>

