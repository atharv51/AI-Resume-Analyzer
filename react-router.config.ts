import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,//it's required for build script to generate the app with index html entry point , whicih is required for the deployment in the computer , then you can run the "npm run build" command which will then crerate an optomized production build .
} satisfies Config;
