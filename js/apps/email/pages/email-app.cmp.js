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
            userEmail: 'user@appsus.com'
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
            // return this.emails.length
            const emailsInInbox = this.emails.filter(email => (email.isRead === false))
            console.log('emailsInInbox.length:',emailsInInbox.length)
            return emailsInInbox.length
        }
    },
    unmounted() { },
}

