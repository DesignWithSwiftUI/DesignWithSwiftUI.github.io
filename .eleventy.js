module.exports = function (eleventyConfig) {
    // Watch CSS files for changes
    eleventyConfig.setBrowserSyncConfig({
        files: './_site/css/**/*.css'
    });

    // Copy assets
    eleventyConfig.addPassthroughCopy("assets")
};