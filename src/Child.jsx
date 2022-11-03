import React,{Component} from 'react'
export default class Child extends Component{
    constructor(){
        super();
      this.myInput=React.createRef();
    }
   handdleClick=()=>{
    console.log(this.myInput.current);
    this.myInput.current.focus();
    alert(this.myInput.current.value);
   }
   render(){
    return(
        <div>
            <h3>App组件 React@16.3及以上 ref属性获取真实DOM对象</h3>
            <input type="text" ref={this.myInput}/>
            <button onClick={this.handdleClick}>点击获取input焦点</button>
        </div>
    )
   }
}