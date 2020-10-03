let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('scss/styles.scss')
    .pipe(sass()) // Using the gulp-sass
    .pipe(gulp.dest('./css'))
})