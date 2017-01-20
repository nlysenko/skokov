var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglifyJS = require('gulp-uglifyjs'),
    cleanCSS = require('gulp-clean-css');
var jsSrc = [
    'node_modules/angular/angular.min.js',
    'node_modules/angular-animate/angular-animate.min.js',
    'src/client/javascripts/app.js',
    'src/client/javascripts/controllers/projects_list_controller.js'
];

gulp.task('build:css', function() {
    return gulp.src('src/client/stylesheets/style.sass')
        .pipe(sass())
        .pipe(gulp.dest('static/stylesheets/'));
});

gulp.task('clean:css', function () {
    return gulp.src('src/client/stylesheets/style.sass')
        .pipe(sass())
        .pipe(gulp.dest('static/stylesheets/'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('static/stylesheets/'));
});

gulp.task('build:js', function() {
    return gulp.src(jsSrc)
        .pipe(concat('app.js'))
        .pipe(gulp.dest('static/javascripts/'));
});

gulp.task('uglify:js', function() {
    return gulp.src(jsSrc)
        .pipe(concat('app.js'))
        .pipe(uglifyJS())
        .pipe(gulp.dest('static/javascripts/'));
});

gulp.task('watch:css', function() {
    gulp.watch('src/client/stylesheets/*.sass', ['build:css']);
});

gulp.task('watch:js', function() {
    gulp.watch('src/client/**/*.js', ['build:js']);
});
