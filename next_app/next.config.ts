import type { NextConfig } from "next";
import { SERVER_PROPS_GET_INIT_PROPS_CONFLICT } from "next/dist/lib/constants";
import { hostname } from "os";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    unoptimized: true,
  },

};

export default nextConfig;
