import React,{Component} from 'react';
export default class App extends Component{
    constructor(){
        super();
        this.state={
            name:"tom"
         }
        }
      
       render(){
        let {name}=this.state;
        return(
            <div>
                <h3>App组件</h3>
                <p>{name}</p>
            </div>
        )
       }
       componentDidMount(){
        console.log("componentDidMount");
       }
}