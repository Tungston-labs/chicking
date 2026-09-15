/* global process */
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const proxyTarget = env.VITE_API_PROXY_TARGET;

  return {
    plugins: [react()],
    build: {
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom') || id.includes('react-router') || id.includes('react-helmet-async')) {
                return 'vendor-react';
              }
              if (id.includes('@reduxjs') || id.includes('react-redux')) {
                return 'vendor-redux';
              }
              return 'vendor';
            }
            if (id.includes('sections/PartnerCta') || id.includes('sections/SiteFooter')) {
              return 'shared-sections';
            }
          },
        },
      },
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
    server: proxyTarget
      ? {
          proxy: {
            "/api": {
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/api/, ""),
              target: proxyTarget,
            },
          },
        }
      : undefined,
  };
});
