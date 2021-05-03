import React from 'react';
import ReactDOM from 'react-dom';

class User extends React.Component {

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit();

    }

    render() {
        return (
            <form onSubmit ={this.props.onSubmit()}>
                <label > do you want to talk to me ?
                    <p>
                        <input type="text" />
                        <input type='submit' value = "Send"/>
                    </p>
                </label>


            </form>

        );
    }
}

export default User;
