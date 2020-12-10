module.exports = (config) => {
  // Set directories to pass through to the dist folder
  config.addPassthroughCopy("./src/images/");
  config.addPassthroughCopy({ "./src/_includes/css": "/css" });
  config.addPassthroughCopy("./src/fonts/");
  // Transforms
  const htmlMinTransform = require("./src/transforms/html-min-transform.js");
  // Create a helpful production flag
  const isProduction = process.env.NODE_ENV === "production";
  // Only minify HTML if we are in production because it slows builds _right_ down
  if (isProduction) {
    config.addTransform("htmlmin", htmlMinTransform);
  }
  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);
  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
