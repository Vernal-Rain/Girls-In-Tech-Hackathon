import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

class Landing extends Component {
  render() {
    return(
      <div className="Landing">
        <h2 className="Landing-Find">Find Your Screening Center</h2>
        <FontAwesomeIcon
                  icon={faEnvelope}
                  size="1x"
                  id="icon email-icon"
                />
        <h2 className="Landing-Contact">Contact Info</h2>
        <h2 className="Landing-What-Now">What Now?</h2>
        <h2 className="Landing-Questions">Common Questions</h2>
        <h2 className="Landing-Set-Reminder">Set Appt. Reminder</h2>
      </div>
    );
  }
}

export default Landing;
