'use strict';

const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const gulpIf = require("gulp-if");
const del = require("del");
const newer = require("gulp-newer");
const browserSync = require("browser-sync");
const reload = browserSync.reload;
const notify = require("gulp-notify");
const plumber = require("gulp-plumber");
const autoprefixer = require("gulp-autoprefixer");
const cssmin = require("gulp-minify-css");
const rigger = require("gulp-rigger");
const imagemin = require("gulp-imagemin");
const pngquant = require('imagemin-pngquant');
const uglify = require("gulp-uglify");
const watch = require("gulp-watch");

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == "development";
// Если значение переменной не задано или равно "development" - мы находимся в состоянии разработки

let paths = {

    html: {
        src: "src/**/**.html",
        dist: "dist",
        watch: "src/**/**.html"
    },

    scss: {
        src: "src/scss/**/main.scss",
        dist: "dist/css",
        watch: "src/**/**.scss"
    },

    js: {
        src: "src/js/**/**.js",
        dist: "dist/js",
        watch: "src/**/**.js"
    },

    fonts: {
        src: "src/fonts/**/**.*",
        dist: "dist/fonts",
        watch: "src/**/**.*"
    },

    img: {
        src: "src/img/**/**.*",
        dist: "dist/img",
        watch: "src/**/**.*"
    }

}



gulp.task("styles:build", function () {
    return gulp.src(paths.scss.src)
        .pipe(plumber({
            errorHandler: notify.onError(function (err) {
                return {
                    title: "Styles",
                    message: err.message
                };
            })
        })) // Обработчик ошибок 
        .pipe(newer(paths.scss.dist)) // Не пропускает старые файлы
        .pipe(gulpIf(isDevelopment, sourcemaps.init()))
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulpIf(!isDevelopment, cssmin()))
        .pipe(gulpIf(isDevelopment, sourcemaps.write()))
        .pipe(gulp.dest(paths.scss.dist))
        .pipe(reload({
            stream: true
        }))
});

gulp.task("html:build", function () {
    return gulp.src(paths.html.src)
        .pipe(plumber({
            errorHandler: notify.onError(function (err) {
                return {
                    title: "HTML",
                    message: err.message
                };
            })
        }))
        .pipe(rigger())
        .pipe(gulp.dest(paths.html.dist))
        .pipe(reload({
            stream: true
        }))
});

gulp.task("image:build", function () {
    return gulp.src(paths.img.src)
        .pipe(plumber({
            errorHandler: notify.onError(function (err) {
                return {
                    title: "Images",
                    message: err.message
                };
            })
        }))
        .pipe(imagemin({ //Сожимаем картинки
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(paths.img.dist))
        .pipe(reload({
            stream: true
        }))
});

gulp.task("js:build", function () {
    return gulp.src(paths.js.src)
        .pipe(plumber({
            errorHandler: notify.onError(function (err) {
                return {
                    title: "Scripts",
                    message: err.message
                };
            })
        }))
        .pipe(rigger())
        .pipe(gulpIf(isDevelopment, sourcemaps.init()))
        .pipe(gulpIf(!isDevelopment, uglify()))
        .pipe(gulpIf(isDevelopment, sourcemaps.write()))
        .pipe(gulp.dest(paths.js.dist))
        .pipe(reload({
            stream: true
        }))
});

gulp.task("fonts:build", function () {
    return gulp.src(paths.html.src)
        .pipe(plumber({
            errorHandler: notify.onError(function (err) {
                return {
                    title: "Fonts",
                    message: err.message
                };
            })
        }))
        .pipe(gulp.dest(paths.html.dist))
        .pipe(reload({
            stream: true
        }))
});



gulp.task("clean", function () {
    return del("dist");
});

gulp.task("build", gulp.series("clean",
    gulp.parallel("styles:build",
        "html:build",
        "image:build",
        "js:build",
        "fonts:build"
    )));

gulp.task('watch', function () {
    gulp.watch(paths.scss.watch, gulp.series("styles:build"));
    gulp.watch(paths.html.watch, gulp.series("html:build"));
    gulp.watch(paths.js.watch, gulp.series("js:build"));
    gulp.watch(paths.img.watch, gulp.series("image:build"));
    gulp.watch(paths.fonts.watch, gulp.series("fonts:build"));
});

gulp.task("serve", function () {
    browserSync({
        proxy: 'localhost',
        port: 8080
    });
});

gulp.task("default", gulp.series("build", "serve", "watch"))
