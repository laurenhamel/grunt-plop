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
    
    // Verify that Plop is available.
    try { require.resolve('plop'); }
  
    // Otherwise, throw an error.
    catch(error) {
      
      // Alert the user that Plop could not be found.
      grunt.log.error('Plop could not be found.',
                      'Run `npm i plop --save-dev`, then try again.');
      
      // Exit the Grunt task.
      done();
      
      // Stop running.
      return;
      
    }
    
    // Run Plop.
    grunt.util.spawn({
      cmd: require.resolve('plop'),
      args: [...arguments],
      opts: {stdio: 'inherit'}
    }, (err, result, code) => done());
    
  });
  
};