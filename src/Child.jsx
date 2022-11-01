import React,{Component} from 'react'
export default class Child extends Component{
    constructor(){
        console.log("constructor 0");
        super();
        this.state={
            count:0
        }
    }
    handdleClick=()=>{
        let {count}=this.state;
        this.setState({
            count:{count}+1,
        })
    }
    componentWillMount(){
        console.log("componentWillMount 1");
    }
    render(){
        console.log("render 2  7");
        let {count}=this.state;
        return(
            <div>
                <h3>Child组件</h3>
                <p>count:{count}</p>
                <button onClick={this.handdleClick}>+</button>
            </div>
        )
    }
    componentDidMount(){
        // 初始化的第三个方法
        console.log("componentDidMount 3")
    }
    // 第四步与更新无关，暂时屏蔽掉
    componentWillReceiveProps(nextProps,nextState){
        console.log("componentWillReceiveProps 4");
    }
    // 决定是否进入更新阶段，无论是否发生变化都会更新，解决方法：顶部导入的component改成PureComponent,再注释生命周期的第五个方法。
    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate 5");
        return true;        
    }
    componentWillUpdate(){
        console.log("componentWillUpdate 6");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate 8");
    }
}