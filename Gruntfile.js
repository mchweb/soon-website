module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/assets/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'build/assets/img/'
                }]
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'src/sass',
                    cssDir: 'src/assets/css'
                }
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'src', src: ['favicon.ico'], dest: 'build/'},
                    {expand: true, cwd: 'src', src: ['send.php'], dest: 'build/'},
                    {expand: true, cwd: 'src', src: ['index.html'], dest: 'build/'},
					{expand: true, cwd: 'src', src: ['assets/img/*.svg'], dest: 'build/'},
                    {expand: true, cwd: 'src', src: ['assets/css/*.css'], dest: 'build/'}
                ],
            },
        },
        postcss: {
            options: {
                map: false, 
                processors: [
                    require('postcss-focus')(),
                    require('autoprefixer')({browsers: '> 1%, last 2 versions'}),
                    require('cssnano')()
                ]
            },
            dist: {
                src: 'src/assets/css/*.css'
            }
        }        
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-postcss');

    grunt.registerTask('default', ['postcss', 'imagemin', 'copy']);

};