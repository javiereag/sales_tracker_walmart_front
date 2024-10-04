// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     chunkSizeWarningLimit: 50000,
    
//   },
// })

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode,process.cwd(),'')
  return {
    define: {
      "process.env": env,
    },
    plugins: [react()],
    build: {
      chunkSizeWarningLimit: 50000, // Configura aquí el directorio de salida
    },
  };
});