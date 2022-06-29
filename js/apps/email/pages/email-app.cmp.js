import { emailService } from '../services/email.service.js'
import emailList from '../cmp/email-list.cmp.js'

export default {
    template: `
        <section class="email-app">
            <h1>Welcome to Email app!</h1>
            <email-list :emails="emailsToShow"/>
        </section>
`,
    components: {
        emailList
    },
    data() {
        return {
            emails: null
        }
    },
    created() {
        //Get all emails from server
        emailService.query()
            .then(emails => this.emails = emails)
            .catch(err => console.log('err:', err))
    },
    methods: {},
    computed: {
        emailsToShow() {
            return this.emails
        }
    },
    unmounted() { },
}

