import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

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
              <form onSubmit={this.handleSubmit}>
               <label>
                 Zipcode:
                 <input type="text" value={this.state.value} onChange={this.handleChange} />
               </label>
               <input type="submit" value="Search" />
             </form>
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
