import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Auto-detect GitHub Pages base path. Allows override via BASE_PATH.
const repoName = process.env.GITHUB_REPOSITORY?.split('/').pop();
const isUserSite = repoName?.endsWith('github.io');
const githubBase = process.env.BASE_PATH
  ? process.env.BASE_PATH
  : isUserSite
    ? '/'
    : repoName
      ? `/${repoName}/`
      : '/';

export default defineConfig({
  base: githubBase,
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
})
