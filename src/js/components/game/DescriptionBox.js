/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
//import styles from '/less/DescriptionBox.less';
//import withStyles from '../../decorators/withStyles';
//import TesselateContainer from './TesselateContainer';
//import Header from './Header'; 
//import '../../public/lib/processing.min';
//import THREE from '../../public/lib/three.min';
//console.log('three...', THREE); 

//@withStyles(styles)
class DescriptionBox {

  // static contextTypes = {
  //   onSetTitle: PropTypes.func.isRequired
  // };

  render() {
    let title = 'LTM';
    return (
      
      <div className="DescriptionBox">
        <div className="DescriptionBox-container">
            <div className="Header-Container">
              <Header key="head" ></Header>
            </div>
        </div>
      </div>
    );
  }
}

export default DescriptionBox;
