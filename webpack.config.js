var path = require('path');

const ReactCompilerConfig = {
    target: 19
};

module.exports = function () {
    return {
        plugins: [
            ['babel-plugin-react-compiler', ReactCompilerConfig],
        ],
    };
};

module.exports = {
    mode: 'production',
    entry: './src/react-image-zooom.js',
    output: {
        path: path.resolve('lib'),
        filename: 'react-image-zooom.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'react': path.resolve(__dirname, './node_modules/react'),
            'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
        }
    },
    externals: {
        // Don't bundle react or react-dom      
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM"
        }
    }
}