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
  rules: {
    "@typescript-eslint/no-unused-vars": "off", // Disable the rule for unused variables
    "@typescript-eslint/no-explicit-any": "off", // Disable rule for explicit 'any' type
  },
};

export default nextConfig;
