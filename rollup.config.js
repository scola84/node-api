import buble from 'rollup-plugin-buble';
import builtins from 'rollup-plugin-node-builtins';
import commonjs from 'rollup-plugin-commonjs';
import globals from 'rollup-plugin-node-globals';
import resolve from 'rollup-plugin-node-resolve';

export default {
  dest: './dist/api.js',
  entry: 'index.js',
  external: [
    '@scola/core'
  ],
  format: 'umd',
  globals: {
    '@scola/core': 'core'
  },
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
