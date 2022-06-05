const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./assets");
  eleventyConfig.addPassthroughCopy("./img");

  // Customize Markdown library and settings:
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.ariaHidden({
      placement: "after",
      class: "direct-link",
      symbol: "#",
      level: [1, 2, 3, 4],
    }),
    slugify: eleventyConfig.getFilter("slug")
  });
  eleventyConfig.setLibrary("md", markdownLibrary);

  return {
    templateFormats: [
      "md",
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
