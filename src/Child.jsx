import React,{Component} from 'react'

export default class Child extends Component{
   render(){
    console.log("Child this.props",this.props)
    return(
        <div>
            <h3>Child组件   子组件</h3>
            <p>父组件向子组件的属性传递的数据name:{this.props.name}</p>
            <p>父组件向子组件的属性传递的数据age:{this.props.age}</p>

            
        </div>
    )
   }
}