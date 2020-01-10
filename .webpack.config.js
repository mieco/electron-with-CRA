module.exports = config => {
    config.target = 'electron-renderer';
    config.node.__dirname = false;
    config.node.__filename = false;
    config.node.global = false;
    return config;
  }