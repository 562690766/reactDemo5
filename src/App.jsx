import React,{Component} from 'react'
import Hello from './hello'

export default class App extends Component{
    render(){
        return (
            <div>
                App
                <Hello name="susan" sex="女" age="26" />
            </div>
        )
    }
}