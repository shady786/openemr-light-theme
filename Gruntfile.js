module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      options: {
        outputStyle: 'compressed',
        noLineComments: true,
        sourcemap: true
      },
      foundation: {
        options: {
          sassDir: 'scss/',
          cssDir: 'build',
        }
      }
		},
    concat: {
      dist: {
        src: ['build/*.css'],
        dest: 'css/style_light.css'
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: [{
          expand: true,
          cwd: 'build',
          src: ['*.css', '!*.min.css'],
          dest: 'build/',
          ext: '.min.css'
        }]
      }
    },
    clean: {
      dist: {
        src: 'build'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('default', ['compass', 'cssmin', 'concat', 'clean']);

};
