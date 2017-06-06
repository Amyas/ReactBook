import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Header extends Component {
    constructor () {//1
        super()
        console.log('construct')
    }

    componentWillMount () {//2.页面渲染前
        /***
         * 组件挂载开始之前，也就是在组件调用 render 方法之前调用
         */
        console.log('component will mount')
    }

    componentDidMount () {//4.页面渲染后
        /***
         * 组件挂载完成以后，也就是 DOM 元素已经插入页面后调用
         */
        console.log('component did mount')
    }

    componentWillUnmount() {//5.页面卸载前
        /***
         * 组件对应的 DOM 元素从页面中删除之前调用。
         */
        console.log('component will unmount')
    }

    render () {//3.页面渲染
        console.log('render')
        return (
            <div>
                <h1 className='title'>React 小书</h1>
            </div>
        )
    }
}

class Index extends Component {
    constructor() {
        super()
        this.state = {
            isShowHeader: true
        }
    }

    handleShowOrHide () {
        this.setState({
            isShowHeader: !this.state.isShowHeader
        })
    }

    render () {
        return (
            <div>
                {this.state.isShowHeader ? <Header /> : null}
                <button onClick={this.handleShowOrHide.bind(this)}>
                    显示或者隐藏标题
                </button>
            </div>
        )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
)

