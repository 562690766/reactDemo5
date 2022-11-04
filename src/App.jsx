import React,{Component} from 'react';
import Item from './components/Item';
import Footer from './components/Footer';
import Child from './Child'
import './css/index.css'

export default class App extends Component{

   render(){

    return( 
        <section className="todoapp"> 
            <header className="header">
                <h1>Todos</h1>
                <input type="text" className="new-todo" placeholder="What need to be done?"/>
            </header>
            <section className="main">
                <input type="checkbox" className='toggle-all' id="toggle-all"/>
                <label htmlFor="toggle-all"></label>
                <ul className='todo-list'>
                    <Item/>
                    <Item/>
                    <Item/>
                </ul>
            </section>
            <Footer/>
        </section>

           /*     <Child/>?/*  */
    )
   }
}