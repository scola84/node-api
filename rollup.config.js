import buble from 'rollup-plugin-buble';
import builtins from 'rollup-plugin-node-builtins';
import commonjs from 'rollup-plugin-commonjs';
import globals from 'rollup-plugin-node-globals';
import resolve from 'rollup-plugin-node-resolve';

const name = process.argv.indexOf('-w') === -1 ?
  'api.js' :
  'api.min.js';

export default {
  input: 'index.js',
  output: {
    file: './dist/' + name,
    format: 'umd'
  },
  name: 'api',
  plugins: [
    builtins(),
    resolve({
      jsnext: true
    }),
    commonjs({
      ignoreGlobal: true
    }),
    globals(),
    buble()
  ]
};
