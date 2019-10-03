/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }), project: {
      ios: {},
      android: {}, // grouped into "project"
    },
    assets: ['./assets/fonts/'], // stays the same
  },
 
};
