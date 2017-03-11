var gulp = require('gulp');
var less = require('gulp-less');
var sourceMaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task('less', function() {
  return gulp.src('./less/application.less')
    .pipe(sourceMaps.init())
    .pipe(less())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(sourceMaps.write())
    .pipe(gulp.dest('./public'));
});

gulp.task('watch', ['less'], function() {
  return watch('less/**/*.less', function () {
    gulp.src('./less/application.less')
      .pipe(sourceMaps.init())
      .pipe(less())
      .pipe(postcss([ autoprefixer() ]))
      .pipe(sourceMaps.write())
      .pipe(gulp.dest('./public'));
  });
});