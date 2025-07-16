module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@axiosClient': './src/axiosClient',
          '@components': './src/components',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@interfaces': './src/interfaces',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@services': './src/services',
          '@store': './src/store',
          '@styles': './src/styles',
          '@utilities': './src/utilities'
        }
      }
    ]
  ]
};
