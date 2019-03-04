# grunt-plop

> A Grunt wrapper for Plop, a micro-generator for your projects


## Getting Started

If you haven't used [Grunt](https://gruntjs.com) before, be sure to check out the [Getting Started](https://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](https://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```
npm install grunt-plop plop --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```
grunt.loadNpmTasks('grunt-plop');
```

## Usage

Run this task with the `grunt plop` command. You can also target a specific generator directly via the grunt task by supplying the generator's name as an argument like `grunt plop:my_generator`. 


## Options

This grunt task is not configurable and therefore does not have any options available. It's merely a Grunt wrapper for the [plop](https://www.npmjs.com/package/plop) package to allow you to call the Plop CLI via Grunt. Refer to the [Plop documentation](https://plopjs.com/documentation/) and/or its [Github repo](https://github.com/amwmedia/plop) to learn more about using [Plop](https://plopjs.com/) within your project and how to setup a [`plopfile.js`](https://plopjs.com/documentation/#your-first-plopfile).