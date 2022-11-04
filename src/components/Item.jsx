import React,{Component} from 'react'

export default class Item extends Component {
    render(){
        return (
            <li>
                 {/* <div className='view'>
                    <input type="checkbox" className='toggle' />
                    <label>Content</label>
                    <button className='destroy'></button>
                </div>
                <input type="text" className='edit'/> */}


                <section className='view'>
                    <input type="checkbox" className='toggle'/>
                    <label htmlFor="toggle">Content</label>
                    <button className='destroy'></button>
                </section>
                <input type="text" className='edit'/>
            </li> 
        )
    }
}