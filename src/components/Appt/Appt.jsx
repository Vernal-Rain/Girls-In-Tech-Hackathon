import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class Appt extends Component {
  render() {
    return(
      <div>
        <Container>
          <Row className="justify-content-center">
            <img
              src="time.png"
              alt="calendar pic"
              width="100vw"
              height="100vh"
              className="Calendar-Img"
            />
          </Row>
          <Row className="justify-content-center">
            <h4>
              Pick a date and we'll remind you about your appt!
            </h4>
          </Row>
          <Row className="justify-content-center">
            <img
              src="time_scroll.png"
              alt="calendar scroll choice pic"
            />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Appt;
