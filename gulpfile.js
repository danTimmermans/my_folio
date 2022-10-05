var gulp = require('gulp');
var $ = require('gulp-load-plugins') ();

gulp.task('svg', function(){
    return gulp.src('./img/*.svg')
    .pipe($.plumber())
    .pipe($.svgSprite({
        mode: {
            symbol: {
               dest: './', 
               sprite: 'sprite.svg' 

            }
        }
    }))
    .pipe(gulp.dest('./'));
})

var rename = require("gulp-rename");
// npm i gulp-rename
var uglify = require('gulp-uglify');
// npm i gulp-uglify
 
gulp.task('compress', function() {
    return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(rename(function(path){
        path.basename += ".min";
    }))
    .pipe(gulp.dest('min.js'));
});