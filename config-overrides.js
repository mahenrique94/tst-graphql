const { override, useBabelRc } = require('customize-cra')

module.exports = override(
    // addBabelPlugin('relay')
    useBabelRc()
)
