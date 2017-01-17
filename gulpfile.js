var gulp = require('gulp');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');


var sassDir = 'template/sass/main.sass';

var targetCSSDir = 'template/css';


gulp.task('sass', function () {
    return gulp.src(sassDir)
	.pipe(sass({outputStyle: 'compressed'}).on('error', gutil.log))
   	.pipe(autoprefix({
   		 browsers: ['last 10 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6'],
   		 cascade: true
   		}))
   	//.pipe(minifyCSS())
   	.pipe(rename('style.min.css'))
    .pipe(gulp.dest(targetCSSDir))
    .pipe(notify('CSS minified'));
});
     


gulp.task('watch', function () {
    gulp.watch(sassDir , ['sass']);
});


gulp.task('default', ['watch']);