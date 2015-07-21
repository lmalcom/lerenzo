/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
//import styles from '/less/IndexPage.less';
//import withStyles from '../../decorators/withStyles';
import TesselateContainer from './TesselateContainer';
import Header from './Header'; 
//import '../../public/lib/processing.min';
//import THREE from '../../public/lib/three.min';
//console.log('three...', THREE); 

//@withStyles(styles)
class IndexPage {

  // static contextTypes = {
  //   onSetTitle: PropTypes.func.isRequired
  // }

  render() {
    let title = 'LTM';
    //this.context.onSetTitle(title);
    return (
      
      <div className="IndexPage">
        <div className="IndexPage-container">
            <Header key="head" ></Header>
        </div>
      </div>
    );
  }
}

export default IndexPage;
