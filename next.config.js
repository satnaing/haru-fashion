// next.config.js
module.exports = {
  i18n: {
    locales: ["en", "my"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: true,
  },
};
