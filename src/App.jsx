import React,{Component} from 'react';
export default class App extends Component{
    constructor(){
        super();
        // 创建一个ref对象
        // 挂到组件实例对象上的自定义属性
        // 挂载this上，组件内各个函数就能拿到
        this.myInput=React.createRef();//拥有默认属性{current:null}
    }
    haddleClick=()=>{
        console.log(this.myInput.current);//获取真实DOM
        this.myInput.current.focus();
        console.log(this.myInput.current.value);
    }
    render(){
        return (
            <div>
                <h3>App React@16.2以上版本的ref属性 获取真实DOM </h3>
                <input type="text" ref={this.myInput}/>
                <button onClick={this.haddleClick}>点击获取</button>
            </div>
        )
    }
}