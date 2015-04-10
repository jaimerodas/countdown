module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        preserveComments: false
      },
      target: {
        files: {
          'js/script.js': ['js/countdown.js']
        }
      }
    },
    sass: {
      dist: {
          options: {
              style: 'compressed',
              noCache: true
          },
          files: {
              'css/main.css': 'scss/main.scss'
          }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['uglify', 'sass']);

};
