/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
//import styles from '/less/InteractivePage.less';
//import withStyles from '../../decorators/withStyles';

//@withStyles(styles)
class InteractivePage {

  // static contextTypes = {
  //   onSetTitle: PropTypes.func.isRequired
  // };

  render() {
    let title = 'Contact Us';
    //this.context.onSetTitle(title);
    return (
      <div className="InteractivePage">
        <div className="InteractivePage-container">
          <h1>{title}</h1>
          <p>...</p>
        </div>
      </div>
    );
  }

}

export default InteractivePage;
