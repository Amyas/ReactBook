import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Title extends Component {
    handleClickOnTitle(e){
        console.log(this)
    }
    render(){
        return(
            <h1
                onClick={this.handleClickOnTitle}
            >React小书</h1>
        )
    }
}

class Header extends React.Component {
    render(){
        return(
            <div>
                <Title/>
                <h1>头部</h1>
            </div>
        )
    }
}

class Index extends React.Component {
    render(){
        return(
           <Header/>
        )
    }
}

class Dog extends Component {
    bark(){
        console.log('brak')
    }
    run(){
        console.log('run')
    }
    render(){
        return(
            <div
                onClick={() => {
                    this.bark();
                    this.run();
                }}
            >
                DOG
            </div>
        )
    }
}

ReactDOM.render(
    <Dog />,
    document.getElementById('root')
);
