import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: [
    'src/index.js',
    'src/Checkbox/index.js',
    'src/Radio/index.js',
    'src/Select/index.js',
  ],
  output: [
    {
      dir: 'build',
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
  ],
  preserveModules: true,
  external: ['react', 'react-dom', 'react-native'],
  plugins: [
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs({}),
  ],
};
