/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';

export default class extends React.Component {

  render() {
    return (
      <div className="Header">
        <div className="Header-container">
            <nav className="navbar">
                <a href="/skills"  >Skills</a>
                <a href="/examples">Examples</a>
                <a href="/about"   >About</a>
                <a href="/contact" >Contact</a>
            </nav>
        </div>
      </div>
    );
  }
}