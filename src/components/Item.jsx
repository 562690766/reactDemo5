import React,{Component} from 'react'
export default class Item extends Component{
    constructor(){
        super();
        this.state={
            inEdit:false
        }
        this.myInput=React.createRef();
    }
    //更改Item组件自身状态值this.state.inEdit
    changeInEdit=()=>{
        let {todo}=this.props;
        // setState的第二个参数表示：this.state状态更新后,执行的匿名回调函数
        this.setState({inEdit:true},()=>{
            //文本框显示todo.title
            this.myInput.current.value=todo.title;
            // 原生js模拟触发
            this.myInput.current.focus();
        })
    }
    render(){
        let {todo,delTodo,changeHasCompleted,editTodo}=this.props;
        let completed=todo.hasCompleted?"completed":"";
        // 先分状态：编辑状态时出现editing这个类，否则隐藏
        let {inEdit}=this.state;
        let classes=inEdit?completed+"editing":completed;
        return (
            <li className={classes}>
                <div className='view'>
                    <input type="checkbox" className='toggle' 
                    onChange={()=>{changeHasCompleted(todo)}} 
                    checked={todo.hasCompleted}/>

                    <label onDoubleClick={this.changeInEdit}>
                        {todo.title}
                    </label>

                    {/* delTodo(todo)不在函数内会报错 */}
                    <button className='destroy' onClick={()=>delTodo(todo)}></button>
                </div>
                <input type="text" className='edit' ref={this.myInput} 
                onBlur={inEdit?()=>{
                    console.log("执行了onBlur步骤");
                    // 把当前修改后的todo赋值给todo.title，通过回调函数传给父组件
                    todo.title=this.myInput.current.value.trim();
                    editTodo(todo);
                    this.setState({inEdit:false});
                }:null}
                />
            </li>
        )
    }
    
}