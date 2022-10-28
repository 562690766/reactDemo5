import React,{Component} from 'react';
console.log("组件渲染了");
class App extends Component{
    render(){
        // 写法二：
        let arr=[
            <li>susan</li>,
            <li>tom</li>,
            <li>jack</li>,
            <li>张三</li>,
        ];
        return (//return返回一个对象的话要加小括号
        //标签要小写，大写会当成组件
            <div>
                <ul>
                {arr}
                {/* 结果：·susan
                          ·  tom
                          · jack
                          · 张三 */}
                </ul>
            </div>
        )
    }
}
export default App;
