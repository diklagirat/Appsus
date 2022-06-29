import homePage from "./pages/app-home.cmp.js"
import keepApp from "./apps/keep/pages/note-app.cmp.js"
const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/keep',
        component: keepApp
    },
    // {
    //     path: '/mail',
    //     component: mailApp
    // },
]

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
})