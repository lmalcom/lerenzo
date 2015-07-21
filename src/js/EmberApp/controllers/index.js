(function(){ 
	
	IndexController = Ember.Controller.extend({ 
		init: function(){ 
			console.log('the index controller just inited...'); 
		}
	}); 
	EmberApp.IndexController = IndexController; 
})() 