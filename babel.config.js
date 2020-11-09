module.exports = (api) => {
  api.cache(true)

  const presets = ['@babel/env', '@babel/react', '@babel/typescript']
  const plugins = [['@babel/transform-runtime', { useESModules: true }]]

  return {
    presets,
    plugins,
  }
}
