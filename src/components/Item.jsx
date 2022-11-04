import React,{Component} from 'react'
export default class Item extends Component {
    render(){
        return (
            <li>
                <div className='view'>
                    <input type="checkbox" className='toggle' />
                    <label>Content</label>
                    <button className='destroy'></button>
                </div>
                <input type="text" className='edit'/>
            </li>
        )
    }
}