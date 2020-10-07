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
            <h4>
              <FontAwesomeIcon
                        icon={faSearch}
                        size="1x"
                        id="icon"
              />
              <form onSubmit={this.handleSubmit}>
               <label>
                 Zipcode
                 <input type="text" value={this.state.value} onChange={this.handleChange} />
               </label>
               <input type="submit" value="Search" />
             </form>
            </h4>
          <Col>
            <h4>
              Location
            </h4>
            <h5>
              Name of Center
            </h5>
          </Col>
          </Col>
          <Col>
            <div style={{width: '100%'}}>
              <iframe title="test" width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1201%20W%2038th%20St,%20Austin,%20TX%2078705+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Map;
