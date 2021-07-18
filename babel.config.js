module.exports = {
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
  plugins: [
    ['@babel/plugin-proposal-optional-chaining'],
    [
      'module-resolver',
      {
        alias: {
          assets: './src/assets',
          components: './src/components',
          styles: './src/styles',
          screens: './src/screens',
          navigation: './src/navigation',
          constants: './src/constants',
        },
        root: ['./src'],
      },
    ],
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
