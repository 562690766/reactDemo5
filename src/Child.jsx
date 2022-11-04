import React,{Component} from 'react'
// import './src/style.css'
// var classNames=require('classNames');
export default class Child extends Component{
    constructor(){
        super();
        this.state={
            x:true,
            y:true
        }
    }
   render(){
    let {x,y}=this.state;
    let {className}=classNames(["three",{two:x},{one:y}]);
    return(
        <div>
            <h3>Child组件   子组件</h3>
           <div className={className}>持之以恒</div>
        </div>
    )
   }
}