import { emailService } from '../services/email.service.js'

export default {
    template: `
        <section v-if="email" class="email-details">
            <h1>From: {{email.to}}</h1>
            <h1>Subject: {{email.subject}}</h1>
            <h1>{{sentAt}}</h1>
            <p>{{email.body}}</p>
        </section>
`,
    data() {
        return {
            email: null
        }
    },
    created() {
    },
    methods: {},
    computed: {
        sentAt() {
            const { sentAt } = this.email
            return new Date(+sentAt).toDateString()
        }
    },
    watch: {
        '$route.params.emailId': {
            handler() {
                const id = this.$route.params.emailId
                emailService.get(id).then(email => {
                    this.email = email
                })
            },
            immediate: true
        }

    },
    unmounted() { },
}