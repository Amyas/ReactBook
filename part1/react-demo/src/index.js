import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class LikeButton extends Component {
    static defaultProps = {
        likedText: '取消',
        unlikedText: '点赞'
    }

    constructor(){
        super();
        this.state = {
            isLiked : false
        }
    }

    handleClickOnLikeButton () {
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    render(){
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked ? this.props.likedText : this.props.unlikedText}
            </button>
        )
    }
}

class Index extends Component {
    render(){
        return (
            <div>
                <LikeButton
                    likedText="props1" unlikedText="props2"
                    onClick={() => console.log('Click on like button!')}
                />
            </div>
        )
    }
}


ReactDOM.render(
    <Index/>,
    document.getElementById('root')
);
