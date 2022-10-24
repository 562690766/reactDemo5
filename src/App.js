import React,{Component} from 'react'

export default class App extends Component{
    render(){
        return (
            <div>
                <h3>app组件6666</h3>
                <ul>
                {
                    [
                        <li key={1}>tom</li>,
                        <li key={2}>susan</li>,
                        <li key={3}>jack</li>,
                    ].map((value)=>{
                        return value;
                    })
                }
                </ul>
            </div>
        )
    }
}

// 导出也可以写成export default App
// jsx语法，就是在js中写xhtml代码
/* 小括号里的内容babel-loader参考preset-react写成
{虚拟DOM
    tagName:"div",
    children:{
        tagName:"h3",
        children:"App组件"
    }
} */