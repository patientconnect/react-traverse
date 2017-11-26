module.exports = {
  presets: ["react", "env"],
  plugins: [
    "babel-plugin-syntax-async-generators",
    "babel-plugin-syntax-trailing-function-commas",
    [
      "babel-plugin-transform-async-to-module-method",
      {
        module: "bluebird",
        method: "coroutine"
      }
    ],
    "babel-plugin-transform-class-constructor-call",
    "babel-plugin-transform-class-properties",
    "babel-plugin-transform-decorators-legacy",
    "babel-plugin-transform-exponentiation-operator",
    "babel-plugin-transform-object-rest-spread",
    "babel-plugin-transform-flow-strip-types",
    "babel-plugin-transform-react-jsx",
    "babel-plugin-transform-eval",
    // 'babel-plugin-transform-jscript',
    "babel-plugin-transform-object-assign",
    "babel-plugin-transform-object-set-prototype-of-to-assign",
    "babel-plugin-transform-proto-to-assign",
    // 'babel-plugin-transform-regenerator',
    "babel-plugin-transform-runtime",
    "babel-plugin-transform-undefined-to-void",
    // 'babel-plugin-transform-es2015-arrow-functions',
    // 'babel-plugin-transform-es2015-block-scoped-functions',
    // 'babel-plugin-transform-es2015-block-scoping',
    // 'babel-plugin-transform-es2015-classes',
    // 'babel-plugin-transform-es2015-computed-properties',
    // 'babel-plugin-transform-es2015-constants',
    "babel-plugin-transform-es2015-destructuring",
    // 'babel-plugin-transform-es2015-for-of',
    "babel-plugin-transform-es2015-function-name",
    // 'babel-plugin-transform-es2015-literals',
    // 'babel-plugin-transform-es2015-object-super',
    "babel-plugin-transform-es2015-parameters",
    // 'babel-plugin-transform-es2015-shorthand-properties',
    // 'babel-plugin-transform-es2015-spread',
    "babel-plugin-transform-es2015-sticky-regex",
    // 'babel-plugin-transform-es2015-template-literals',
    // 'babel-plugin-transform-es2015-typeof-symbol',
    "babel-plugin-transform-es2015-unicode-regex",
    "babel-plugin-transform-es2015-modules-commonjs"
  ],
  sourceMaps: "both",
  retainLines: true
};
