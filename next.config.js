/** @type {import('nextra').NextraConfig} */
const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  defaultShowCopyCode: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.notion.so",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: 'images.unsplash.com"',
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
    // domains: [
    //   "www.notion.so",
    //   "images.unsplash.com",
    //   "prod-files-secure.s3.us-west-2.amazonaws.com",
    //   // "s3.us-west-2.amazonaws.com",
    // ],
  },
};

module.exports = withNextra(nextConfig);
