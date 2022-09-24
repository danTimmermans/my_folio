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