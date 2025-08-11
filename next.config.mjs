/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        port: "",
        pathname: "/api/portraits/**",
      },
    ],
    domains: ["cdn.sanity.io"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    turbo: false,
  },
};

export default nextConfig;
