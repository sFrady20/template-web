const WindiCSS = require("windicss-webpack-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config, {}) => {
    //TODO: change to unocss
    config.plugins.push(new WindiCSS());

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: { dimensions: false, typescript: true },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
