/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
//import styles from '/less/SkillInfo.less';
//import withStyles from '../../decorators/withStyles';
import DescriptionBox from './DescriptionBox';

//@withStyles(styles)
class SkillInfo {

  // static contextTypes = {

  // };

  render() {
    let {
      name = 'node',
      img = 'node',
      txt = '',
      examples = []
    } = this.props;
    return (
      <div className="SkillInfo-default">
        <div className="SkillInfo-container">
          <div className="skillImg" style={{backgroundImage: "url('/src/images/logo-" + img + ".svg')"}}>
            <img alt="skill" />
          </div>

          <div className="skillText">
            <h4 className="header">{name}</h4>
          </div>
          <div className="skillTextExample">
            <h4 className="skillTextHeader">Examples</h4>
            <p>[Examples coming soon!]</p>
            <p className="skillTextExampleBody">{examples.map((example)=>{
                <DescriptionBox />
              })}</p>
          </div>

        </div>
      </div>
    );
  }

}

export default SkillInfo;
