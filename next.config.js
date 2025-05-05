/** @type {import('nextra').NextraConfig} */
const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  defaultShowCopyCode: true,
});

/** @type {import('next').NextConfig} */
const baseConfig = {
  reactStrictMode: true,
  output: "export", // ✅ 반드시 여기로 이동 (Next.js 최상위 설정)
  images: {
    unoptimized: true, // ✅ static export 시 필수
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.notion.so",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // ✅ 따옴표 수정
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
  },
};

const withVideos = require("next-videos");

module.exports = withNextra(withVideos(baseConfig));
