module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          '@assets': './assets',
          '@components': './src/components',
          '@screens': './src/screens',
          '@hooks': './src/hooks',
          '@services': './src/services',
          '@navigation': './src/navigation',
          '@utils': './src/utils',
          '@store': './src/store',
        },
      },
    ],
  ],
};
