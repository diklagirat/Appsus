import emailPreview from "./email-preview.cmp.js"

export default {
    props: ['emails'],
    template: `
        <section class="emails-list table">
            <ul>
                <li v-for="(email, idx) in emails" :key="email.id" class="email-preview-card clean-list row">
                    <email-preview :email="email"/>
                    </div>
                </li>
            </ul>
        </section>
`,
    components: {
        emailPreview
    },
    data() {
        return {}
    },
    created() { },
    methods: {
        moveToDetails(emailId) {
            console.log('email.id:', emailId)
            console.log('this.$router:', this.$router)
            this.$router.push('/email' + emailId)
        },
        remove(emailId) {
            console.log('emailId:', emailId)
        }
    },
    computed: {},
    unmounted() { },
}
