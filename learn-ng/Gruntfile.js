module.exports = function (grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'js/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      options: { livereload: '<%= connect.options.livereload %>',
        },
      files: ['<%= jshint.files %>', '**/*.html'],
      tasks: ['jshint']
    },
    connect: {
      // server: {
        options: {
          port: 8100,
          livereload: 35729,
          hostname: 'localhost',
          keepalive: true
        },
        livereload: {
          options: true,
          base: [
            '.tmp',
            './'
          ]
        }
      // }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('serve', function (target) {
    grunt.task.run([
        'connect:livereload',
        'watch'
        ]);
  });
};