module.exports = {
  reactStrictMode: true,
  redirects: async () => [
    {
      source: "/about",
      destination: "/",
      permanent: true,
    },
  ],
};
