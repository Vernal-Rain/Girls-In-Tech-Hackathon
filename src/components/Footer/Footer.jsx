import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

class Footer extends Component {
  render(){
    return(
      <div className="fixed-bottom">
        <FontAwesomeIcon
                  icon={faArrowUp}
                  size="3x"
                  id="icon"
                  className="float-right"
        />
      </div>
    );
  }
}

export default Footer;
