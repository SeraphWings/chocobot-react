import React from 'react';
import ReactDOM from 'react-dom';



class Textlog extends React.Component {

    generate(dialog) {


        const logs = dialog.map( (element, index) => {
             return (
                <li key={index}>
                    {element}
                </li>
             )
        });
        // console.log(dialog);
        // console.log(logs);
        return (
            <ul>{logs}</ul>
        );
    };

    render() {
        return (
            <div>{this.generate(this.props.dialog)}</div>
        )

    };
}

export default Textlog;