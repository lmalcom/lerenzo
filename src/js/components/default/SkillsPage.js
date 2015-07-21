/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import SkillInfo from './SkillInfo';
import characters from '../../skills';
class SkillsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {currentSkill: characters[0].img};
    }
  render() {
    let title = 'Responsive HTML5',
        clickHandler = this.changeSkill.bind(this),
        //get info of currently selected skill
        {currentSkill = 'node'} = this.state,
        //find that in the array
        {
            name = 'node',
            txt = 'txt',
            img = 'node',
            examples = []
        } = characters.find(skill=> skill.img === currentSkill);

    return (
      <div className="SkillsPage-default page">
        <div className="SkillsPage-default-container">
          <h1 id="playerSelect">Skills</h1>
          <SkillInfo name={name} txt={txt} img={img} examples={examples}/>
          <div id="skillWrapper">
              {characters.map(function(skill, index){
                let {
                        name = 'node',
                        img = 'node'
                    } = skill,
                    bgtxt = "url('/src/images/logo-" + img + ".svg')";
                return <a name={name} id={name} key={index} index={index} data-index={index} className="skill" href={'/skills#' + name} onClick={clickHandler} style={{backgroundImage: bgtxt}}><img alt={img}/></a>
              })}
          </div>
        </div>
      </div>
    );
  }

  //change main skill for side panel
  changeSkill(ev){
    let {index = 0} = ev.target.dataset;
    this.setState({
        currentSkill: characters[index].img
    })
  }

}

export default SkillsPage;
