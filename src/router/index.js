/**
 * @date 2022/7/6
 * @description router.js
 * @author lwy
 */

import { createRouter, createWebHashHistory } from "vue-router";

export const constantRoutes = [{
    path: "/",
    component: () =>
        import ("@/views/home/index.vue"),
    meta: {
        title: "首页",
    },
}, ];

const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes,
});

// reset router
export function resetRouter() {
    router.getRoutes().forEach((route) => {
        const { name } = route;
        if (name) {
            router.hasRoute(name) && router.removeRoute(name);
        }
    });
}

export default router;