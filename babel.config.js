module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      "module-resolver",
     {
      root: ['./src'],
      alias: {
        '@screens': './src/screens',
        '@styles': './src/styles',
        '@assets': './src/assets',
        '@components': './src/components'
      }
     }
    ]
  ]
};
