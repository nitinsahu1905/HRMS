// next.config.js uses CommonJS syntax (module.exports), while next.config.mjs uses ECMAScript Modules (ESM) syntax (export)

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/files",
          outputPath: "static/files",
          name: "[name].[ext]",
        },
      },
    });
    return config;
  },
  images: {
    domains: [
      "t4.ftcdn.net",
      "designimages.appypie.com",
      "encrypted-tbn0.gstatic.com",
    ],
  },
};

export default nextConfig;
