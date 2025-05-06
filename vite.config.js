import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
    build: {
        lib: {
            entry: "src/index.jsx",
            name: "ReactPopupModal",
            fileName: (format) => `react-popup-modal.${format}.js`,
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