import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';


class Questions extends React.Component {

  render() {
    return (
      <Accordion className="Accordian">
      <h3>Common Questions</h3>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Should I use Thermography or a Mammogram?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              Thermography takes a picture of the breast and creates a heat map.
              This can show areas with inflammation that require further investigating.
              <br />
              Mammograms take an x-ray photo of the breast. It involves breast
              compression and areas with more dense breast tissue show up as white
              in the x-ray.
              <br />
              Consult with your doctor to determine which procedure is right for you.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            How often should I schedule screenings?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              The American Cancer Society recommends varied schedules depending on age.
              Ages 40-44 may start the process of yearly breast cancer screenings.
            <br />
              Women ages 45-54 should get screened every year.
            <br />
              Women 55 years and older should switch to once every two years, or
              continue with yearly procedures if they wish.
            <br />
              It is important to be aware of the potential risks from regular
               screenings, such as radiation exposure. Consult with your doctor
               to determine your own schedule.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            What Now?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
            <h4>Positive Results</h4>
              Be sure to consult with your doctor about possibilities such as
              enhanced testing, risk-reducing surgery or chemoprevention.
            <h4>Negative Results</h4>
              You may practice regular breast self-examination and maintain the
              screening schedule as determined with your doctor.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            Appointment Reminder
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              Pick a date, and we'll send you a notification when it's time to
              schedule your next exam
              placeholder date
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

    );
  }
}

export default Questions;
