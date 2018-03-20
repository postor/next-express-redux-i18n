const { execSync, fork } = require('child_process')
const gulp = require('gulp')
const babel = require('gulp-babel')

gulp.task('build-server', () =>
  gulp.src('server/**/*.js')
    .pipe(babel({
      presets: ['env', 'stage-2'],
      babelrc: false
    }))
    .pipe(gulp.dest('server-dist'))
);


gulp.task('lint', function () {
  const eslint = require('gulp-eslint')
  return gulp.src([
    './**/*.js',
    '!node_modules/**/*.js',
    '!.next/**/*.js',
    '!server-dist/**/*.js',
    '!gulpfile.js',
    '!tests/**/*.js',
  ])
    .pipe(eslint({ "extends": "eslint:recommended" }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
})


gulp.task('test', function () {
  var env = Object.create(process.env);
  execSync('npm run build', { maxBuffer: 1024 * 1024 })
  env.NODE_ENV = 'production'

  return new Promise((resolve, reject) => {
    const server = fork('./server-dist/server.js', { env, maxBuffer: 1024 * 1024 })
    server.on('message', (m) => {
      if (m === 'http ready') {
        execSync('npm run jest', { maxBuffer: 1024 * 1024, stdio: [0, 1, 2] })
        server.kill()
        resolve()
      }
    })
  })
});