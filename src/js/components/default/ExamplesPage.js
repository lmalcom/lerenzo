/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import Text from 'react-fitter-happier-text';
class ExamplesPage {
  render() {
    return (
      <div className="ExamplesPage page">
        <div className="ExamplesPage-container">
          <h1>Examples</h1>
          <div className="example">
            <div className="exampleHeader">
              <h2>{`Animake It!`}</h2>
              <p className="subheader">{`Dec 2013 - July 2014`}</p>
            </div>
            <iframe width="50%" height="360" src="https://www.youtube.com/embed/tL06lRCVoi4"  allowfullscreen="1"></iframe>
            <iframe width="50%" height="360" src="https://www.youtube.com/embed/WUAEqdsylCw"  allowfullscreen="1"></iframe>
            <p>
              {`Originally named "LivePainter", "Animake It!" was created to be a live animation engine for the web so that
                people could create their own shows, music, educational classes, or presentations
                and others would be able to follow along in real time.`}
            </p>
            <p>{`I have a passion for live-streaming data and am always looking for more ways to improve
                the web with small features that will make the page seem more alive.`}
            </p>
          </div>
          <div className="example">
            <div className="exampleHeader">
              <h2>{`Blocks JS`}</h2>
              <p className="subheader">{`Apr 2013 - Dec 2014`}</p>
            </div>
            <p>
              {`This was a component framework that I worked on extensively, which became the engine for
                "Animake It!". This system could create components and websites in real time, based on JSON
                data to update the state of the page. Blocks could be HTML, 3d (ThreeJS), 2d (Canvas-based), or non-visual entirely (sound and music blocks).`}
            </p>
            <p>{`I stopped actively working on this after ReactJS came out as they had a lot of similar goals and
                methodology. This library was not released, but I'm working on a remake and hoping that this turns out
                better than React! Fingers crossed. `}
            </p>
          </div>
          <div className="example">
            <h2>Lightly Structured Data</h2>
            <img src="/src/images/lsd2.png"/>
            <img src="/src/images/lsd1.png"/>
              <p>Worked on revamping the <a target="_blank" href="http://electiontimeline.com/l/n2FF3svcvI">front end component system</a> to be more reusable. This was goingto be rolled out on a few projects. Here I got the opportunity
                to work on some interesting Data Viz project and fun stuff in processing.`
              }</p>

          </div>
        </div>
      </div>
    );
  }

}

export default ExamplesPage;
