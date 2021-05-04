import React from 'react';
import './Main.css';
import User from './User.js';
import Textlog from './Textlog.js'

class Main extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            dialog:[],
            input:'',
        }

        this.handleChatSubmit = this.handleChatSubmit.bind(this);
        this.handleOnchange = this.handleOnchange.bind(this);
    }

    handleChatSubmit(){
        this.setState({
            dialog: this.state.dialog.concat(this.state.input),
        })
    }

    handleOnchange(msg){
        this.setState({
            input: msg,
        })
    }


    render(){
        return (
          <div className = "Main">
            <User handleChatSubmit = {this.handleChatSubmit}  handleOnchange = {this.handleOnchange}/>
            <Textlog dialog = {this.state.dialog}/>
          </div>
        );
    }

}

export default Main;
