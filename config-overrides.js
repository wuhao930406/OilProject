/**
 * Created by kurosaki on 2018/12/24.
 */
const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
       config = injectBabelPlugin(
             ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
             config
           );
    return config;
};