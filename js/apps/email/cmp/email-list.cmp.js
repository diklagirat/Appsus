export default {
    props: ['emails'],
    template: `
        <section class="emails-list">
            <ul>
                <li v-for="(email, idx) in emails" :key="email.id" class="email-preview-card">
                    <pre>{{email}}</pre>
                    <div class="actions">
                        <!-- todo: email-preview comes here -->
                        <button @click="moveToDetails(email.id)" title="Show Email Info">Details</button>
                        <button @click="remove(email.id)" title="Delete Email">Delete</button>
                    </div>
                </li>
            </ul>
        </section>
`,
    data() {
        return {}
    },
    created() { },
    methods: {
        moveToDetails(emailId) {
            console.log('email.id:', emailId)
            console.log('this.$router:',this.$router)
            this.$router.push('/email' + emailId)
        },
        remove(emailId) {
            console.log('emailId:', emailId)
        }
    },
    computed: {},
    unmounted() { },
}
