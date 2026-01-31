import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
  build: {
    emptyOutDir: false,
    lib: {
      entry: {
        index: path.resolve(__dirname, "src/index.ts"),
        "components/core": path.resolve(
          __dirname,
          "src/lib/components/core/index.ts",
        ),
        hooks: path.resolve(__dirname, "src/lib/hooks/index.ts"),
      },
      name: "TaferReactUI",
      formats: ["es"],
      fileName: (format) => `react-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        entryFileNames: () => {
          // Esto genera archivos por carpeta
          return `dist/[name].esm.js`;
        },
      },
    },
  },
});
