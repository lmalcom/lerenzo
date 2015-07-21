'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var rimraf = require('rimraf');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');
var karma = require('karma').server;
var webpack = require('webpack'); 
var combiner = require('stream-combiner2'); 



// DEFAULT
//================================================

/*
* 1. Build files from '/src'
* 2. start watcher 
* 3. serve page 
* */
gulp.task('default', ['serve']);


// Build
//================================================
gulp.task('delete-build', function() {
  rimraf('./build', function(err) {
    plugins.util.log(err);
  });
});

//build (no server)
gulp.task('build', ['delete-build','uglify', 'css']);



// Watch
//================================================
gulp.task('watch', ['build'], function () {

  plugins.livereload.listen();

  // gulp.watch([
  //   'src/css/**/*.css',
  //   'src/js/**/*.js'
  // ]).on('change', plugins.livereload.changed);

  gulp.watch(['src/less/**/*.less'], ['css']); 
  gulp.watch(['src/js/**/*.js', '!src/js/main-bundle.js'], ['uglify']);
});


// Serve
//================================================
gulp.task('serve', ['watch'], function () {
  require('./server'); 
  require('opn')('http://localhost:3000');
});

//================================================







// JSX/ES6
//================================================
// Builds JS and bundles it
//
// 1. Webpack Bundling 'main-bundle.js'
// 2. uglify all files to 'build/js'
//================================================
//
gulp.task("js", function(callback) {
    // modify some webpack config options
    var myConfig = Object.create(require('./webpack.config'));
    myConfig.plugins = myConfig.plugins.concat(
        new webpack.DefinePlugin({
        "process.env": {
            // This has effect on the react lib size
            "NODE_ENV": JSON.stringify("production")
        }
    }),
    new webpack.optimize.DedupePlugin()
    //new webpack.optimize.UglifyJsPlugin()
  );

  // run webpack
  webpack(myConfig, function(err, stats) {
    if(err) throw new plugins.util.PluginError("webpack:buildjs", err);
    plugins.util.log("[webpack:build]", stats.toString({
      colors: true
    }));
    callback();
  });
});

// Uglify all js files 
gulp.task('uglify', ['js'], function() {

    var combined = combiner.obj([
        gulp.src('./src/js/**/*.js'),
        //plugins.changed('./build/js'),
        plugins.plumber(),
        plugins.babel(),
        plugins.sourcemaps.init({loadMaps: true}),
        plugins.uglify({mangle:true, compress: true, wrap: true}),
        plugins.sourcemaps.write('.'),
        plugins.rename(function(path){
            // if (path.extname === '.map'){
            //     //get rid of .js for map files
            //     path.basename = path.basename.substring(0, path.basename.length - 3);
            // }
            //add .min to minified files 
            path.basename = path.basename + '.min'; 
        }),
        gulp.dest('./build/js'),
        plugins.livereload()
      ]);

      // any errors in the above streams will get caught
      // by this listener, instead of being thrown:
      combined.on('error', console.error.bind(console));
});
//================================================







// LESS/CSS
//================================================
// Builds CSS and bundles it
//
// 1. Less builds './src/css' from './src/less'
// 2. Concat and create './src/css/main.css'
// 2. Minify CSS for 'build/css/main.min.css'
//================================================
//

gulp.task('less', function () { 
  return gulp.src('./src/less/*.less')
    .pipe(plugins.changed('./src/css'))
    .pipe(plugins.plumber())
    .pipe(plugins.less({
      style: 'expanded',
      precision: 10
    }))
    .pipe(plugins.autoprefixer({browsers: ['last 1 version']}))
    .pipe(gulp.dest('./src/css'))
    .on('error', plugins.util.log);
});

// CSS
gulp.task('css', ['less'],function() {
  return gulp.src(['./src/css/*.css', '!./src/css/main.css'])
    .pipe(plugins.changed('./build/css'))
    .pipe(plugins.plumber())
    .pipe(plugins.concat('main.css'))
    .pipe(gulp.dest('./src/css/'))
    .pipe(plugins.csso())
    .pipe(plugins.rename('main.min.css'))
    .pipe(gulp.dest('./build/css'))
    .pipe(plugins.livereload())
    .on('error', plugins.util.log);
});
//================================================







// TESTING
//================================================
// Test source files
//
// 1. 
//================================================
//
gulp.task('test', function(done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js'
  }, done);
});