import React,{Component} from 'react';
export default class App extends Component{
    haddleClick=()=>{
        // this.refs的默认值是一个{}对象
        // 点击后{}获取ref属性的DOM对象，变成this.refs{myInput:DOM对象}
        // this.refs.myInput就是文本框对应的DOM对象
        //console.log(this.refs.myInput);点击获取整个inout标签
       // console.dir(this.refs.myInput)//点击获取真实DOM
        this.refs.myInput.focus();//点击获取焦点
        console.dir(this.refs.myInput.value)//点击获取文本框内容

    }
    render(){
        return (
            <div>
                <h3>App React@16.2以下版本的ref属性 获取真实DOM </h3>
                <input type="text" ref="myInput"/>
                <button onClick={this.haddleClick}>点击获取</button>
            </div>
        )
    }
}