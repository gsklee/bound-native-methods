import Gulp from 'gulp';
import GulpLoadPlugins from 'gulp-load-plugins';

const _ = GulpLoadPlugins();

Gulp.task('build',
  () => Gulp.src('index.babel.js')
            .pipe(_.rename('index.js'))
            .pipe(_.babel())
            .pipe(Gulp.dest('.'))
);
