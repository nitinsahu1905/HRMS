/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
          test: /\.(pdf)$/,
          use: {
            loader: 'file-loader',
            options: {
              publicPath: '/_next/static/files',
              outputPath: 'static/files',
              name: '[name].[ext]',
            },
          },
        });
        return config;
      },
};

export default nextConfig;
