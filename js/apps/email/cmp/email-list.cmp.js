import emailPreview from "./email-preview.cmp.js"

// todo: implement a mini-preview with a flag on the model (not in here) - later' when have time

export default {
    name: 'email-list',
    props: ['emails'],
    template: `
        <section class="emails-list table">
            <ul>
                <li v-for="(email, idx) in emails" :key="email.id" class="email-preview-card clean-list row" :class="{unread: !email.isRead}">
                        <router-link :to="'/email/'+email.id" class="clean-link">
                            <email-preview :email="email" />
                        </router-link>

                    </li>
                </ul>
        </section>
`,
    components: {
        emailPreview
    },
    data() {
        return {
            email: null,
            isOpen: false
        }
    },
    created() {

    },
    methods: {
        openPreview() {
            if (!this.isOpen) {
                console.log('open view')
                this.isOpen = true
            } else {
                console.log('close view')
                this.isOpen = false
            }
        },

    },
    computed: {
        // setRead() {
        //     console.log('unread')
        //     console.log('this.email:', this.email)
        //     if (this.email.isRead) {
        //         return ''
        //     }
        //     else {
        //         return 'unread'
        //     }
        // },
    },
    unmounted() { },
}
