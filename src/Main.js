import React from 'react';
import './Main.css';
import User from './User.js';
import Textlog from './Textlog.js'
import Server from './Server.js'

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
        this.handleServerOnchange = this.handleServerOnchange.bind(this);
    }

    handleChatSubmit(){
        this.setState({
            dialog: this.state.dialog.concat(this.state.input),
            input: '',
        })

    }

    handleOnchange(msg){
        this.setState({
            input: msg,
        })
    }

    handleServerSubmit = (msg) => {
        console.log(msg);

        this.setState({
            dialog: this.state.dialog.concat(msg),
            serverInput: msg,
        })

    }

    handleServerOnchange(msg){
        this.setState({
            serverInput: msg,
        })

        // this.handleServerSubmit();
    }



    render(){
        return (
          <div className = "Main">
            <User handleChatSubmit = {this.handleChatSubmit}
                handleOnchange = {this.handleOnchange}
                value ={this.state.input}/>
            <Textlog dialog = {this.state.dialog}/>
            <Server dialog = {this.state.dialog}
                    handleServerSubmit = { this.handleServerSubmit}/>
          </div>
        );
    }

}

export default Main;
