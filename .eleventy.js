module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("./assets")

  return {
    templateFormats: [
      "njk",
      "html",
      "liquid"
    ],
    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: "njk",

    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true,
  }
}
