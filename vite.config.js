/**
 * @date 2022/7/6
 * @description vite.config.js配置文件
 * @author lwy
 */

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { setting } from "./src/config/setting";
const path = require("path");

// vite打包后的文件提供传统浏览器兼容性支持
import legacy from "@vitejs/plugin-legacy";
//vite项目组件库按需引入
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

const {
    base,
    publicDir,
    outDir,
    assetsDir,
    sourcemap,
    cssCodeSplit,
    host,
    port,
    strictPort,
    open,
    cors,
    brotliSize,
    logLevel,
    clearScreen,
    drop_console,
    drop_debugger,
    chunkSizeWarningLimit,
} = setting;

// https://vitejs.dev/config/
export default defineConfig({
    base,
    root: process.cwd(),
    publicDir,
    logLevel,
    clearScreen,
    plugins: [
        vue(),
        legacy({
            polyfills: ["es.promise.finally", "es/map", "es/set"],
            modernPolyfills: ["es.promise.finally"],
        }),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    server: {
        host,
        port,
        cors,
        strictPort,
        open,
        fs: {
            strict: false,
        },
    },
    // 设置别名
    alias: {
        views: path.resolve(__dirname, "src/views"),
        styles: path.resolve(__dirname, "src/styles"),
        "@": path.resolve(__dirname, "src"),
    },
    css: {
        preprocessorOptions: {
            // 引入公用的样式
            scss: {
                additionalData: `@use "@/styles/index.scss" as *;`,
            },
        },
    },
    corePlugins: {
        preflight: false,
    },
    build: {
        target: "es2015",
        outDir,
        assetsDir,
        sourcemap,
        cssCodeSplit,
        brotliSize,
        terserOptions: {
            compress: {
                keep_infinity: true,
                // 用于删除生产环境中的console
                drop_console,
                drop_debugger,
            },
        },
        chunkSizeWarningLimit,
    },
    optimizeDeps: {
        // 检测需要预构建的依赖项
        entries: [],
    },
});