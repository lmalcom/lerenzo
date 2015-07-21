/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';

export default class extends React.Component {

  render() {
    return (
      <footer className="Footer">
        <div className="Footer-container">
          <i>Copyright LeRenzo Malcom 2015</i>
          <a href="mailto:Lmalcom@post.harvard.edu">    Lmalcom@post.harvard.edu</a>
          <div className="social">
              <a href="https://www.linkedin.com/pub/lerenzo-tolbert-malcom/12/696/876" className="btn-linkedin btn" style={{backgroundImage:"url('/src/images/icons/linkedin2.svg')"}}></a>
              <a href="https://github.com/lmalcom/" className="btn-github btn" style={{backgroundImage:"url('/src/images/icons/github4.svg')"}}></a>
              <a href="https://twitter.com/lerenzom" className="btn-twiter btn" style={{backgroundImage:"url('/src/images/icons/bird.svg')"}}></a>
              <a href="mailto:Lmalcom@post.harvard.edu" className="btn-twiter btn" style={{backgroundImage:"url('/src/images/icons/envelope.svg')"}}></a>
          </div>
        </div>
      </footer>
    );
  }
}
