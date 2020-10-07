import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Map extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h2>
            <FontAwesomeIcon
                      icon={faSearch}
                      size="1x"
                      id="icon"
            />
            Zipcode: 97223
            </h2>
          </Col>
          <Col>
            I'm a Mapppppp, I'm a map, Ima map, Ima map
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Map;
