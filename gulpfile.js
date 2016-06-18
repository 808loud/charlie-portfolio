'use strict';

var gulp =         require('gulp');
var gutil =        require('gulp-util');
var data =         require('gulp-data');
var concat =       require('gulp-concat');
var nunjucks =     require('gulp-nunjucks-html');
var sass =         require('gulp-sass');
var sourcemaps =   require('gulp-sourcemaps');
var notify =       require('gulp-notify');
var browserSync =  require('browser-sync').create();

var reload = browserSync.reload;

// https://github.com/mikaelbr/gulp-notify/issues/81
function catchError (error) {

    var lineNumber = (error.lineNumber) ? 'LINE ' + error.lineNumber + ' -- ' : '';

    notify({
        title: error.plugin + ' error',
        subtitle: error.lineNumber,
        message: lineNumber,
        wait: true
    }).write(error);

    // Pretty error reporting
    var report = '';
    var chalk = gutil.colors.white.bgRed;

    report += chalk('TASK:') + ' [' + error.plugin + ']\n';
    report += chalk('PROB:') + ' ' + error.message + '\n';
    if (error.lineNumber) { report += chalk('LINE:') + ' ' + error.lineNumber + '\n'; }
    if (error.fileName)   { report += chalk('FILE:') + ' ' + error.fileName + '\n'; }
    console.error(report);

    this.emit('end');
}

gulp.task('serve', ['move', 'nunjucks', 'sass', 'scripts'], function() {
    browserSync.init({
        server: {
            baseDir: "./public"
            // index: "index.html"
        },
        port: 5555
    });

    gulp.watch('./app/assets/**/*', ['move']);
    gulp.watch(['./app/nunjucks/**/*.+(html|nunjucks|njk)',
                './app/nunjucks/data.json'],
                ['nunjucks']);
    gulp.watch('./app/scss/**/*.scss', ['sass']);
    gulp.watch('./app/js/**/*.js', ['scripts']);
    gulp.watch('./public/**/*').on('change', reload);
});

// tasks
gulp.task('move', function() {
  // grab contents of app/assets
  return gulp.src('./app/assets/**/*')
    // output files to the public folder
    .pipe(gulp.dest('./public'));
});

gulp.task('nunjucks', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('./app/nunjucks/pages/**/*.+(html|nunjucks|njk)')
    // Adding data to Nunjucks
    .pipe(data(function(file) {
      var json = './app/nunjucks/data.json';
      delete require.cache[require.resolve(json)];
      return require(json);
    }))
    // Renders template with nunjucks
    .pipe(nunjucks({
        searchPaths: ['./app/nunjucks'],
        autoescape: false,
        ext: ['.html']
      }))
    .on('error', catchError)
    // output files in public folder
    .pipe(gulp.dest('./public'))
});

gulp.task('sass', function () {
  return gulp.src('./app/scss/**/*.+(sass|scss)')
    .pipe(sourcemaps.init())
    .pipe(sass({
        errLogToConsole: true
    }))
    .on('error', catchError)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/css'));
});

gulp.task('scripts', function() {
  return gulp.src('./app/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('scripts.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/js/'))
});

gulp.task('default', ['serve']);
