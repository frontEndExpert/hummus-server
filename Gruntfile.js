module.exports = function(grunt) {

  grunt.initConfig({
    prerender: {
      options: {
        // Task-specific options go here.
        options.dest: 'dest', 
        options.hashed: false,
      },
      your_target: {
        options: {
          // Target-specific file lists and/or options go here.
          options.sitePath: '/',
          options.hashed: false,
          options.urls: ['', 'contactus', 'gallery'], 
          options.timeout: 7000,
          options.limit: 5,
          
        }
      },
    },
  });

  grunt.loadNpmTasks('grunt-prerender');

};