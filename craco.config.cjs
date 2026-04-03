const path = require('path')

const aliases = {
  '@api': path.resolve(__dirname, 'src/api'),
  '@assets': path.resolve(__dirname, 'src/assets'),
  '@components': path.resolve(__dirname, 'src/components'),
  '@pages': path.resolve(__dirname, 'src/pages'),
  '@styles': path.resolve(__dirname, 'src/styles'),
  '@utils': path.resolve(__dirname, 'src/utils'),
}

const jestMapper = Object.fromEntries(
  Object.entries(aliases).map(([k, v]) => [`^${k}/(.*)$`, `${v}/$1`]),
)

module.exports = {
  webpack: {
    alias: aliases,
  },
  jest: {
    configure: {
      moduleNameMapper: {
        ...jestMapper,
      },
    },
  },
}
