import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return(
        <div className="Landing">
          <h4 className="Landing-Find">
            <Link to="/Map" className="Link">
              Find Your Screening Center
            </Link>
            <FontAwesomeIcon
                      icon={faSearch}
                      size="3x"
                      id="icon"
            />
          </h4>
          <h4 className="Landing-Contact">
            <Link to="/Contact" className="Link">
              Contact Info
            </Link>
            <img
              src="phone.png"
              alt="phone img"
              width="100vw"
              height="100vh"
            />
          </h4>
          <h4 className="Landing-What-Now">
            <Link to="/Questions" className="Link">
              What Now?
            </Link>
            <img
              src="question-mark-man.png"
              alt="question mark man img"
              width="100vw"
              height="100vh"
            />
          </h4>
          <h4 className="Landing-Questions">
            <Link to="/Questions" className="Link">
              Common Questions
            </Link>
            <img
              src="question-mark.png"
              alt="question mark img"
              width="100vw"
              height="100vh"
            />
          </h4>
          <h4 className="Landing-Set-Reminder">
            <Link to="/Appt" className="Link">
              Set Appt. Reminder
            </Link>
            <img
              src="notification.png"
              alt="notification img"
              width="100vw"
              height="100vh"
            />
          </h4>
        </div>
    );
  }
}

export default Landing;
