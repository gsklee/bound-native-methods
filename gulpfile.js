import Gulp from 'gulp';
import GulpLoadPlugins from 'gulp-load-plugins';

const _ = GulpLoadPlugins();

Gulp.task('build',
  () => Gulp.src('source/*.js')
            .pipe(_.babel())
            .pipe(Gulp.dest('.'))
);
