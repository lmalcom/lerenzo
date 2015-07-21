/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
class AboutPage extends React.Component {
  render() {
    return (
      <div className="AboutPage page">
        <div className="AboutPage-container">
          <h1>About Me</h1>
          <p>{`LeRenzo a spunky, quirky, fun individual hailing from Garland
              Texas. I graduated in the fall of 2011 from Harvard University in Visual
              and Environmental Studies (quite the mouthful), with a minor in Philosophy.
              `}
          </p>
          <p>
            {`My education impacted my professional path greatly: I started out in web design (front end)
              and moved to full stack javascript soon after node.js was released because of
              my interest in 'live' websites. I have a passion for UI/UX design and animation, and have used
              those skills to make my websites more responsive and compelling.`}
          </p>
          <a className="resume" href="/src/pdf/resume2015.pdf">[Resume]</a>
        </div>
      </div>
    );
  }

}

export default AboutPage;
