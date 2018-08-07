require('ignore-styles');
require('babel-register')({
    ignore: [ /(node_modules)/ ],
    presets: ['es2015', 'react-app']
});
require('asset-require-hook')({
  extensions: ['jpg','svg'],
  name: 'static/media/[name].[hash].[ext]'
})
require('./server');