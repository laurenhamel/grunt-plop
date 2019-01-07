/*
 * grunt-plop
 * https://github.com/laurenhamel/grunt-plop
 *
 * Copyright (c) 2018 Lauren Hamel
 * Licensed under the MIT license.
 */

'use strict';

module.exports = (grunt) => {
  
  // Register Grunt task.
  grunt.registerTask('plop', 'Run the Plop CLI via Grunt', async function() {
    
    // Make asynchronous.
    const done = this.async();
    
    // Run Plop.
    grunt.util.spawn({
      cmd: require.resolve('plop'),
      args: [...arguments],
      opts: {stdio: 'inherit'}
    }, (err, result, code) => done());
    
  });
  
};