const gulp = require('gulp')
const babel = require('gulp-babel')
const eslint = require('gulp-eslint')
const jest = require('gulp-jest').default

gulp.task('build-server', () =>
  gulp.src('server/**/*.js')
    .pipe(babel({
      presets: ['env', 'stage-2'],
      babelrc: false
    }))
    .pipe(gulp.dest('server-dist'))
);


gulp.task('lint', function () {
  return gulp.src([
    './**/*.js',
    '!node_modules/**/*.js',
    '!.next/**/*.js',
    '!server-dist/**/*.js',
    '!gulpfile.js',
  ])
    .pipe(eslint({ "extends": "eslint:recommended" }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})


gulp.task('jest', function () {
  process.env.NODE_ENV = 'test';
  return gulp.src('tests/__tests__').pipe(jest({
    setupFiles: ['<rootDir>/tests/jest.setup.js'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/']
  }));
});