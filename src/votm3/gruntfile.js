﻿/// <binding BeforeBuild='default' />
/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
	module.exports = function (grunt) {  
	    grunt.loadNpmTasks('grunt-contrib-uglify');
	    grunt.loadNpmTasks('grunt-contrib-watch');
	    grunt.loadNpmTasks('grunt-gh-pages');

	    grunt.initConfig({
	        'gh-pages': {
	            options: {
                    base:'dist'
	            },
                src: ['**']
	        },
	        uglify: {
	            my_target: {
	                files: { 'wwwroot/app.js': ['Scripts/app.js', 'Scripts/**/*.js'] }
	            }
	        },
	
	        watch: {
	            scripts: {
	                files: ['Scripts/**/*.js'],
	                tasks: ['uglify']
	            }
	        }

	    });
	
	    grunt.registerTask('default', ['uglify', 'watch']);
	};
