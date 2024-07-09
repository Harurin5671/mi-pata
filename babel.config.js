module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@assets': './assets',
            '@components': './src/components',
            '@constants': './src/constants',
            '@hooks': './src/hooks',
            '@interfaces': './src/interfaces',
            '@navigation': './src/navigation',
            '@screens': './src/screens',
            '@services': './src/services',
            '@themes': './src/themes',
            '@utils': './src/utils',
            '@context': './src/context',
          },
        },
        'react-native-reanimated/plugin',
      ],
    ],
  };
};
