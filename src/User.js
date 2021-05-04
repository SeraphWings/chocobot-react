import React from 'react';
import ReactDOM from 'react-dom';

class User extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleChatSubmit();
    }

    handleChange = (event) => {
        this.props.handleOnchange(event.target.value);
        // console.log(event.target.value);
    }

    render() {
        return (
            <form onSubmit ={this.handleSubmit}>
                <label > do you want to talk to me ?
                    <p>
                        <input type="text" onChange={this.handleChange}/>
                        <input type='submit' value = "Send"/>
                    </p>
                </label>


            </form>

        );
    }
}

export default User;
