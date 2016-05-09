var gulp = require('gulp'), 
    sass = require('gulp-sass') ,
    notify = require("gulp-notify") ,
    bower = require('gulp-bower'),
    gulpCopy = require('gulp-copy');

var config = {
   sassPath: './sass',
   bowerDir: './bower_components' ,
  outputPath: './css',
  openEMRInstallPath: './themes'
};

gulp.task('bower', function() { 
  return bower().pipe(gulp.dest(config.bowerDir)) 
});

gulp.task('css', function(cb) { 
  options = {
    includePaths: [
      './sass',
      config.bowerDir + '/bootstrap-sass/assets/stylesheets',
      config.bowerDir + '/font-awesome/scss'
    ]
  };
  var stream = gulp.src(config.sassPath+'/*.scss')
    .pipe(sass(options).on('error', sass.logError))
    .pipe(gulp.dest(config.outputPath));
  return stream;
});

gulp.task('copy', ['css'], function() {
  var stream = gulp.src(config.outputPath+'/style_light.css')
    .pipe(gulpCopy(config.openEMRInstallPath, {prefix: 1}));
  return stream;
});

// Rerun the task when a file changes
 gulp.task('watch', function() {
  gulp.watch(config.sassPath + '/**/*.scss', ['css', 'copy']);
});

  gulp.task('default', ['bower', 'css', 'copy']);
