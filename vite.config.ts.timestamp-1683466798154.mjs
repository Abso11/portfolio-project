// vite.config.ts
import { defineConfig } from "file:///C:/Users/yanke/Desktop/portfolio/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/yanke/Desktop/portfolio/node_modules/@vitejs/plugin-react/dist/index.mjs";
import viteTsconfigPaths from "file:///C:/Users/yanke/Desktop/portfolio/node_modules/vite-tsconfig-paths/dist/index.mjs";
import svgrPlugin from "file:///C:/Users/yanke/Desktop/portfolio/node_modules/vite-plugin-svgr/dist/index.mjs";
import checker from "file:///C:/Users/yanke/Desktop/portfolio/node_modules/vite-plugin-checker/dist/esm/main.js";
var vite_config_default = defineConfig(({ command }) => ({
  plugins: [
    react(),
    viteTsconfigPaths(),
    svgrPlugin(),
    command !== "build" ? checker({ typescript: true, eslint: { lintCommand: 'eslint "./src/**/*.{ts,tsx}"' } }) : void 0
  ],
  server: {
    port: 9e3
  },
  define: {
    "process.env": process.env
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests.ts"
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx5YW5rZVxcXFxEZXNrdG9wXFxcXHBvcnRmb2xpb1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxceWFua2VcXFxcRGVza3RvcFxcXFxwb3J0Zm9saW9cXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3lhbmtlL0Rlc2t0b3AvcG9ydGZvbGlvL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCB2aXRlVHNjb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJztcclxuaW1wb3J0IHN2Z3JQbHVnaW4gZnJvbSAndml0ZS1wbHVnaW4tc3Zncic7XHJcbmltcG9ydCBjaGVja2VyIGZyb20gJ3ZpdGUtcGx1Z2luLWNoZWNrZXInO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IGNvbW1hbmQgfSkgPT4gKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICByZWFjdCgpLFxyXG4gICAgdml0ZVRzY29uZmlnUGF0aHMoKSxcclxuICAgIHN2Z3JQbHVnaW4oKSxcclxuICAgIGNvbW1hbmQgIT09ICdidWlsZCdcclxuICAgICAgPyBjaGVja2VyKHsgdHlwZXNjcmlwdDogdHJ1ZSwgZXNsaW50OiB7IGxpbnRDb21tYW5kOiAnZXNsaW50IFwiLi9zcmMvKiovKi57dHMsdHN4fVwiJyB9IH0pXHJcbiAgICAgIDogdW5kZWZpbmVkXHJcbiAgXSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIHBvcnQ6IDkwMDBcclxuICB9LFxyXG4gIGRlZmluZToge1xyXG4gICAgJ3Byb2Nlc3MuZW52JzogcHJvY2Vzcy5lbnZcclxuICB9LFxyXG4gIHRlc3Q6IHtcclxuICAgIGdsb2JhbHM6IHRydWUsXHJcbiAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcclxuICAgIHNldHVwRmlsZXM6ICdzcmMvc2V0dXBUZXN0cy50cydcclxuICB9XHJcbn0pKTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0UixTQUFTLG9CQUFvQjtBQUN6VCxPQUFPLFdBQVc7QUFDbEIsT0FBTyx1QkFBdUI7QUFDOUIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxhQUFhO0FBR3BCLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsUUFBUSxPQUFPO0FBQUEsRUFDNUMsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sa0JBQWtCO0FBQUEsSUFDbEIsV0FBVztBQUFBLElBQ1gsWUFBWSxVQUNSLFFBQVEsRUFBRSxZQUFZLE1BQU0sUUFBUSxFQUFFLGFBQWEsK0JBQStCLEVBQUUsQ0FBQyxJQUNyRjtBQUFBLEVBQ047QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixlQUFlLFFBQVE7QUFBQSxFQUN6QjtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLElBQ2IsWUFBWTtBQUFBLEVBQ2Q7QUFDRixFQUFFOyIsCiAgIm5hbWVzIjogW10KfQo=
