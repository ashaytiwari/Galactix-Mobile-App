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
        '@components': './src/components',
        '@constants': './src/constants',
        '@store': './src/store',
        '@hooks': './src/hooks',
        '@navigation': './src/navigation'
      }
     }
    ]
  ]
};
