/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
//import styles from '/less/TesselateContainer.less';
//import withStyles from '../../decorators/withStyles';
//import Link from '../../utils/Link';

//@withStyles(styles)
class TesselateContainer {

  // static contextTypes = {
  //   onSetTitle: PropTypes.func.isRequired
  // };

  render() {
    // let title = 'Contact Us';
    // this.context.onSetTitle(title);
    let { 
            header = 'Tess', 
            bgimg = '/public/tile.png', 
            link = '/', 
            txt = 'lipsumf weoifjweofiwjfiojw'
        } = this.props, 
        bgtxt = "url('" + bgimg + "'')";

    return (
        <a className="TesselateContainer" href={link} style={{backgroundImage: bgtxt}}>
            <h3 className="TessalateHeader">{header}</h3>
        </a>
    );
  }

}

export default TesselateContainer;
