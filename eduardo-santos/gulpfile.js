var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var jshint = require('gulp-jshint');
var clean = require('gulp-clean');
var concat = require('gulp-concat');

var appFiles = {
    htmlfiles:[
        'index.html', 
        './app/views/*.html',
        './app/**/*.html'
    ],
    cssFiles:[
        './app/assets/*.css'
    ],
    jsFiles: [
        './app/*.js',
        './app/config/*.js',
        './app/controllers/*.js',
        './app/services/*.js',
        './app/directives/**/**/*.js'       

    ]
};

gulp.task('clean', function(){
    return gulp.src('src/*')
    .pipe(clean());
});

gulp.task('jshint', function(){
    return gulp.src(appFiles.jsFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('js', function(){
    return gulp.src(appFiles.jsFiles)
    .pipe(concat('index.js'))
    .pipe(gulp.dest('src/'));
});

gulp.task('reload', function(done){
    browserSync.reload();
    done();
});

gulp.task('serve', ['js'], function(){
  browserSync.init({
    server: {
        baseDir: "./"
    }
  });

   gulp.watch(appFiles.htmlfiles, ['reload']);
   gulp.watch(appFiles.cssFiles, ['reload']);
   gulp.watch(appFiles.jsFiles, ['js', 'reload']);

});

gulp.task('default',['jshint', 'serve']);