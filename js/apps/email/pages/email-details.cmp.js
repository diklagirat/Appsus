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
        const { emailId } = this.$route.params
        console.log('id', emailId)
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
                const emailId = this.$route.params
                emailService.get(emailId).then(email => {

                    console.log('this.email', email)
                })
            },
            immediate: true
        }

    },
    unmounted() { },
}