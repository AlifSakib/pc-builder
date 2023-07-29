/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.pexels.com",
      "img.freepik.com",
      "images.unsplash.com",
      "tailwindui.com",
    ],
  },
};

module.exports = nextConfig;
