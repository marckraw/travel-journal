const withPlugins = require('next-compose-plugins')
const bundleAnalyzer = require('@next/bundle-analyzer')

const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
})

module.exports = withPlugins([
    [withBundleAnalyzer],
], {
    experimental: { esmExternals: true },
    webpack5: true,
    target: 'serverless',
    trailingSlash: true,
})
