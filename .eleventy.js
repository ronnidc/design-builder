module.exports = function(eleventyConfig) {

	return {
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about those.

    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for link URLs (it does not affect your file structure)
    // You can also pass this in on the command line using `--pathprefix`

    // pathPrefix: "/",

    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    dataTemplateEngine: "liquid",

    // These are all optional, defaults are shown:
    dir: {
      input: "src/site/pages",
      includes: "src/site/_includes",
      data: "src/site/_data",
      output: "export"
    }
  };

};