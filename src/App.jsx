import React,{Component} from 'react';
console.log("组件渲染了");
class App extends Component{
    render(){
        // 写法一：
        let arr=["susan","tom","jack","张三"];
        return (//return返回一个对象的话要加小括号
        //标签要小写，大写会当成组件
            <div>
                {arr}
                {/* 结果：susantomjack张三 */}
            </div>
        )
    }
}
export default App;
