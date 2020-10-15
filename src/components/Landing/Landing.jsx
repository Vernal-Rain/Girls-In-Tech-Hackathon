import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faPhone,
  faArrowRight,
  faQuestion,
  faBell
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
                      size="1x"
                      id="icon"
            />
          </h4>
          <h4 className="Landing-Contact">
            <Link to="/Contact" className="Link">
              Contact Info
            </Link>
            <FontAwesomeIcon
                      icon={faPhone}
                      size="1x"
                      id="icon"
            />
          </h4>
          <h4 className="Landing-What-Now">
            <Link to="/Questions" className="Link">
              What Now?
            </Link>
            <FontAwesomeIcon
                      icon={faArrowRight}
                      size="1x"
                      id="icon"
            />
          </h4>
          <h4 className="Landing-Questions">
            <Link to="/Questions" className="Link">
              Common Questions
            </Link>
            <FontAwesomeIcon
                      icon={faQuestion}
                      size="1x"
                      id="icon"
            />
          </h4>
          <h4 className="Landing-Set-Reminder">
            <Link to="/Appt" className="Link">
              Set Appt. Reminder
            </Link>
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
