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
            email: null
        }
    },
    created() {

        const { emailId } = this.$route.params
        emailService.get(emailId)
            .then(email => {
                this.email = email
                this.updateEmail()
            })
    },
    methods: {
        updateEmail() {
            console.log('this.email:', this.email)
            this.email.isRead = true
            emailService.save(this.email)
        },
        deleteEmail(emailId){
            console.log('delete email', emailId);
            
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