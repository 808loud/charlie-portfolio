'use strict';

var gulp =           require('gulp'),
    sequence =       require('run-sequence'), // won't be necessary if gulp -v > 4.0
    nunjucksRender = require('gulp-nunjucks-render'),
    sass =           require('gulp-sass'),
    //server =         require('gulp-server-livereload'),
    webserver =      require('gulp-webserver'),
    maps =           require('gulp-sourcemaps'),
    concat =         require('gulp-concat');

// tasks
gulp.task('nunjucks', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('app/pages/**/*.+(html|nunjucks|njk)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['app/templates']
    }))
  // output files in public folder
  .pipe(gulp.dest('public'))
});

gulp.task('sass', function () {
    return gulp.src('./app/scss/**/*.+(sass|scss)')
        .pipe(maps.init())
        .pipe(sass())
        .pipe(maps.write())
        .pipe(gulp.dest('./public/css'));
});

gulp.task('scripts', function() {
    return gulp.src('./app/js/**/*.js')
        .pipe(maps.init())
        .pipe(concat('scripts.js'))
        .pipe(maps.write())
        .pipe(gulp.dest('./public/js/'))
});

/*
gulp.task('webserver', function() {
    return gulp.src('./')
        .pipe(server({
            livereload: true,
            directoryListing: true,
            defaultFile: 'public/index.html',
            open: true,
            port: 5555
        }));
});
*/
gulp.task('webserver', function() {
  gulp.src('./')
      .pipe(webserver({
          livereload: true,
          directoryListing: true,
          open: 'public/index.html'
      }));
})

// watchers
gulp.task('nunjucks:watch', function () {
  gulp.watch(['./app/templates/**/*.+(html|nunjucks|njk)', './app/pages/**/*.+(html|nunjucks|njk)'], ['nunjucks']);
});

gulp.task('sass:watch', function () {
  gulp.watch('./app/scss/**/*.scss', ['sass']);
});

gulp.task('scripts:watch', function () {
  gulp.watch('./app/js/**/*.js', ['scripts']);
});

gulp.task('default', function(done) {
    sequence(
        'nunjucks',
        'sass',
        'scripts',
        'nunjucks:watch',
        'sass:watch',
        'scripts:watch',
        'webserver',
    done);
});
