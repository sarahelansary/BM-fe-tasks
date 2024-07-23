const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
function buildStyles() {
<<<<<<< HEAD
  return src("libraryscss/**/*.scss").pipe(sass()).pipe(dest("css"));
}
function watchTask() {
  watch(["libraryscss/**/*.scss"], buildStyles);
=======
  return src("index.scss").pipe(sass()).pipe(dest("css"));
}
function watchTask() {
  watch(["index.scss"], buildStyles);
>>>>>>> 1435be6640882347c461a541146080c900424b88
}
exports.default = series(buildStyles, watchTask);
