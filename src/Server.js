import React from 'react'

class  Server extends React.Component {


    response(dialog){
        const response = "you said: " + dialog[-1];
        this.props.handleServerSubmit(response);
    }

    render(){
        return(
            <div>{this.response(this.props.dialog)}</div>
        )
    }
}
export default Server;
