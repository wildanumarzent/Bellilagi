/** @type {import('next').NextConfig} */

const path = require('path');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  reactStrictMode: true,
  enabled: process.env.ANALYZE === 'true',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
})

module.exports = withBundleAnalyzer()

module.exports = {
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test('.svg'),
    );
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      loader: require.resolve('@svgr/webpack'),
    });
    return config;
  },
};