import React,{Component} from 'react';
console.log("组件渲染了");
class App extends Component{
   render(){
    // 方法三，遍历数组后返回一个新数组
    let arr=[
        "susan",
        "张三  ",
        "李四  ",
        "马汉  ",
    ]
    return (
        <div>
            <ul>
                {
                    // map返回值就是数组
                    arr.map((value,index)=>{
                        return (
                            <li key={index}>
                                {value}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
   }
}
export default App;
