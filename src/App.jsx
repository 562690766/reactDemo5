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
            todoDatas:[]
        }
    }
    // 功能模块1：添加todo
    addTodo=(event)=>{
        if(event.key!=="Enter") return;
        console.log("addTodo被调用了");
        let {todoDatas}=this.state;
        // (1)创建todo
        let todo={};
        todo.id=Date.now ();
        todo.title=event.target.value.trim();
        todo.hasCompleted=false;
        // (2)添加到储存todo的数组里
        todoDatas.push(todo);
        // (3)render出来
        this.setState({todoDatas});
        // (4)输入文本框变空
        event.target.value="";
    }
    // 功能模块2：删除todo
    delTodo=(todo)=>{
        console.log("触发了delTodo");
        let {todoDatas}=this.state;
        todoDatas=todoDatas.filter(value=>{
            if(value.id==todo.id){
                return false;
            }
            return true;
        })
        this.setState({todoDatas});
    }



   render(){
    let {todoDatas}=this.state;
    let {delTodo}=this;
    let items=todoDatas.map(todo=>{
        return (
            <Item key={todo.id} todo={todo} delTodo={delTodo}/>
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
            <Footer/>
        </section>
    )
   }
}