import React from 'react'

function Server(props) {
    const dialog = this.props.dialog;
    const response = "you said: " + dialog[-1];
    this.props.handleServerSubmit(response);


}
export default Server;
