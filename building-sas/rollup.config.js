import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import nodeBuiltins from 'rollup-plugin-node-builtins';
import nodeGlobals from 'rollup-plugin-node-globals';
import { terser } from 'rollup-plugin-terser';

export default {
  input: ['./chartjs280.js', './moment.js', './chartjs-color.js'],
  output: {
    dir: '../force-app/main/default/lwc/chartjs280',
    format: 'es'
  },
  plugins: [
    commonjs(),
    nodeBuiltins(),
    nodeGlobals({ buffer: false }),
    nodeResolve(),
    terser({
      
      compress:{
        passes:10,
        defaults:true,
        unsafe:true
      }
    })
  ]
};
