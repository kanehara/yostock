import commonConfig from "./webpack.config.common";

// TODO: flesh out server build
module.exports = {
  ...commonConfig,

  name: 'server',
  target: 'node'
}
