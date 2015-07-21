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
        <div className="SkillInfo-container-default">
          <div className="skillImg" style={{backgroundImage: "url('/src/images/logo-" + img + ".svg')"}}>
            <img alt="skill" />
          </div>
          
          <div className="skillText-default">
            <h4 className="header">{name}</h4>
            <p className="skillTextBody-default"></p>
          </div>
          <div className="skillTextExample-default">
            <h4 className="skillTextHeader-default">Examples</h4>
            <p className="skillTextExampleBody-default">{examples.map((example)=>{
                <DescriptionBox />
              })}</p>
          </div>
          
        </div>
      </div>
    );
  }

}

export default SkillInfo;
