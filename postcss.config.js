const nested = require("postcss-nested");
const customMedia = require("postcss-custom-media");

module.exports = () => ({
  plugins: [
    nested(),
    customMedia({
      importFrom: "./src/variables.css"
    })
  ]
});
