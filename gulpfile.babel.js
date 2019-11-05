import gulp from 'gulp'
import babel from 'gulp-babel'
import pug from 'gulp-pug'
import browserSync from 'browser-sync'
import sass from 'gulp-sass'
import postcss from 'gulp-postcss'
import cssnano from 'cssnano'
import imagemin from 'gulp-imagemin'


const server = browserSync.create();

const postCSSPlugins = [
  cssnano({
    core: false,
    autoprefixer: {
      add: true
    }
  })
],
imageminOptions = {
  progressive: true,
  optimizationLevel: 3, // 0-7 low-high
  interlaced: true,
  svgoPlugins: [{ removeViewBox: false }]
}

gulp.task('es6', () => 
  gulp.src('./dev/js/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./public/js'))
)

gulp.task('sass', () =>
  gulp.src('./dev/scss/styles.scss')
    .pipe(sass())
    .pipe(postcss(postCSSPlugins))
    .pipe(gulp.dest('./public/css'))
    .pipe(server.stream({match: '**/*.css'}))
)

gulp.task('pug', () =>
  gulp.src('./dev/pug/pages/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./public'))
)

// Tarea independiente para archivos minificar imagenes
gulp.task('img', () => {
  gulp.src('./dev/img/raw/**/*.{png,jpg,jpeg,gif,svg}')
    .pipe(imagemin(imageminOptions))
    .pipe(gulp.dest('./public/img/'))
})


gulp.task('default', () => {
  server.init({
    server: {
      baseDir: './public'
    }
  })
  gulp.watch('./dev/js/*.js', ['es6', server.reload])
  gulp.watch('./dev/pug/**/*.pug', ['pug', server.reload])
  gulp.watch('./dev/scss/**/*.scss', ['sass'])
})
 
