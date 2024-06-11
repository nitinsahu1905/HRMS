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
    unoptimized: true,
    domains: [
      "images.pexels.com",
      "t4.ftcdn.net",
      "plus.unsplash.com",
      "designimages.appypie.com",
      "encrypted-tbn0.gstatic.com",
      "metadologie-operations-dev-ed.my.site.com",
      "img.freepik.com",
      "randomuser.me",
      "imgs.search.brave.com",
    ],
  },
};

export default nextConfig;
