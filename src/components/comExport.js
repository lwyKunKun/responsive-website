/**
 * @date 2022/7/6
 * @description 公共组件导出文件
 * @author lwy
 */

const modulesFiles =
    import.meta.globEager("./*/*.vue");

// 注册
export default (app) => {
    for (const path in modulesFiles) {
        const componentName = modulesFiles[path].default.name;
        app.component(componentName, modulesFiles[path].default);
    }
};