import React from 'react'; 
import Router from '../../router'; 

// This is the top-level component responsible for rendering the correct
// component (PostList/PostView) for the given route as well as handling any
// client-side routing needs (via window.history and window.onpopstate)

export default React.createClass({

  // The props will be server-side rendered and passed in, so they'll be used
  // for the initial page load and render
  getInitialState: function() {
    return this.props
  },

  // componentDidMount: function() {
  //   window.onpopstate = this.updateUrl
  // },

  render: function() {
    console.log('this is the app....', this); 
    let {pagename = '/', subpage = ''} 
          = this.props, 
        component = Router.getComponent(pagename, subpage); 
    return <div className="App-container-default">{component}</div>; 
  }
})
