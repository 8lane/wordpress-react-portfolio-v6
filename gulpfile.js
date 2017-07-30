const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnext = require('cssnext');
const precss = require('precss');
const cssnano = require('cssnano');
const imagemin = require('gulp-imagemin');

const rootDir = './';
const stylesDir = './sass/';

gulp.task('browser-sync', function() {
	browserSync.init({
    files: [
      "/js/**/*.js",
      "**/*.php"
    ],
    proxy: "dev/folio/v6/wordpress"
	});
});

gulp.task('img', function() {
	gulp.src(rootDir + 'images/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
});

gulp.task('clean', function() {
	const files = [
		rootDir + 'favicon.ico',
		rootDir + 'index.html',
		rootDir + 'js/**/*.*',
		rootDir + 'fonts/**/*.*',
		rootDir + 'images/**/*.*'
	]

	gulp.src(files, { base: './src/' })
		.pipe(gulp.dest('dist'));
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
		.pipe(gulp.dest('./dist/css'))
		.pipe(browserSync.stream());
});

gulp.task('build', ['clean', 'css', 'img']);

gulp.task('watch', () => {
  gulp.watch(stylesDir + '**/*.scss', ['css']);
	gulp.watch(rootDir + '/images/**/*.*', ['clean']);
	gulp.watch(rootDir + '/*.html', ['clean']).on('change', browserSync.reload);
});

gulp.task('default', ['clean', 'browser-sync', 'watch']);
