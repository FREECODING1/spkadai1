// gulpプラグインの読み込み
const gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass")(require("sass"));
var browserSync = require("browser-sync").create();

// style.scssをタスクを作成する
gulp.task("sass", function() {
  // style.scssファイルを取得
  return (
    gulp
      .src("./sass/**/*.scss")
      // Sassのコンパイルを実行
      .pipe(sass({outputStyle: "expanded"}))
      // cssフォルダー以下に保存
      .pipe(gulp.dest("./css"))
  );
});