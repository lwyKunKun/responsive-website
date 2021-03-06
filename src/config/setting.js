/**
 * @date 2022/7/6
 * @description 公共配置文件
 * @author lwy
 */

export const setting = {
    //项目部署的基础路径
    base: "./",
    // 静态资源服务的文件夹 类型 string | false
    publicDir: "public",
    // 存储缓存文件的目录
    cacheDir: "node_modules/.vite",
    // 输出路径
    outDir: "dist",
    // 生成静态资源的存放路径
    assetsDir: "static",
    // 构建后是否生成 source map 文件
    sourcemap: false,
    // chunk 大小警告的限制
    chunkSizeWarningLimit: 2000,
    // 启用/禁用 CSS 代码拆分
    // 压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能。
    cssCodeSplit: true,
    // 启用/禁用 brotli 压缩大小报告
    brotliSize: false,
    // 指定服务器应该监听哪个IP地址
    host: "0.0.0.0",
    // 指定开发服务器端口
    port: "8080",
    // 设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
    strictPort: false,
    // 服务器启动时自动在浏览器中打开应用程序 此值为字符串时，会被用作 URL 的路径名
    open: true,
    //是否显示顶部进度条
    progressBar: true,
    // 菜单栏默认打开路由
    defaultOpeneds: [],
    // 标题
    title: "xxx",
    // 版权信息
    copyright: "© Copyright xxx",
    // 是否显示页面底部自定义版权信息
    footerCopyright: true,
    // 缓存路由的最大数量
    keepAliveMaxNum: 99,
    // intelligence 前端控制路由 all 后端控制
    authentication: "intelligence",
    // 导入时想要省略的扩展名列表
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
    // 设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息
    clearScreen: false,
    // 是否删除生产环境console
    drop_console: true,
    // 是否删除生产环境debugger
    drop_debugger: true,
    // 调整控制台输出的级别 'info' | 'warn' | 'error' | 'silent'
    logLevel: "info",
};