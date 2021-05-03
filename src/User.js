

class User extends React.component {
    constructor(props){
        super(props);

        this.state = {
            value: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.t
            arget.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }


    render() {
        return (
            <form onSubmit ={{this.handleSubmit}>
                <label> do you want to talk to me ?
                     <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <input type='submit' value="Submit" />
                </label>

            </form>

        );
    }
}