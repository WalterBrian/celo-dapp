let path = require("path");
let webpack = require("webpack");
let webpackDevServer = require("webpack-dev-server");
let webpackConfig = require("./webpack.config");

const webpackDevServerOptions = {
    // publicPath: "/",
    static: {
        directory: path.join(process.cwd(), "dist"),
    },
    historyApiFallback: true,
    hot: true,
    host: "0.0.0.0",
};

const compiler = webpack(webpackConfig);

const devServer = new webpackDevServer(compiler, webpackDevServerOptions);

// Use the "listen" method on the instance to start the server
const port = process.env.PORT || 3000;
devServer.listen(port, "0.0.0.0", (err) => {
    if (err) {
        console.error(err);
    }
    else {
        console.log("App listening on http://localhost:3000");
    }
});