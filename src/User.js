import React from 'react';
import ReactDOM from 'react-dom';

class User extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            value: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }


    render() {
        return (
            <form onSubmit ={this.handleSubmit}>
                <label > do you want to talk to me ?
                    <p>
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        <input type='submit' value="Submit" />
                    </p>
                </label>


            </form>

        );
    }
}

export default User;
