import { emailService } from '../services/email.service.js'

export default {
    template: `
        <section v-if="email" class="email-details">
            <h1>From: {{email.to}}</h1>
            <h1>Subject: {{email.subject}}</h1>
            <h1>{{sentAt}}</h1>
            <p>{{email.body}}</p>
            <div class="edit-btn-container">
                <button @click="deleteEmail(email.id)"><i class="fas fa-trash"></i></button>
            </div>
        </section>
`,
    data() {
        return {
            email: null,
            emails: null,
            isShow: false
        }
    },
    created() {
        emailService.query()
            .then(emails => this.emails = emails)
            .catch(err => console.log('err:', err))
        const { emailId } = this.$route.params
        emailService.get(emailId)
            .then(email => {
                this.email = email
                this.updateEmail()
            })

    },
    methods: {
        updateEmail() {
            this.email.isRead = true
            emailService.save(this.email)
        },
        deleteEmail(emailId) {
            console.log('delete email', emailId)
            emailService.remove(emailId)
                .then(() => {
                    const deletedEmailIdx = this.emails.findIndex(email => email.id === emailId)
                    console.log('deletedEmailIdx:', deletedEmailIdx)
                    this.emails.splice(deletedEmailIdx, 1)
                })
        }
    },
    computed: {
        sentAt() {
            const { sentAt } = this.email
            return new Date(+sentAt).toDateString()
        }
    },
    unmounted() { },
}