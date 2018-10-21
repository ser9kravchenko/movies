const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');

const rigger = require('gulp-rigger');
const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const browserSync = require('browser-sync');
const reload = browserSync.reload;


const paths = {

    build: {
        html: 'build/',
        styles: 'build/styles/',
        js: 'build/',
        images: 'build/images/'
    },

    src: {
        html: 'src/**/*.html',
        styles: ['node_modules/bootstrap/scss/bootstrap.scss', 'src/styles/*.scss'],
        js: ['node_modules/jquery/dist/jquery.min.js','node_modules/bootstrap/dist/js/bootstrap.min.js', 'src/**/*.js'],
        images: 'src/images/*.*'
    },

    watch: {
        html: 'src/**/*.html',
        styles: 'src/**/styles/**/*.scss',
        js: 'src/**/*.js',
        images: 'src/images/*.*'
    },

    clean: './build'
};





gulp.task('html:build', function(){
    gulp.src(paths.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(paths.build.html))
        .pipe(reload({stream: true}))
});


gulp.task('css:build', function(){
    gulp.src(paths.src.styles)
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cleanCss({compatibility: 'ie8'}))
        .pipe(gulp.dest(paths.build.styles))
        .pipe(reload({stream: true}))
});


gulp.task('js:build', () => {
    gulp.src(paths.src.js)
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(gulp.dest(paths.build.js));
});

gulp.task('img:build', function(){
    gulp.src(paths.src.images)
        .pipe(gulp.dest(paths.build.images))
        .pipe(reload({stream: true}))
});

gulp.task('build', ['html:build', 'css:build', 'js:build', 'img:build']);


gulp.task('watch', function(){
    watch([paths.watch.html], function(event, cb){
        gulp.start('html:build');
    });
    watch([paths.watch.styles], function(event, cb){
        gulp.start('css:build');
    });
    watch([paths.watch.js], function(event, cb){
        gulp.start('js:build').pipe(reload({stream: true}));
    });
});

const config = {
    server: {
        baseDir: './build',
        serveStaticOptions: {
            extensions: ['html']
        },
    },
    host: 'localhost',
    port: 3000,
    logPrefix: 'movies',
};
gulp.task('webserver', function(){
    browserSync(config);
});


gulp.task('default', ['build', 'webserver', 'watch']);