module.exports = function(grunt){
	
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jade: {
		  compile: {
		    options: {
		      pretty:true,
		      data: {
		        debug: false
		      }
		    },
		    files: {
		      "index.html": ["src/jade/index.jade"]
		    }
		  }
		},

		compass: {                  
		    dist: {                   
		      options: {              
		        sassDir: 'src/scss/',
		        cssDir: 'assets/css/',
		        environment: 'production',
		        outputStyle:'expanded',
		        noLineComments:true
		      }
		    }
		 },

        copy: {
		  main: {
		    nonull: true,
		    src: 'src/js/wallclock.js',
		    dest: 'assets/js/wallclock.js'
		  },
		},

        uglify: {
		    build: {
		        files: {
		            'assets/js/wallclock.min.js': ['src/js/wallclock.js']
		        }
		    }
		},

		watch: {
		    js: {
		        files: ['src/js/wallclock.js'],
		        tasks: ['buildjs']
		    },
		    css: {
		        files: ['src/scss/**/*.scss'],
		        tasks: ['buildcss']
		    },
		    jade: {
		      files: ['src/jade/**/*.jade'],
		      tasks: ['jade']
		    }
		}
    });

     grunt.registerTask('default', []);
     grunt.registerTask('buildcss',  ['compass']);
     grunt.registerTask('buildjs',  ['copy', 'uglify']);

}