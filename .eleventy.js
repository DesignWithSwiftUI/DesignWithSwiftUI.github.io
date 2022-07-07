const slinkity = require('slinkity')
const vue = require('@slinkity/renderer-vue')

module.exports = function (eleventyConfig) {
    // Watch CSS files for changes
    eleventyConfig.setBrowserSyncConfig({
        files: './_site/css/**/*.css'
    })

    eleventyConfig.setFrontMatterParsingOptions({
        excerpt: true,
        excerpt_separator: "<!-- excerpt -->"
    })

    // Copy assets
    eleventyConfig.addPassthroughCopy("assets")

    // Components
    eleventyConfig.addPlugin(slinkity.plugin, slinkity.defineConfig({
        renderers: [vue]
    }))
};