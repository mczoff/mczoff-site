import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import goTo from "vuetify/lib/components/Vuetify/goTo";

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior : (to, from, savedPosition) => {
        let scrollTo = 0

        if (to.hash) {
            scrollTo = to.hash
        } else if (savedPosition) {
            scrollTo = savedPosition.y
        }

        return goTo(scrollTo)
    },
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: { scrollToTop: true }
        },
    ]
})