const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');  // Para minificar o CSS

// Tarefa de compilação e minificação do Sass
function styles() {
    return gulp.src('./src/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError)) // Compilando Sass
        .pipe(cleanCSS()) // Minificando CSS
        .pipe(gulp.dest('./dist/css')); // Salvando na pasta de destino
}

exports.default = styles;
exports.watch = function () {
    gulp.watch('./src/styles/**/*.scss', gulp.parallel(styles))
}