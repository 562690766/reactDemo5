import React,{Component} from 'react'
import Child from './Child'
export default class App extends Component{
/*     constructor(){
        console.log("component");
        super();
    }
    componentWillMount(){
        console.log("componentWillMount 1");
        this.sid=0;
    }
    render(){
        console.log("render2");
        return (
            <div>
                <h3>App</h3>
            </div>
        )
    }
    componentDidMount(){
        console.log("componentDidMount 3")
    } */
    render(){
        return(
            <div>
                <h3>App组件</h3>
                <Child/>
            </div>
        )
    }
}
