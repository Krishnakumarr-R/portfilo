/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Next.js 15+ nests rules inside a `oneOf` array.
    // We need to find and modify the SVG rule within that structure,
    // then prepend our SVGR rule so it takes priority.
    config.module.rules.forEach((rule) => {
      if (rule.oneOf) {
        // Find and disable the default SVG handler inside oneOf
        rule.oneOf.forEach((r) => {
          if (
            r.test instanceof RegExp &&
            r.test.test(".svg") &&
            !r.resourceQuery
          ) {
            r.resourceQuery = /url/; // limit it to ?url imports only
          }
        });

        // Prepend our SVGR rule at the beginning of oneOf so it wins
        rule.oneOf.unshift({
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          resourceQuery: { not: /url/ },
          use: [
            {
              loader: "@svgr/webpack",
              options: {
                svgoConfig: {
                  plugins: [
                    {
                      name: "preset-default",
                      params: { overrides: { removeViewBox: false } },
                    },
                  ],
                },
              },
            },
          ],
        });
      }
    });

    return config;
  },
};

export default nextConfig;
