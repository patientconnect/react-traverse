const path = require("path");

require("babel-register")({
  only: ["config"],
  presets: [path.resolve(__dirname, "config/babel/node/dev")],
  retainLines: true
});
require("babel-polyfill");
require("./config/gulp");
