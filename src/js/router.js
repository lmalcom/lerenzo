import React from 'react';
import page from 'page';

//Normal Pages
import App from './components/default/app';
import IndexPage from './components/default/IndexPage';
import ExamplesPage from './components/default/ExamplesPage';
import SkillsPage from './components/default/SkillsPage';
import AboutPage from './components/default/AboutPage';

//Game Pages
import IndexPageGame from './components/game/IndexPage';
import ExamplesPageGame from './components/game/ExamplesPage';
import SkillsPageGame from './components/game/SkillsPage';
import AboutPageGame from './components/default/AboutPage';

//Ember pages
//import EmberPage from './components/EmberPage';

//react things
let DOM = React.DOM,
	html = DOM.html,
	body = DOM.body,
	head = DOM.head,
	div = DOM.div,
	script = DOM.script,
	link = DOM.link,
	meta = DOM.meta,
	env = "normal";

// A utility function to safely escape JSON for embedding in a <script> tag
function safeStringify(obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}


//returns component for the page
function getComponent(pagename, subpage){
	let component;
	//let component = <404Page />;
	switch(pagename){
		case '/':
			component = (env === "normal")?
				<IndexPage/>:
				<IndexPageGame/>;
        	break;
        case 'skills':
            component = (env === "normal")?
            	<SkillsPage subpage={(subpage)? subpage: null} />:
            	<SkillsPageGame subpage={(subpage)? subpage: null} />;

            break;

        case 'examples':
            component = (env === "normal")?
            	<ExamplesPage subpage={(subpage)? subpage: null} />:
            	<ExamplesPageGame subpage={(subpage)? subpage: null} />;
            break;

        case 'about':
            component = (env === "normal")?
            	<AboutPage subpage={(subpage)? subpage: null} />:
            	<AboutPageGame subpage={(subpage)? subpage: null} />;
            break;

        case 'ember':
        	component = <EmberPage subpage={(subpage)? subpage: null} />;



    }
    return component;
}

function createMarkup(pagename, subpage){
    return React.renderToString(html(null,
    	head(null,
    		meta({charSet:"UTF-8"}),
    		meta({name:"viewport", content:"width=device-width, initial-scale=1"}),
    		link({href:"/src/css/main.css", type:'text/css', rel:"stylesheet"})
    	),
    	body(null,
    		//base app
	        div({id: 'app', dangerouslySetInnerHTML: {__html:
	            React.renderToString(<App pagename={pagename} subpage={subpage}></App>)
	        }}),

	        //if you want to send props as well
	        // script({dangerouslySetInnerHTML: {__html:
	        //     'var APP_PROPS = ' + safeStringify(props) + ';'
	        // }}),
    		
	        //needed to load es6 modules on the front end
	        // script({src: '/jspm_packages/system.js'}),
	        script({src: 'https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.18.4/system.js'}),

	        // script({src: '/config.js'}),
	        // script({src: '/jspm_packages/npm/babel-core@5.6.17/browser-polyfill.min.js'}),
	        script({src: 'https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.min.js'}),
	        
	        //ember page stuff
	        script({src: 'https://code.jquery.com/jquery-2.1.4.min.js'}),
	        // script({src: 'http://builds.emberjs.com/release/ember.js'}),
	        // script({src: 'http://builds.emberjs.com/release/ember-data.js'}),
	        // script({src: 'http://builds.emberjs.com/release/ember-template-compiler.js'}),

	        //use the first for the build, the second for dev
	        script({dangerouslySetInnerHTML: {__html:
	            "System.import('./build/js/main-bundle.min.js');"
	        }})
			// script({dangerouslySetInnerHTML: {__html:
	  //           "System.import('./src/js/main');"
	  //       }})
	    )
	))
}

page('/', function(req, res){
	console.log('routing index');
    React.render(
			<App id="app" env={env} pagename='/' subpage="">
			</App>,
			document.getElementById('app'));
});
page('/skills', function(req, res){
	console.log('routing skills');
    React.render(<App id="app" env={env} pagename='skills' subpage=""></App>, document.getElementById('app'));
});
page('/examples', function(req, res){
	console.log('routing examples');
    React.render(<App id="app" env={env} pagename='examples' subpage=""></App>, document.getElementById('app'));
});
page('/about', function(req, res){
	console.log('routing about');
    React.render(<App id="app" env={env} pagename='about' subpage=""></App>, document.getElementById('app'));
});
page('/ember', function(req, res){
	console.log('routing ember');
    React.render(<App id="app" env={env} pagename='ember' subpage=""></App>, document.getElementById('app'));
});
// page('/:pagename', function(req, res){
// 	let {pagename = '/'} = req.params;
// 	console.log('pagename...', pagename);
// 	//rerender
//     React.render(<App id="app" env={env} pagename={pagename} subpage=""></App>, document.getElementById('app'));
// })
// page('/:pagename/:subpage', function(req, next){
// 	let {pagename ='/', subpage} = req.params;
// 	console.log('pagename...', pagename, 'subpage...', subpage);
// 	//rerender
//     React.render(<App id="app" env={env} pagename={pagename} subpage={subpage}></App>, document.getElementById('app'));
// })

export default {
	getComponent: getComponent,
	createMarkup: createMarkup,
	route: page,
	env: env
}
