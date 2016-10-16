var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var prefix = require('gulp-autoprefixer');
var minCss = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');

gulp.task('default', function() {
    return gulp.src('components/main.less')
        .pipe(less())
        .pipe(prefix())
        .pipe(minCss())
        .pipe(gulp.dest('build/'))
});