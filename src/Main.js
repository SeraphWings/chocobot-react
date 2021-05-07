import React from 'react';
import './Main.css';
import User from './User.js';
import Textlog from './Textlog.js'
// import Server from './Server.js'

class Main extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            dialog:[],
            input:'',
            serverInput:'',
        }

        this.handleChatSubmit = this.handleChatSubmit.bind(this);
        this.handleServerSubmit = this.handleServerSubmit.bind(this);
        this.handleOnchange = this.handleOnchange.bind(this);
    }

    handleChatSubmit(){
        this.setState({
            dialog: this.state.dialog.concat(this.state.input),
            input: '',
        }, () => {
            this.handleServerSubmit();

        });


    }

    handleOnchange(msg){
        this.setState({
            input: msg,
        })
    }

    handleServerSubmit() {
        const dialog = this.state.dialog;
        const response = "you said: " + dialog[dialog.length - 1];
        console.log(response);

        this.setState({
            dialog: this.state.dialog.concat(response),

        })

    }

    render(){
        return (
          <div className = "Main">
            <User handleChatSubmit = {this.handleChatSubmit}
                handleOnchange = {this.handleOnchange}
                value ={this.state.input}/>
            <Textlog dialog = {this.state.dialog}/>
          </div>
        );
    }

}

export default Main;
