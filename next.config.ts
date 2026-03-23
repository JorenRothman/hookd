import "./src/config/env";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["hookd.ddev.site"],
  transpilePackages: ["@t3-oss/env-nextjs", "@t3-oss/env-core"],
};

export default nextConfig;
