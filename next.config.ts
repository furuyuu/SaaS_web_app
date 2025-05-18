import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  experimental: {
    serverActions: {
      bodySizeLimit: '5mb', // ← 必要に応じて拡大（例: '5mb', '10mb'）
    },
  },
}

export default nextConfig;
