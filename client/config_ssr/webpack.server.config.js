/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Sample Webpack Configuration for Server Bundle
const baseConfig = require('./webpack.config');
const path = require('path');

// Note that since this is for the server, it is important to
// set the target to node and set the libraryTarget to commonjs2
module.exports = Object.assign({}, {
  target: 'node',
  entry: path.resolve(__dirname, '../src/index.ssr.js'),
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, '../build'),
    libraryTarget: 'commonjs2',
  }
}, baseConfig);
