/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import SkillInfo from './SkillInfo';
import characters from '../../skills';
let worldjson, topojson;

if(typeof window !== 'undefined'&& window.location.pathname === '/skills'){ 
    System.import('d3');
    System.import('npm:topojson@1.6.19').then(function(module){
        topojson = module;
    });
    System.import('./src/topojson/world-110m.json!').then(function(json){
        worldjson = json;
        console.log('worldjson...', worldjson);
    });
}

class ResponsivePage extends React.Component {

    constructor(props) {
        super(props);
        let page = this;
        this.state = {currentSkill: characters[0].img};

    }
    makeWorld(){
        var width = 960,
            height = 960;

        var projection = d3.geo.mercator()
            .scale((width + 1) / 2 / Math.PI)
            .translate([width / 2, height / 2])
            .precision(.1);

        var path = d3.geo.path()
            .projection(projection);

        var graticule = d3.geo.graticule();

        var svg = d3.select(document.getElementById('d3-container')).append("svg")
            .attr("width", width)
            .attr("height", height);

        svg.append("path")
            .datum(graticule)
            .attr("class", "graticule")
            .attr("d", path);

        if(worldjson){

          svg.insert("path", ".graticule")
              .datum(topojson.feature(worldjson, worldjson.objects.land))
              .attr("class", "land")
              .attr("d", path);

          svg.insert("path", ".graticule")
              .datum(topojson.mesh(worldjson, worldjson.objects.countries, function(a, b) { return a !== b; }))
              .attr("class", "boundary")
              .attr("d", path);
        }
        console.log('topojson.feature', topojson.feature(worldjson, worldjson.objects));
        return svg[0];


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

        //add d3 world once its ready
        if (typeof window !== 'undefined' && typeof d3 !== 'undefined' && typeof topojson !== 'undefined') this.makeWorld();
    return (
      <div className="ResponsivePage" special="whaaaa?">
        <h1 id="playerSelect">Skill Select!</h1>
        <div id="d3-container" />
        <div className="ResponsivePage-container">
          <div id="skillWrapper">
              {characters.map(function(skill, index){
                let {
                        name = 'node',
                        img = 'node'
                    } = skill,
                    bgtxt = "url('/src/images/logo-" + img + ".svg')";
                return <a name={name} id={name} key={index} index={index} data-index={index} className="skill" href={'/responsive#' + name} onClick={clickHandler} style={{backgroundImage: bgtxt}}><img alt={img}/></a>
              })}
          </div>
        </div>
        <SkillInfo name={name} txt={txt} img={img} examples={examples}/>
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

export default ResponsivePage;
