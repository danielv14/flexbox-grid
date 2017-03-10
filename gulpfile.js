var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass');


// Setup localhost server with livereload
gulp.task('connect', function() {
  connect.server({
   livereload: true
 });
});

// Task to reload when changes are made to html files in root
gulp.task('html', function () {
  gulp.src('*.html')
    .pipe(connect.reload());
});

// Sass task
gulp.task('sass', function () {
  return gulp.src('./scss/grid.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'))
    .pipe(connect.reload());
});

// Watch task
gulp.task('watch', function () {
  gulp.watch(['*.html'], ['html']);
  gulp.watch(['./scss/*.scss'], ['sass'])
});

// Default
gulp.task('default', ['connect', 'watch']);
