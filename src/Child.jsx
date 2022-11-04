import React,{Component} from 'react'

export default class Child extends Component{
    handdleClick=()=>{
        this.props.getInfo("万茜")
    }
   render(){
    let {name}=this.props;
    let {handdleClick}=this;
    return(
        <div>
            <h3>Child组件   子组件</h3>
           <p>子组件的name：{name}</p>
            <button onClick={handdleClick}>点击给父组件传递数据</button>
        </div>
    )
   }
}