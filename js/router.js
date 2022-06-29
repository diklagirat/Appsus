import homePage from "./pages/app-home.cmp.js"
import keepApp from "./apps/keep/pages/note-app.cmp.js"
import emailApp from "./apps/email/pages/email-app.cmp.js"

const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/keep',
        component: keepApp
    },
    {
        path: '/email',
        component: emailApp
    },
]

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
})