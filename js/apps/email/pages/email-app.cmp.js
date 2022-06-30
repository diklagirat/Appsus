import { emailService } from '../services/email.service.js'
import emailList from '../cmp/email-list.cmp.js'
import emailFolderList from '../cmp/email-folder-list.cmp.js'


export default {
    template: `
        <section class="email-app">
            <h1>Welcome to Email app!</h1>
            <email-list :emails="emailsToShow"/>
            <email-folder-list :emails="emailsInInbox"/>
        </section>
`,
    components: {
        emailList,
        emailFolderList
    },
    data() {
        return {
            emails: null,
            userEmail: null
        }
    },
    created() {
        //Get all emails from server
        emailService.query()
            .then(emails => this.emails = emails)
            .catch(err => console.log('err:', err))
        //Get user email from server

    },
    methods: {},
    computed: {
        emailsToShow() {
            return this.emails
        },
        emailsInInbox() {
            const emailsInInbox = emails.filter(email => (email.to === userEmail))
            return emailsInInbox.length

        }
    },
    unmounted() { },
}

