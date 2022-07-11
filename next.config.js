/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["api.lujes.vincentcottalorda.me"],
  },
  swcMinify: true,
};

module.exports = nextConfig;
