import React from 'react';
import './Main.css';
import User from './User.js';

class Main extends React.Component{

    render(){
        return (
          <div className="Main">
            <User />
          </div>
        );
    }

}

export default Main;
