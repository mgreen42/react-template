//import the module used to join two paths
const path = require('path');

module.exports = {
    entry: './src/app.js',
    mode: 'development',
    output: {
        //absolute path to the file
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            //what files to run the program on
            //escape the dot, then $ is for ending in js
            test: /\.js$/,
            //node modules are already set to go
            exclude: /node_modules/
        }, {
            //look for any file that ends in .css
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
                //lets us use more than one loader
            ]
        }
    ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname,'public')
    }
}

//loader for babel
//yarn add babel-core@6.25.0 babel-loader@7.1.1
//add babel into module for rolling back code, set up rules for loaders

// intstall -> import -> use
//npm install react@16.0.0 react-dom@16.0.0 
//on console in folder holding all files (not public)

//devtool is for sourcemaps -- to go straight to where the errors are generating
//from the code we wrote, not the full built bundle


//webpack dev-server -> yarn add webpack-dev-server@2.5.1
// better than live server

//yarn add babel-plugin-transform-class-properties@6.24.1
//so you don't have to make the constructor and binds this always

//css loader
//yarn add style-loader@0.18.2 css-loader@0.28.4

//compile scss files into css
//yarn add sass-loader@6.0.6 node-sass@4.5.3

//install modal for pop-up
//yarn add ract-modal@2.2.2

//normalize for css -- make sure all browsers start styling in the same place
//yarn add normalize.css