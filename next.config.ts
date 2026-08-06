import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  reactStrictMode: true,


  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },


  output: "standalone",

};

export default nextConfig;
