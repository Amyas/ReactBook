import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Clock extends Component {
    constructor() {
        super();
        this.state = {
            data: new Date()
        }
    }

    componentWillMount() {
        this.timer = setInterval(() => {
            this.setState({
                data: new Date()
            })
        },1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        return (
            <div>
                <h1>
                    <p>现在的时间是:</p>
                    {this.state.data.toLocaleTimeString()}
                </h1>
            </div>
        )
    }
}
/***
 * toLocaleTimeString  时间对象的字符串
 */

class Index extends Component {
    constructor() {
        super();
        this.state = {
            isShowClock: true
        }
    }

    handleShowOrHide() {
        this.setState({
            isShowClock: !this.state.isShowClock
        })
    }

    render() {
        return (
            <div>
                {this.state.isShowClock ? <Clock/> : null}
                <button
                    onClick={this.handleShowOrHide.bind(this)}
                >
                    显示或隐藏时钟
                </button>
            </div>
        )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
)

