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
            <email-folder-list :emails="emailsInInbox" @filtered="setFilter"/>
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
            userEmail: null,
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
        this.getUserEmail()
        
    },
    methods: {
        getUserEmail() {
            const user = emailService.getUser()
            this.userEmail = user.email
        },
        composeEmail() {
            this.isComposedEmail = true
        },
        addEmail(email) {
            console.log('email.to:',email.to)
            var emailBox = 'inbox'
            if (email.to === this.userEmail) emailBox = 'sent'
            this.newEmail = {
                subject: email.subject,
                body: email.body,
                isRead: false,
                sentAt: new Date().toDateString(),
                to: email.to,
                emailBox,
            }
            this.emails.unshift(this.newEmail)
            emailService.save(this.newEmail)
            this.isComposedEmail = false
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
            console.log('this.filterBy:',this.filterBy)
        }
    },
    computed: {
        emailsToShow() {
            var emails = this.emails
            if (this.filterBy?.read) {
                if (this.filterBy.read === 'Read') {
                    emails = emails.filter(email => email.isRead === true)
                } else if (this.filterBy.read === 'Unread') {
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

