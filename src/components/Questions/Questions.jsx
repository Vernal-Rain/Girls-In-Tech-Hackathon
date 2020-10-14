import React from 'react';
import Drawer from '../Drawer/Drawer';

class Questions extends React.Component {

  render() {
    return (
      <div className="AnotherComponent">
        <h1>Should I use Thermography or a Mammogram?</h1>
        <Drawer title="Test Type">
          <ul>
            <li>
              Thermography takes a picture of the breast and creates a heat map.
              This can show areas with inflammation that require further investigating.
            </li>
            <li>
              Mammograms take an x-ray photo of the breast. It involves breast
              compression and areas with more dense breast tissue show up as white
              in the x-ray.
            </li>
            <li>
              Consult with your doctor to determine which procedure is right for you.
            </li>
          </ul>
        </Drawer>
        <h1>How often should I schedule screenings?</h1>
        <Drawer title="Screenings">
          <ul>
            <li>
              The American Cancer Society recommends varied schedules depending on age.
              Ages 40-44 may start the process of yearly breast cancer screenings.
            </li>
            <li>
              Women ages 45-54 should get screened every year.
            </li>
            <li>
              Women 55 years and older should switch to once every two years, or
              continue with yearly procedures if they wish.
            </li>
            <li>
              It is important to be aware of the potential risks from regular
               screenings, such as radiation exposure. Consult with your doctor
               to determine your own schedule.
            </li>
          </ul>
        </Drawer>
        <h1>What Now?</h1>
        <Drawer title="What Now">
          <ul>
            <li>Positive Results</li>
            <li>
              Be sure to consult with your doctor about possibilities such as
              enhanced testing, risk-reducing surgery or chemoprevention.
            </li>
            <li>Negative Results</li>
            <li>
              You may practice regular breast self-examination and maintain the
              screening schedule as determined with your doctor.
            </li>
          </ul>
        </Drawer>
        <h1>Appointment Reminder</h1>
        <Drawer title="Appt">
          <ul>
            <li>
              Pick a date, and we'll send you a notification when it's time to
              schedule your next exam
            </li>
            <li>placeholder date</li>
          </ul>
        </Drawer>
      </div>
    );
  }
}

export default Questions;
