const { dest, src } = require("gulp");
const autoprefixer = require("gulp-autoprefixer");

const prefix = () => {
  return src("dist/css/*.css")
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(dest("dist/css/"));
}

module.exports = prefix;