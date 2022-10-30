// module.exports = {
//   reactStrictMode: true,
// }
module.exports = {
  redirects() {
    return [
      {
        source: "/((?!maintenance).*)",
        destination: "/maintenance.html",
        permanent: false,
      },
    ];
  },
};
