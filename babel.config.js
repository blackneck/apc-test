module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['./src'],
        alias: {src: './src'},
        extensions: ['.ts', '.ios.ts', '.android.ts', '.tsx'],
      },
    ],
  ],
};
