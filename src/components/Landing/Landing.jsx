import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPhone, faArrowRight, faQuestion, faBell } from '@fortawesome/free-solid-svg-icons';

class Landing extends Component {
  render() {
    return(
        <div className="Landing">
          <h4 className="Landing-Find">
            Find Your Screening Center
            <FontAwesomeIcon
                      icon={faSearch}
                      size="1x"
                      id="icon"
            />
          </h4>
          <h4 className="Landing-Contact">
            Contact Info
            <FontAwesomeIcon
                      icon={faPhone}
                      size="1x"
                      id="icon"
            />
          </h4>
          <h4 className="Landing-What-Now">
            What Now?
            <FontAwesomeIcon
                      icon={faArrowRight}
                      size="1x"
                      id="icon"
            />
          </h4>
          <h4 className="Landing-Questions">
            Common Questions
            <FontAwesomeIcon
                      icon={faQuestion}
                      size="1x"
                      id="icon"
            />
          </h4>
          <h4 className="Landing-Set-Reminder">
            Set Appt. Reminder
            <FontAwesomeIcon
                      icon={faBell}
                      size="1x"
                      id="icon"
            />
          </h4>
        </div>
    );
  }
}

export default Landing;
