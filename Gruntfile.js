module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'public/styles/main.css': 'scss/main.scss'
        }
      }
    ,
    options: {
      includePaths: [
        'bower_components/bourbon/app/assets/stylesheets',
        'bower_components/neat/app/assets/stylesheets'
      ]
    }
   },
   watch: {
      css: {
        files: 'scss/*.scss',
                      tasks: ['sass']
                      }
                      }
                      });

                      grunt.loadNpmTasks('grunt-sass');
                      grunt.loadNpmTasks('grunt-contrib-watch');
  //  grunt.registerTask('default', ['watch']);
  grunt.registerTask('default', ['sass']);
  }
