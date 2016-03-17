var webpack = require("webpack");

var compiler = webpack(require("./webpack.config.js"));

compiler.run(function (err, stats) {
    stats.compilation.errors.forEach(function (error, i) {
        console.log('*ERROR* ' + error);
    });
    stats.compilation.warnings.forEach(function (warning, i) {
        console.log(warning);
    });
    console.log('COMPILED');
    process.exit();
});