import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class Contact extends Component {
  render() {
    return(
      <div>
        <Container className="justify-content-center">
          <Row className="justify-content-center">
            <img
              src="phone.png"
              alt="phone img"
              width="100vw"
              height="100vh"
              className="Phone-Img"
            />
          </Row>
          <Row className="justify-content-center">
            <h3>
              Phone (999) 999-9999
            </h3>
          </Row>
          <Row className="justify-content-center">
            <h3>
              Hours 12am-12pm
            </h3>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;
