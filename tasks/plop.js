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
    
    // Define blacklist of Grunt-specific options.
    const blacklist = [
      '--base',
      '--no-color',
      '--gruntfile',
      '--stack',
      '--tasks',
      '--npm',
      '--no-write',
      '--verbose',
      '--debug',
      '--completion',
    ];
    
    // Get arguments and options.
    let args = [...arguments];
    let opts = grunt.option.flags();
    
    // Filter out Grunt options.
    opts = opts.filter((opt) => !blacklist.includes(opt.split('=')[0]));
    
    // Run Plop.
    grunt.util.spawn({
      cmd: require.resolve('plop'),
      args: args.concat(opts),
      opts: {stdio: 'inherit'}
    }, (err, result, code) => done());
    
  });
  
};