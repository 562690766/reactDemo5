import React,{Component} from 'react'
export default class Item extends Component{
    render(){
        let {todo,delTodo,changeHasCompleted}=this.props;
        let completed=todo.hasCompleted?"completed":"";
        return (
            <li className={completed}>
                <div className='view'>
                    <input type="checkbox" className='toggle' 
                    onChange={()=>{changeHasCompleted(todo)}} 
                    checked={todo.hasCompleted}/>
                    <label>{todo.title}</label>
                    {/* delTodo(todo)不在函数内会报错 */}
                    <button className='destroy' onClick={()=>delTodo(todo)}></button>
                </div>
                <input type="text" className='edit'/>
            </li>
        )
    }
    
}