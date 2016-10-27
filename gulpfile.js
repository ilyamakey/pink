var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var prefix = require('gulp-autoprefixer');
var minCss = require('gulp-clean-css');
var svgSprite = require('gulp-svg-sprites');

gulp.task('default', function() {
    return gulp.src('components/main.less')
        .pipe(less())
        .pipe(prefix())
        .pipe(minCss())
        .pipe(gulp.dest('build/'))
});

gulp.task('watch', function(){
    gulp.watch('components/*.less', ['default']);
});

gulp.task('sprite', function () {
    return gulp.src('img/svg/*.svg')
        .pipe(svgSprite({mode: "defs"}))
        .pipe(gulp.dest("build/"));
});

