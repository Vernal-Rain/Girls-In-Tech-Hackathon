import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

class Contact extends Component {
  render() {
    return(
      <div>
        <Container className="justify-content-center">
          <Row>
            <FontAwesomeIcon
                      icon={faPhone}
                      size="1x"
                      id="icon"
            />
            <h4>
            Contact Info
            </h4>
          </Row>
          <Row>
            Phone (999) 999-9999
          </Row>
          <Row>
            Hours 12am-12pm
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;
