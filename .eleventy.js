const fs = require("fs");
const htmlmin = require("html-minifier");
const dateformater = require('date-fns/format');

module.exports = function(config) {

  if (process.env.ELEVENTY_PRODUCTION) {
    config.addTransform("htmlmin", htmlminTransform);
  }

  // add `date` filter
  config.addFilter('date', function (date, dateFormat) {
    return dateformater(date, dateFormat)
  });

  config.addFilter('now', function (dateFormat) {
    return dateformater(Date.now(), dateFormat)
  });

  // Passthrough
  config.addPassthroughCopy({ "src/static": "." });

  // Watch targets
  config.addWatchTarget("./src/styles/");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts"
    }
  }
};

function htmlminTransform(content, outputPath) {
  if( outputPath.endsWith(".html") ) {
    let minified = htmlmin.minify(content, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true
    });
    return minified;
  }
  return content;
}
