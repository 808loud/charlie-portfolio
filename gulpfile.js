'use strict';

var gulp =          require('gulp'),
    sequence =      require('run-sequence'), // won't be necessary if gulp -v > 4.0
    sass =          require('gulp-sass'),
    server =        require('gulp-server-livereload'),
    maps =          require('gulp-sourcemaps'),
    concat =        require('gulp-concat');

// tasks
gulp.task('sass', function () {
    return gulp.src('./scss/main.scss')
        .pipe(maps.init())
        .pipe(sass())
        .pipe(maps.write())
        .pipe(gulp.dest('./css'));
});

var appScripts = [
    './js/main.js',
];
gulp.task('scripts', function() {
    return gulp.src(appScripts)
        .pipe(maps.init())
        .pipe(concat('scripts.js'))
        .pipe(maps.write())
        .pipe(gulp.dest('./js/'))
});

gulp.task('webserver', function() {
    return gulp.src('./')
        .pipe(server({
            livereload: true,
            directoryListing: true,
            defaultFile: 'index.html',
            open: true,
            port: 5555
        }));
});

// watchers
gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('scripts:watch', function () {
  gulp.watch('./js/**/*.js', ['scripts']);
});

gulp.task('default', function(done) {
    sequence(
        'sass',
        'scripts',
        'sass:watch',
        'scripts:watch',
        'webserver',
    done);
});
