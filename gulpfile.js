const gulp = require('gulp')
const scp = require('gulp-scp2')

gulp.task('deploy', () => {
  return gulp.src('dist/**/*.*')
    .pipe(scp({
      host: '222.22.22.22',
      username: 'username',
      password: 'password',
      dest: '/var/www/html/yxeye.com/public_html/yakima/public/projects/demos/'
    }))
    .on('error', e => {
      console.log(e)
    })
})
