const { expo } = require('./app.json');

/** @type {import('expo/config').ExpoConfig} */
const config = { ...expo };

// Set only for the static web export that gets hosted on GitHub Pages,
// where the site lives at https://<user>.github.io/<repo>/ instead of the domain root.
if (process.env.GH_PAGES_BASE_URL) {
  config.experiments = {
    ...config.experiments,
    baseUrl: process.env.GH_PAGES_BASE_URL,
  };
}

module.exports = { expo: config };
