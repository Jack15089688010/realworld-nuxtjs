/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-01 16:21:55
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-08 11:30:31
 */
module.exports = {
    router: {
        linkActiveClass: 'active',
        extendRoutes(routes, resolve) {
            routes.splice(0)
            routes.push({
                name: 'index',
                path: '/',
                component: resolve(__dirname, 'pages/layout/index.vue'),
                children: [{
                        name: 'home',
                        path: '', // 默认子路由
                        component: resolve(__dirname, 'pages/home/index.vue'),
                    },
                    {
                        name: 'login',
                        path: '/login',
                        component: resolve(__dirname, 'pages/login/index.vue'),
                    },
                    {
                        name: 'register',
                        path: '/register',
                        component: resolve(__dirname, 'pages/login/index.vue'),
                    },
                    {
                        name: 'article',
                        path: '/article/:slug?',
                        component: resolve(__dirname, 'pages/article/index.vue'),
                    },
                    {
                        name: 'editor',
                        path: '/editor',
                        component: resolve(__dirname, 'pages/edit/index.vue'),
                    },
                    {
                        name: 'profile',
                        path: '/profile/:username',
                        component: resolve(__dirname, 'pages/profile/index.vue'),
                    },
                    {
                        name: 'settings',
                        path: '/settings',
                        component: resolve(__dirname, 'pages/settings/index.vue'),
                    }
                ]
            })
        }
    },
    // 注册插件
    plugins: [
        '~/plugins/request.js',
        '~/plugins/dayjs.js'
    ],
    server: {
        host: '0.0.0.0',
        port: 3000
    },
}