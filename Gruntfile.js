module.exports = function(grunt) {

    grunt.initConfig({
        clean: {
            release: ['dist/'],
            build: ['_build/']
        },
        ts: {
            default: {
                tsconfig: './tsconfig.json',
            }
        },
        concat: {
            dist: {
                sourceMap: true,
                src: [
                    '_build/Easings.js',
                    '_build/Tween.js',
                    '_build/GeometricObjectTween.js',
                    '_build/TweenManager.js',
                ],
                dest: 'dist/p5.tween.js'
            },
        },
        uglify: {
            target: {
                files: {
                    'dist/p5.tween.min.js': ['dist/p5.tween.js']
                }
            }
        },
    })

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-contrib-uglify-es');

    grunt.registerTask('default', ['clean', 'ts', 'concat', 'uglify', 'clean:build']);

}