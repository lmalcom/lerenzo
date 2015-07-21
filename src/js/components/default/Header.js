/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';

export default class extends React.Component {

  render() {
    return (
      <div className="Header">
        <div className="Header-container">
            <a className="logo" href="/"><span className="yellow-letters">L</span>eRen<span className="yellow-letters">zo</span> Malcom</a>
            <nav className="Header-nav">
                <a href="/skills"   className="btn">Skills</a>
                <a href="/examples" className="btn">Examples</a>
                <a href="/about"    className="btn">About</a>
                <a href="mailto:Lmalcom@post.harvard.edu"  className="btn">Contact</a>
            </nav>
        </div>
      </div>
    );
  }
}
