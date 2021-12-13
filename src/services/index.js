module.exports = (persistorName) => {
  return require('./' + persistorName);
};
