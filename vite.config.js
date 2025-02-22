import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  const root = process.cwd();
  const folderName = path.basename(root);

  // Determine if using GitHub Pages or a custom domain
  const usingRepoPages = !process.env.VITE_ROOT_PAGES;
  const base = mode === "production" && usingRepoPages ? /${folderName}/ : "/";

  console.log("Configuring Vite with:", {
    command,
    mode,
    usingRepoPages,
    root,
    folderName,
    base,
  });

  return defineConfig({
    root,
    base: "/BUS-IN-OUT", // Change this to "/MolletiRohini80/" if needed
    mode,
    plugins: [react()],
    build: {
      outDir: "dist",
      emptyOutDir: true,
    },
  });
};
