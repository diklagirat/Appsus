import homePage from "./pages/app-home.cmp.js"
import keepApp from "./apps/keep/pages/note-app.cmp.js"
import emailApp from "./apps/email/pages/email-app.cmp.js"
import emailDetails from "./apps/email/pages/email-details.cmp.js"

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
    {
        path: '/email/:emailId',
        component: emailDetails
    },
]

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
})