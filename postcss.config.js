const path = require('path');

module.exports = ({ env }) => ({
  plugins: {
    'postcss-hash': {
			trim: 20,
			manifest: './src/_data/manifest.json',
      name: ({dir, name, hash, ext}) => env === "production" ? path.join(dir, name + '.' + hash + ext) : path.join(dir, name + ext),
		},
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
    cssnano:
      env === "production"
        ? {
            preset: ["default", { discardComments: { removeAll: true } }],
          }
        : false,
  },
});
