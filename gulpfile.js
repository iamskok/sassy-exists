var gulp 			= require('gulp');
var	sass 			= require('gulp-ruby-sass');


gulp.task('default', function() {
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