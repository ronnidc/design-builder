module.exports = function(eleventyConfig) {

  // Layout aliases can make templates more portable
  eleventyConfig.addLayoutAlias('default', 'default.njk');

	return {

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about those.

    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for link URLs (it does not affect your file structure)
    // You can also pass this in on the command line using `--pathprefix`

    pathPrefix: "/",

    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: false,

    // These are all optional, defaults are shown:
    dir: {
      input: "src/pages",
      includes: "../_includes",
      layouts: "../_layouts",
      data: "../_data",
      output: "dist"
    }
  };

};