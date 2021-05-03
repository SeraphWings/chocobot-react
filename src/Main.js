import React from 'react';
import './Main.css';
import User from './User.js';

class Main extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            dialog:[],
        }
    }

    handleChatSubmit(msg){
        this.setState({
            dialog: this.state.dialog.concat(msg),
        })
    }


    render(){
        return (
          <div className = "Main">
            <User onSubmit={() => this.handleChatSubmit()}/>
          </div>
        );
    }

}

export default Main;
