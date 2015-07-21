(function(){
	var PaginationBarComponent = EmberApp.PaginationBarComponent = Ember.Component.extend({
		init:function(){
			console.log('oh hey from the pagination component'); 
		}, 
		actions:{ 
			test: function(){ 
				console.log('testing 123'); 
			} 
		} 
	}); 
	var MainBodyComponent = EmberApp.PaginationBarComponent = Ember.Component.extend({
		init:function(){
			console.log('oh hey from the main-body component'); 
		}, 
		actions:{ 
			test: function(){ 
				console.log('testing 123'); 
			} 
		} 
	}) 
	var SideBarComponent = EmberApp.SideBarComponent = Ember.Component.extend({
		init:function(){
			console.log('oh hey from the main-body component'); 
		}, 
		actions:{ 
			test: function(){ 
				console.log('testing 123'); 
			} 
		} 
	}) 
	var ProductListComponent = EmberApp.ProductListComponent = Ember.Component.extend({
		init:function(){
			console.log('oh hey from the main-body component'); 
		}, 
		actions:{ 
			test: function(){ 
				console.log('testing 123'); 
			} 
		} 
	}) 
})()