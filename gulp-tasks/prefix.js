const { dest, src } = require("gulp");
const autoprefixer = require("gulp-autoprefixer");

const prefix = () => {
  return src("src/_includes/css/*.css")
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(dest("dist/css/"));
}

module.exports = prefix;