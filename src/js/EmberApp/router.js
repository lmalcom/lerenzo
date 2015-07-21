(function(){
var app = EmberApp, 
	images=[ 
		'http://a5.img.talkingpointsmemo.com/image/upload/c_fill,fl_keep_iptc,g_faces,h_365,w_652/paula-deen-diabetes.jpg', 
		'http://buzzlie.com/wp-content/uploads/2014/06/Paula+Deen1.jpg'
	]; 



	//start router
	app.Router.map(function(){
        this.route('about'); 
    })



    //routes
    app.AboutRoute = Ember.Route.extend({
		init: function(){
			console.log('oh heeeeey from about....'); 
		}
	})

    //index route
	app.IndexRoute = Ember.Route.extend({
		init: function(){
			console.log('index route starting up....'); 
		}, 
		setupController: function(controller){
			controller.set('model', {images: images})
		}
	})
	 
})()