import React, { Component } from 'react'
import axios from 'axios'
import Img1 from './img/1.gif'
import Style from './css/style.css'

export default class App extends Component {
    render() {
        return (
            <div>
                <h3>app组件++666999</h3>
                <ul>
                    {
                        [
                            <li key={1}>tom</li>,
                            <li key={2}>susan</li>,
                            <li key={3}>jack</li>,
                        ].map((value) => {
                            return value;
                        })
                    }
                </ul>
                <img src={Img1} />
                <span>good厉害厉害真厉害，你要好好学习啊</span>
                <div className={Style.special}>
                    <h3>App组件3</h3>
                    <a href="ff.html">ff</a>
                    <img src={Img1} />
                    <br />
                    <span className={Style.one}>good</span>
                </div>

            </div>
        )
    }
    componentDidMount() {
        // 取数据 
        axios.get("/data")
            .then(res => {
                console.log("res", res);
            });
    }
}
