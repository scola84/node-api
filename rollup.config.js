import buble from 'rollup-plugin-buble';
import builtins from 'rollup-plugin-node-builtins';
import commonjs from 'rollup-plugin-commonjs';
import globals from 'rollup-plugin-node-globals';
import resolve from 'rollup-plugin-node-resolve';

const name = process.argv.indexOf('-w') === -1 ?
  'api.js' :
  'api.min.js';

export default {
  dest: './dist/' + name,
  entry: 'index.js',
  format: 'umd',
  moduleName: 'api',
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
