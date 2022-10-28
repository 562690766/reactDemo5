import React,{Component} from 'react';
import Img1 from './img/1.gif';
import Style from './css/style.css';
console.log("组件渲染了");
/* const App=(props)=>{
    return (
        <div>
            <h3>App组件react开始11</h3>
            <p>
                {props.name}
            </p>
        </div>
    )
} */

class App extends Component{
    render(){
        // 可以放变量
        let a=<a href="http://www.baidu.com">百度一下</a>
        const name="tom";
        const myStyle={
            fontSize:"36px",
            color:"#fff",
            background:"#99f",
        }


        return (//return返回一个对象的话要加小括号
        //标签要小写，大写会当成组件
            <div>
                <h2>App</h2>
                {/* jsx语法嵌入变量、表达式、函数调用，叫做jsx的模板语法 */}
                <p>{name=="susan"?100:66}</p>
                <img src={Img1} title="等一下下"/>
                {/* 解决重名问题 */}
                <div className={Style.special}>
                    持之以恒
                </div>
                <label htmlFor="userName">用户名:</label>
                {/* 发现输入框里面的value需要解决命名冲突的问题，button不用 */}
                <input type="text" id="userName" defaultValue="请输入用户名"/>
                <input type="button" value="按钮1"/>
                

                {/* 行内样式 */}
                <div style={myStyle}>
                    知识改变命运
                </div>
                {/* 第一个大括号是jsx模板定界符，第二个是行内样式的对象 */}
                <div style={{background:"#9f9",color:"#000",fontWeight:"bold"}}>
                    明天的你会感谢今天努力的自己！
                </div>
            </div>
        )
    }
        
    
}
export default App;
