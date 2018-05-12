const MODE = 'development';
//const MODE = 'production';
const enabledSourceMap = (MODE === 'development');
 
module.exports = {
  mode: MODE,
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: enabledSourceMap,
              importLoaders: 2
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: enabledSourceMap,
            }
          }
        ],
      },
    ],
  },
};