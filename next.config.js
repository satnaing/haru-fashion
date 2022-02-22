const withPWA = require("next-pwa");

module.exports = withPWA({
  i18n: {
    locales: ["en", "my"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
  // swcMinify: true,
  compiler: {
    removeConsole: true,
  },
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  pwa: {
    dest: "public",
  },
});
