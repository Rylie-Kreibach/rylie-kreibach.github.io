module.exports = {
    presets: [
      '@nuxt/babel-preset-app' // Default Nuxt preset for applications
    ],
    plugins: [
        '@babel/plugin-transform-react-jsx' // Transform JSX to React.createElement calls
      ]
  };
  