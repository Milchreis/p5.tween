module.exports = function(grunt) {

    grunt.initConfig({
        clean: {
            release: ['dist/', 'docs/'],
            build: ['_build/']
        },
        ts: {
            default: {
                tsconfig: './tsconfig.json',
            }
        },
        typedoc: {
            build: {
                options: {
                    module: 'commonjs',
                    out: './docs',
                    name: 'p5.tween',
                },
                src: ['./src/**/*']
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

    grunt.loadNpmTasks('@vamship/grunt-typedoc');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-contrib-uglify-es');

    grunt.registerTask('default', ['clean', 'ts', 'typedoc', 'concat', 'uglify', 'clean:build']);

}