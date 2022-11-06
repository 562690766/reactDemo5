import React,{Component} from 'react';
import Item from './components/Item';
import Footer from './components/Footer';
import Child from './Child'
import './css/index.css'

export default class App extends Component{
    constructor(){
        super();
        this.state={
            //存储所有todo的数组
            todoDatas:[],
            // 统计所有未完成todo，就是统计todo.hasCompleted false的条数
            todoNum:0,
            // 存储过滤的值
            view:"all"
        }
    }
    // 功能模块1：添加todo
    addTodo=(event)=>{
        if(event.key!=="Enter") return;
        // 如果想添加的todo为空，就不添加
        if(event.target.value.trim()==="") return;
        console.log("addTodo被调用了");
        let {todoDatas,todoNum}=this.state;
        // (1)创建todo
        let todo={};
        todo.id=Date.now ();
        todo.title=event.target.value.trim();
        todo.hasCompleted=false;
        // (2)添加到储存todo的数组里
        todoDatas.push(todo);
        todoNum++;
        // (3)render出来
        this.setState({todoDatas,todoNum});
        // (4)输入文本框变空
        event.target.value="";
    }
    // 功能模块2：删除todo
    delTodo=(todo)=>{
        console.log("触发了delTodo");
        let {todoDatas,todoNum}=this.state;
        todoDatas=todoDatas.filter(value=>{
            if(value.id==todo.id){
                if(!todo.hasCompleted){
                    todoNum--;
                }
                return false;
            }
            return true;
        })
        this.setState({todoDatas,todoNum});
    }
    //功能模块3：改变todo状态 已完成/未完成todo.hasCompleted->todo->todoDatas
    changeHasCompleted=(todo)=>{
        let {todoDatas,todoNum}=this.state;
        todoDatas=todoDatas.map(value=>{
            if(value.id===todo.id){
                value.hasCompleted = !todo.hasCompleted;
                if(value.hasCompleted){
                    todoNum--;
                }else{
                    todoNum++;
                }
            }
            return value;
        })
        this.setState({todoDatas,todoNum});
    }
    //功能模块4： 编辑todo
    editTodo=(todo)=>{
        let {todoDatas}=this.state;
        todoDatas=todoDatas.map(value=>{
            if(value.id===todo.id){
                // todo.title的title写错的话不会报错，就是双击后component监控到的state状态一直是false不会改变。
                value.title=todo.title;
            }
            return value;
        })
        this.setState({todoDatas});
    }
    //功能模块5： 过滤todo
    changeView=(view)=>{
        this.setState({view});
    }

   render(){
    let {todoDatas,todoNum,view}=this.state;
    let {delTodo,changeHasCompleted,editTodo,changeView}=this;
    
    let filterTodoDatas=todoDatas.filter(value=>{
        switch (view){
            case 'all':
                return true;
            case 'active':
                return !value.hasCompleted;
            case 'completed':
                return value.hasCompleted;
            default:
                return retue;
        }
    })
    let items=filterTodoDatas.map(todo=>{
        return (
            <Item key={todo.id} todo={todo} delTodo={delTodo} 
            changeHasCompleted={changeHasCompleted} 
            editTodo={editTodo}/>
        )
    })
    return( 
        <section className='todoapp'>
            <header className='header'>
                <h1>Todos</h1>
                <input type="text" className='new-todo' 
                placeholder="What need to be done?"
                onKeyUp={this.addTodo}/>
            </header>
            <section className='main'>
                <input type="checkbox" className='toggle-all' id='toggle-all'/>
                <label htmlFor="toggle-all"></label>
                <ul className='todo-list'>
                   {items}
                </ul>
            </section>
            <Footer todoNum={todoNum} changeView={changeView}/>
        </section>
    )
   }
}