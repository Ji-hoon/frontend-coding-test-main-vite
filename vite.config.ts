/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // 전역 객체 사용 여부
    environment: "jsdom", // 테스트 환경을 설정
    setupFiles: "./setupTest.js", // 테스트 실행전에 실행할 파일을 설정
    css: true, // CSS 파일을 로드할지 여부를 설정
  },
});
