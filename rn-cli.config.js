
module.exports = {
  getSourceExts() {
    return ["js", "ts", "tsx"]
  },

  getTransformModulePath() {
    return require.resolve("./transformer")
  },
}
