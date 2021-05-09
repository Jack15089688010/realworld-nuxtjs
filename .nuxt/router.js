import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1ecb5e08 = () => interopDefault(import('..\\pages\\layout\\index.vue' /* webpackChunkName: "" */))
const _6dbb5327 = () => interopDefault(import('..\\pages\\home\\index.vue' /* webpackChunkName: "" */))
const _39a828e5 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "" */))
const _2ec3df90 = () => interopDefault(import('..\\pages\\article\\index.vue' /* webpackChunkName: "" */))
const _64fe011c = () => interopDefault(import('..\\pages\\edit\\index.vue' /* webpackChunkName: "" */))
const _42f175a5 = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "" */))
const _34317b63 = () => interopDefault(import('..\\pages\\settings\\index.vue' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _1ecb5e08,
    name: "index",
    children: [{
      path: "",
      component: _6dbb5327,
      name: "home"
    }, {
      path: "/login",
      component: _39a828e5,
      name: "login"
    }, {
      path: "/register",
      component: _39a828e5,
      name: "register"
    }, {
      path: "/article/:slug?",
      component: _2ec3df90,
      name: "article"
    }, {
      path: "/editor",
      component: _64fe011c,
      name: "editor"
    }, {
      path: "/profile/:username",
      component: _42f175a5,
      name: "profile"
    }, {
      path: "/settings",
      component: _34317b63,
      name: "settings"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
