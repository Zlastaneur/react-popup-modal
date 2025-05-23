import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
    build: {
        lib: {
            entry: "src/index.jsx",
            name: "ReactPopupModal",
            fileName: (format) => `index.${format}.js`,
            formats: ["es", "cjs"],
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
    },
    plugins: [react()],
})