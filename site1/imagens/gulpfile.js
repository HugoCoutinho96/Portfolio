const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('default', function(){
 gulp.src('**.*')
 .pipe(imagemin([
	imagemin.gifsicle({interlaced: true}),
	imagemin.jpegtran({progressive: true}),
	imagemin.optipng({optimizationLevel: 5}),
	imagemin.svgo({
		plugins: [
			{removeViewBox: true},
			{cleanupIDs: false}
		]
	})
  ])
)
 .pipe(gulp.dest('build'));
});