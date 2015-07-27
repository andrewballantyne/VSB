/**
 * Created by Andrew on 7/23/15.
 */
module.exports = function(grunt) {

  grunt.initConfig({
    ts: {
      dev: {
        src: [
          'dev/src/_ref.d.ts'
        ],
        out: 'dev/bin/scripts.js',
        options: {
          target: 'es5',
          sourceMap: true,
          declaration: false,
          removeComments: false
        }
      }
    },
    concat: {
      options: {
        separator: "\n"
      },
      external: {
        src: [
          'bower_components/jQuery/dist/jquery.min.js'
        ],
        dest: 'dev/bin/external.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-ts');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['concat']);
  grunt.registerTask('dev', ['ts']);

};