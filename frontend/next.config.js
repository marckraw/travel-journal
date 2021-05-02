const withPlugins = require('next-compose-plugins')
const bundleAnalyzer = require('@next/bundle-analyzer')

const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
})

module.exports = withPlugins([
    [withBundleAnalyzer],
], {
    target: 'serverless',
    trailingSlash: true,
    future: {
        webpack5: true,
    },
})
