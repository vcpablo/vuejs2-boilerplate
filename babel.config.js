module.exports = {
  presets: [
    [
      '@vue/app',
      {
        useBuiltIns: 'entry',
        corejs: '3.0.0',
        modules: 'commonjs'
      }
    ]
  ],
  plugins: ['lodash']
}
