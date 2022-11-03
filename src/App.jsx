import React,{Component} from 'react';
export default class App extends Component{
    constructor(){
        super();
        this.state={
            name:"tom"//MVC-M model数据模型层
         }
        }
       handdleClick=()=>{//MVC-C 控制层
        this.setState({
            name:"susan"
        })
       }
       render(){
        console.log("render");
        let {name}=this.state;
        return(
            <div>
                <h3>App组件</h3>
                <p>{name}</p>MVC-V  View视图层
                <button onClick={this.handdleClick}>点击后改变name</button>
            </div>
        )
       }
       componentDidMount(){
        console.log("componentDidMount");
       }
}