import React,{Component} from 'react'
export default class Child extends Component{
    constructor(){
        console.log("constructor 0");
        super();
        this.state={
            count:0,
            hours:0,
            minutes:0,
            seconds:0
        }
        this.sid=null;
    }
    showTime=()=>{
        this.sid=setInterval(()=>{
            let myDate=new Date();
            let hours=myDate.getHours();
            let minutes=myDate.getMinutes();
            let seconds=myDate.getSeconds();
            this.setState({
                hours:hours,
                minutes:minutes,
                seconds:seconds
            })
            console.log("计时器正在执行");
        },1000)
    }
    handdleClick=()=>{
        let {count}=this.state;
        this.setState({
            count:count+1,
        })
    }
    componentWillMount(){
        console.log("componentWillMount 1");
    }
    render(){
        console.log("render 2  7");
        let {count,hours,minutes,seconds}=this.state;
        return(
            <div>
                <h3>Child组件</h3>
                <p>count:{count}</p>
                <button onClick={this.handdleClick}>+</button>
                <hr/>
                <p>age:{this.props.age}</p>
                <hr/>
                <p>现在的时间是:{hours}:{minutes}:{seconds}</p>
            </div>
        )
    }
    componentDidMount(){
        // 初始化的第三个方法
        this.showTime();
        window.onscroll=function(){
            console.log(window.pageYOffset+"px");
        }
        console.log("componentDidMount 3")
    }
    // 第四步与更新无关，暂时屏蔽掉
    componentWillReceiveProps(nextProps){
        console.log("nextProps",nextProps,"this.props",this.props);
        if(nextProps.num!=this.props.num){
            this.setState({
                count:nextProps.num
            })
        }
        console.log("componentWillReceiveProps 4");
        // {name:"jarry",age:22,count:100};
    /*     console.log("nextProps",nextProps,"this.props",this.props)
        if(nextProps.num!=this.props.num){
            this.setState({//新的props值去修改当前组件Child的this.state.count
                count:nextProps.num
            })
        } */
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
    componentWillUnmount(){
        clearInterval(this.sid);
        window.onscroll=null;
        console.log("componentWillUnmount 9");
    }
}
Child.defaultProps={
    name:"tom"
}