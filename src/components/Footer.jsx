import React,{Component} from 'react'
export default class Footer extends Component{
    render(){
        let {todoNum,changeView,view}=this.props;
        return (
            <footer className="footer">
                <span className='todo-count'>
                    <strong>{todoNum}</strong>
                    <span>{todoNum<2?"item left":"items left"}</span>
                </span>
                <ul className='filters'>
                    <li>
                        <a href="#/all" onClick={()=>changeView("all")} className={view=="all"?"selected":""}>All</a>
                    </li>
                    <li>
                        <a href="#/active" onClick={()=>changeView("active")} className={view=="active"?"selected":""}>Active</a>
                    </li>
                    <li>
                        <a href="#/completed" onClick={()=>changeView("completed")}  className={view=="completed"?"selected":""}>Completed</a>
                    </li>
                </ul>
                <button className='clear-completed'>
                    Clear Completed
                </button>
            </footer>
        )
    }
} 
