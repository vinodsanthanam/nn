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
                'bower_components/neat/app/assets/stylesheets',
                'bower_components/normalize-css'
              ]
            }
    },
    bowercopy: {
      options: {
        srcPrefix: 'bower_components'
      },
      folders: {
        options: {
          srcPrefix: ''
        },
        files: {
          'public/images' : 'images',
          'public/scripts' : 'scripts'
        }
      },
      scripts: {
        options: {
          destPrefix: 'public/scripts/vendor'
        },
        files: {
          'jquery/jquery.js': 'jquery/dist/jquery.min.js',
          'js-cookie/js-cookie.js': 'js-cookie/src/js.cookie.js',
          'skrollr/skrollr.js': 'bower-skrollr/skrollr.js'
        }
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
                      grunt.loadNpmTasks('grunt-bowercopy');
    //  grunt.registerTask('default', ['watch']);
    grunt.registerTask('default', ['sass', 'bowercopy']);
    }
