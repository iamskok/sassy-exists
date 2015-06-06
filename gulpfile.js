var gulp = require('gulp');
var	sass = require('gulp-ruby-sass');
var sassdoc = require('sassdoc');
var deploy = require('gulp-gh-pages');
var clean = require('gulp-clean');

var SASSDOC_OPTIONS = {
	dest: './sassdoc/',
	verbose: true,
    basePath: 'https://github.com/SassySuit/sassy-validation',
    googleAnalytics: 'UA-63553761-1',
};

gulp.task('clean', function () {
    return gulp.src('./sassdoc/', {read: false})
        .pipe(clean());
});

gulp.task('sassdoc', ['clean'], function() {
	return gulp.src('./stylesheets/**/*.scss')
		.pipe(sassdoc(SASSDOC_OPTIONS));
});

gulp.task('default', ['sassdoc'], function() {
	return sass('./stylesheets/_sassy-exists.scss', {
    		style: 'expanded',
    		precision: 10,
        	lineNumbers : true
    	})
    	.pipe(gulp.dest('./build'))
});

gulp.task('watch', function() {
	gulp.watch('**/*.scss', ['default']);
});

gulp.task('deploy', function() {
  return gulp.src('./sassdoc/**/*')
    .pipe(deploy());
});

var gulp = require('gulp');
var plugins = {
  clean: require('gulp-clean'),
};
