import { emailService } from '../services/email.service.js'
import emailList from '../cmp/email-list.cmp.js'
import emailFolderList from '../cmp/email-folder-list.cmp.js'
import addEmail from '../cmp/add-email.cmp.js'
import emailFilter from '../cmp/email-filter.cmp.js'

//TODO: Fix newEmail date presentation
// TODO: Show last email as the first email

export default {
    template: `
        <section class="email-app flex">
            <article class="email-main-container">
                <div class ="email-options">
                    <div class="options-container">
                        <button @click="composeEmail" class="compose flex align-items" >
                                <h1>Compose</h1>
                                <i class="fas fa-plus"></i>
                            </button>
                            <email-filter @filtered="setFilter"/>
                            <email-folder-list :emails="emailsInInbox" @filtered="setFilter"/>
                    </div>
                 </div>
            </article>
             <div class="mail-masseges">
                <email-list :emails="emailsToShow" @setStar="starEmail"/>

             </div>
                <add-email v-if="isComposedEmail" @added="addEmail"/>

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
            var emailBox = 'inbox'
            if (email.to === this.userEmail) emailBox = 'sent'
            var date = new Date()
            console.log('date:', date.toDateString())
            this.newEmail = {
                subject: email.subject,
                body: email.body,
                isRead: false,
                sentAt: +date.toDateString(),
                to: email.to,
                emailBox,
                isStarred: false,
            }
            this.emails.push(this.newEmail)
            emailService.save(this.newEmail)
            this.isComposedEmail = false
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
            console.log('this.filterBy:', this.filterBy)

        },
        starEmail(emailId) {
            console.log('star email', emailId)

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
            if (this.filterBy?.emailBox) {
                emails = emails.filter(email => email.emailBox === this.filterBy)
                console.log('emails:', emails)
            }
            // console.log('emails, emails[0].sentAt:', emails, emails[0].sentAt)
            emails.sort((email1, email2) => +email2.sentAt - +email1.sentAt)
            return emails
        },
        emailsInInbox() {
            if (!this.emails || !this.emails.length) return this.emails
            return this.emails.filter(email => (email.isRead === false)).length
        },
    },
    unmounted() { },
}

