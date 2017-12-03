module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-cssnext')({
      browsers: require('bw-axiom/browsers'),
      features: {
        customProperties: {
          warnings: false,
          variables: Object.assign({ '--twitter-blue': '#1DA1F2' },
            require('bw-axiom/lib/materials/cssvars-all'),
            require('bw-axiom/lib/materials/cssvars-theme-light')
          ),
        },
      },
    }),
  ],
};
