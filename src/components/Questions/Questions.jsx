import React from 'react';
import Drawer from '../Drawer/Drawer';

class Questions extends React.Component {

  render() {
    return (
      <div className="AnotherComponent">
        <h1>Welcome to my Clothing drawer</h1>
        <Drawer title="My Clothing">
          <ul>
            <li>Yellow Dress</li>
            <li>Red Skirt</li>
            <li>Purple Jacket</li>
          </ul>
        </Drawer>
      </div>
    );
  }
}

export default Questions;
