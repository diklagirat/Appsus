import { emailService } from '../services/email.service.js'
import emailList from '../cmp/email-list.cmp.js'
import emailFolderList from '../cmp/email-folder-list.cmp.js'
import addEmail from '../cmp/add-email.cmp.js'

export default {
    template: `
        <section class="email-app">
            <add-email />
            <email-folder-list :emails="emailsInInbox"/>
            <email-list :emails="emailsToShow"/>
        </section>
`,
    components: {
        emailList,
        emailFolderList,
        addEmail
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
            if (!this.emails || !this.emails.length) return this.emails
            return this.emails.filter(email => (email.isRead === false)).length
        },
    },
    unmounted() { },
}

