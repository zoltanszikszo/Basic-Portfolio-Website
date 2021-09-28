let gulp =  require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function(){
    return gulp.src('scss/styles.scss')
    .pipe(sass()) // Using the gulp-sass
    .pipe(gulp.dest('./css'))
})