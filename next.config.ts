import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/partnerships",
        destination: "/ar/partnerships",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/ar/contact",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "header", key: "x-forwarded-proto", value: "http" }],
        destination: "https://azia.events/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
