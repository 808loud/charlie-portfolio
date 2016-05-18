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
<<<<<<< HEAD
        subtitle: error.lineNumber,
        message: lineNumber,
        wait: true
=======
        message: lineNumber
>>>>>>> gulp
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

gulp.task('serve', ['nunjucks', 'sass', 'scripts'], function() { 
    browserSync.init({ 
        server: {
            baseDir: "./public",
            index: "index.html"
        },
        port: 5555
    }); 

    gulp.watch(['./app/nunjucks/templates/**/*.+(html|nunjucks|njk)', 
                './app/nunjucks/pages/**/*.+(html|nunjucks|njk)'], 
                ['nunjucks']); 
    gulp.watch('./app/scss/**/*.scss', ['sass']); 
    gulp.watch('./app/js/**/*.js', ['scripts']);
    gulp.watch("./public/**/*.*").on('change', reload); 
});

// tasks
gulp.task('nunjucks', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('./app/nunjucks/pages/**/*.+(html|nunjucks|njk)')
  // Renders template with nunjucks
  .pipe(nunjucks({
      searchPaths: ['.app/nunjucks/templates'],
      autoescape: ['true'],
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