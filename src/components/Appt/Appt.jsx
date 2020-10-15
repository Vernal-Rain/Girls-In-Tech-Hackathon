import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class Appt extends Component {
  render() {
    return(
      <div>
        <Container>
          <Row>
            <img
              src="time.png"
              alt="calendar pic"
              width="100vw"
              height="100vh"
            />
          </Row>
          <Row>
            <h4>
              Pick a date and we'll remind you about your appt!
            </h4>
          </Row>
          <Row>
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
