require('babel/register'); 

var http = require('http'),
    browserify = require('browserify'),
    //literalify = require('literalify'),

    React = require('react'),
    express = require('express'),
    expressApp = express(),
    //server = expressApp.listen(80),
    server = expressApp.listen(80),
    cors = require('cors')(), 
    router = require('./src/js/router'); 

//spawn other server???
var spawn = require('child_process').exec,
    ls    = spawn('node ../nella/server.js'),
    ls2    = spawn('node ../requirejs/server.js');

console.log('server is up!'); 

// expressApp.get('/skills', function(req, res){ 
//     res.send(router.createMarkup('responsive')); 
// }); 

// expressApp.get('/skills/:subpage', function(req, res){
//     res.send(router.createMarkup('skills', req.params.subpage)); 
// }); 

expressApp.get('/', function(req, res){
    res.send(router.createMarkup('/')); 
}); 


// expressApp.get('/ember', function(req, res){
//     res.send(router.createMarkup('ember')); 
// }); 

//Pages for routing: index, skills, examples, contact
expressApp.get('/:pagename', function(req, res, next){
    var pagename = req.params.pagename || '/'; 
    if(['index', 'skills', 'examples', 'contact', 'about'].join("").includes(pagename)){
        res.send(router.createMarkup(pagename)); 
    }else{
        next(); 
    }
}); 
// expressApp.get('/:pagename/:subpage', function(req, res){
//     var pagename = req.params.pagename || '/', 
//         subpage = req.params.subpage || ''; 
//     res.send(router.createMarkup(pagename, subpage)); 
// }); 
expressApp.get('/nella', function(req, res, next){
    res.redirect('http://localhost:4000/#email');
})

expressApp.get('/blocks/:pagename', function(req, res, next){
    var pagename = req.params.pagename || 'leap4'; 
    res.redirect('http://localhost:8801/' + pagename);
})

expressApp.use(express.static(__dirname)); 