const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');

const rigger = require('gulp-rigger');
const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const reload = browserSync.reload;


const paths = {

    build: {
        html: 'build/',
        styles: 'build/styles/',
        js: 'build/'
    },

    src: {
        html: 'src/*.html',
        styles: ['node_modules/bootstrap/scss/bootstrap.scss', 'src/styles/*.scss'],
        js: ['node_modules/jquery/dist/jquery.min.js','node_modules/bootstrap/dist/js/bootstrap.min.js', 'src/**/*.js']
    },

    watch: {
        html: 'src/**/*.html',
        styles: 'src/**/styles/**/*.scss',
        js: 'src/**/*.js'
    },

    clean: './build'
};


const config = {
    server: {
        baseDir: './build'
    },
    host: 'localhost',
    port: 3000,
    logPrefix: 'movies'
};


gulp.task('html:build', function(){
    gulp.src(paths.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(paths.build.html))
        .pipe(reload({stream: true}))
});


gulp.task('css:build', function(){
    gulp.src(paths.src.styles)
        .pipe(wait(500))
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest(paths.build.styles))
        .pipe(reload({stream: true}))
});


gulp.task('js:build', () => {
    gulp.src(paths.src.js)
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(gulp.dest(paths.build.js));
});

gulp.task('build', ['html:build', 'css:build', 'js:build']);


gulp.task('watch', function(){
    watch([paths.watch.html], function(event, cb){
        gulp.start('html:build');
    });
    watch([paths.watch.styles], function(event, cb){
        gulp.start('css:build');
    });
    watch([paths.watch.js], function(event, cb){
        gulp.start('js:build').pipe(reload());
    });
});


gulp.task('webserver', function(){
    browserSync(config);
});


gulp.task('default', ['build', 'webserver', 'watch']);