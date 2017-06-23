var gulp = require('gulp'),
	watch = require('gulp-watch'),
	inline = require('gulp-inline'),
	uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
	batch = require('gulp-batch'),
    less = require('gulp-less');
 
gulp.task('inline',function(){
	gulp.src('./inline-resource.php')
  		.pipe(inline({
	    base: './',
	    js: uglify,
	    css: [minifyCss, autoprefixer({ browsers:['last 2 versions'] })],
	    disabledTypes: ['svg', 'img','css'],
	  }))
	  .pipe(gulp.dest('./dist/'));
});

gulp.task('lesstocss', function () {
    gulp.src('./css/*.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('./css')); //将会在src/css下生成index.css
});


gulp.task('watch', function () {
	watch('./css/*.less', batch(function (events, done) {
        gulp.start('lesstocss', done);
    }));
    watch('./js/*.js', batch(function (events, done) {
        gulp.start('inline', done);
    }));
});
 
gulp.task('default',['watch']); //定义默认任务 elseTask为其他任务，该示例没有定义elseTask任务
