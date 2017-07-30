const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const webpack = require('webpack-stream');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnext = require('cssnext');
const precss = require('precss');
const cssnano = require('cssnano');
const imagemin = require('gulp-imagemin');

const rootDir = './';
const appDir = rootDir + 'app/';
const stylesDir = appDir + 'src/scss/';

gulp.task('browser-sync', function() {
  browserSync.init({
    files: [
      "/js/**/*.js",
      "**/*.php"
    ],
    proxy: "dev/folio/v6/wordpress"
  });
});

gulp.task('webpack', function() {
  return gulp.src(appDir + 'src/js/app.js')
    .pipe(webpack(require('./webpack.config.js'))).on('error', function handleError() {
      this.emit('end');
    })
    .pipe(gulp.dest(appDir + 'dist/'))
    .pipe(browserSync.stream());
});

// gulp.task('img', function() {
// 	gulp.src(rootDir + 'images/**/*')
// 		.pipe(imagemin())
// 		.pipe(gulp.dest('dist/images'))
// });

gulp.task('clean', function() {
  const files = [
    appDir + 'src/fonts/**/*.*',
    appDir + 'src/images/**/*.*',
  ]

  gulp.src(files, { base: appDir + 'src' })
    .pipe(gulp.dest(appDir + 'dist'));
});

gulp.task('css', function () {
  const processors = [
    autoprefixer,
    cssnext,
    precss,
    cssnano
  ];

  return gulp.src(stylesDir + '**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss(processors))
  .pipe(gulp.dest(appDir + 'dist'))
  .pipe(browserSync.stream());
});

gulp.task('build', ['clean', 'css']);

gulp.task('watch', () => {
  gulp.watch(stylesDir + '**/*.scss', ['css']);
  gulp.watch(appDir + 'src/fonts/**/*.*', ['clean']);
  gulp.watch(appDir + 'src/images/**/*.*', ['clean']);
  gulp.watch(appDir + 'src/js/**/*.*', ['webpack']);
});

gulp.task('default', ['clean', 'browser-sync', 'watch']);
