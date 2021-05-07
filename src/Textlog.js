import React from 'react';
import './Textlog.css';

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
            <div className="TextCase">{this.generate(this.props.dialog)}</div>
        )

    };
}

export default Textlog;
