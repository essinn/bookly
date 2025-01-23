import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    domains: [
      "upload.wikimedia.org", // For Wikimedia image URL
      "m.media-amazon.com", // For Amazon image URLs
      "almabooks.com", // For Alma Books image URL
      "https://blocks.astratic.com", // placeholder image URL
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
