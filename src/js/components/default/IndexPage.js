/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import FitterHappierText from 'react-fitter-happier-text';

//@withStyles(styles)
class IndexPage extends React.Component {

  // static contextTypes = {
  //   onSetTitle: PropTypes.func.isRequired
  // }

  render() {
    let title = 'LTM';
    //this.context.onSetTitle(title);
    //

    return (
      <div className="IndexPage page">
        <div className="IndexPage-default">
            <div className="IndexPage-default-body">
                <div className="textBox">
                    <div className="catchphrase">
                        <h2 id="catchphrase-1">I <span className="heart-txt"></span> tech</h2>
                    </div>
                    <div className="catchphrase">
                        <h2 id="catchphrase-2">You <span className="heart-txt"></span> tech</h2>
                    </div>
                    <div className="catchphrase">
                        <h2 id="catchphrase-3">Lets <span className="heart-txt"></span> tech together</h2>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default IndexPage;
