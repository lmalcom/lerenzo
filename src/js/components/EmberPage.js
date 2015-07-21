/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react'; 
import application from '../EmberApp/templates/application.hbs'; 
import index from '../EmberApp/templates/index.hbs'; 
//import index from '../EmberApp/templates/index.hbs'; 
//import index from '../EmberApp/templates/index.hbs'; 
//only import Ember if we are on the front end....


//@withStyles(styles)
class EmberPage extends React.Component {

  // static contextTypes = {
  //   onSetTitle: PropTypes.func.isRequired
  // }
  startEmber (){
    if(typeof window !== 'undefined'){
        let app = window.EmberApp = Ember.Application.create({
            LOG_TRANSITIONS:true, 
            rootElement: '#Ember_App'
        }); 
        //set root URL
        app.Router.reopen({
            rootURL: '/src/js/EmberApp/'
        }); 
        app.Router.map(function(){
            this.route('/about', {path:'/about'})
        })
    }
  }
  render() {
    let title = 'Ember Page';
    this.startEmber(); 
    //this.context.onSetTitle(title);
    return (
      <div className="EmberPage">
        <div className="EmberPage-container" id="Ember_App" />
        <div dangerouslySetInnerHTML={{__html: (application() + index())}} />
      </div>
    );
  }
}

export default EmberPage;
