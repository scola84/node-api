import buble from 'rollup-plugin-buble';
import builtins from 'rollup-plugin-node-builtins';
import commonjs from 'rollup-plugin-commonjs';
import globals from 'rollup-plugin-node-globals';
import resolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'index.js',
  format: 'umd',
  globals: {
    // 'querystring': 'querystring',
    // 'stream': 'stream',
    // 'url': 'url',
    // 'string_decoder': 'string_decoder'

    // 'd3-selection': 'd3',
    // 'd3-transition': 'd3',
    // 'moment': 'moment',
    // 'moment-timezone': 'moment'
  },
  plugins: [
    builtins(),
    resolve({
      jsnext: true,
      skip: [
        // 'querystring',
        // 'stream',
        // 'url',
        // 'string_decoder'

        // 'd3-selection',
        // 'd3-transition',
        // 'moment',
        // 'moment-timezone'
      ]
    }),
    commonjs({
      ignoreGlobal: true
    }),
    globals(),
    buble()
  ]
};
