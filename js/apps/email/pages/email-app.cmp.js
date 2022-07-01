import { emailService } from '../services/email.service.js'
import emailList from '../cmp/email-list.cmp.js'
import emailFolderList from '../cmp/email-folder-list.cmp.js'
import addEmail from '../cmp/add-email.cmp.js'
import emailFilter from '../cmp/email-filter.cmp.js'

//TODO: Fix newEmail date presentation
// TODO: Show last email as the first email

export default {
    template: `
        <section class="email-app">
            <button @click="composeEmail" ><i class="fas fa-plus"></i> Compose</button>
            <email-filter @filtered="setFilter"/>
            <add-email v-if="isComposedEmail" @added="addEmail"/>
            <email-folder-list :emails="emailsInInbox"/>
            <email-list :emails="emailsToShow"/>
        </section>
`,
    components: {
        emailList,
        emailFolderList,
        addEmail,
        emailFilter,
    },
    data() {
        return {
            isComposedEmail: false,
            emails: null,
            userEmail: 'user@appsus.com',
            nextId: 105,
            newEmail: null,
            filterBy: null,
        }
    },
    created() {
        //Get all emails from server
        emailService.query()
            .then(emails => this.emails = emails)
            .catch(err => console.log('err:', err))
        //Get user email from server

    },
    methods: {
        composeEmail() {
            this.isComposedEmail = !this.isComposedEmail
            console.log('Compose email')
        },
        addEmail(email) {
            console.log('email:', email)
            this.newEmail = {
                subject: email.subject,
                body: email.body,
                isRead: false,
                sentAt: new Date().toDateString(),
                to: email.to
            }

            console.log('adding email', this.newEmail)
            this.emails.unshift(this.newEmail)
            console.log('this.emails:', this.emails)
            emailService.save(this.newEmail)
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        emailsToShow() {
            var emails = this.emails
            if (this.filterBy) {
                if (this.filterBy === 'Read') {
                    emails = emails.filter(email => email.isRead === true)
                } else if (this.filterBy === 'Unread') {
                    emails = emails.filter(email => email.isRead === false)
                }
            }
            return emails
        },
        emailsInInbox() {
            if (!this.emails || !this.emails.length) return this.emails
            return this.emails.filter(email => (email.isRead === false)).length
        },
    },
    unmounted() { },
}

