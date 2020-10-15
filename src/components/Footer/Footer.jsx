import React, { Component } from 'react'

class Footer extends Component {
  render(){
    return(
      <div>
        <img
          width="5%"
          height="5%"
          src="up.png"
          alt="scroll to top"
          onClick="window.scrollTo(0, 0)"
          className="Scroll-Img"
        />
      </div>
    );
  }
}

export default Footer;
