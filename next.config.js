const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  productionBrowserSourceMaps: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "@/shared/styles/breakpoints.scss"; @import "@/shared/styles/mixins.scss"; @import "@/shared/styles/variables.scss"; `,
  },
  pageExtensions: ["page.tsx", "page.ts"],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: { removeViewBox: false },
                  },
                },
              ],
            },
          },
        },
        "url-loader",
      ],
    });

    return config;
  },
};

module.exports = nextConfig;