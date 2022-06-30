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
<<<<<<< HEAD

        const { emailId } = this.$route.params
        emailService.get(emailId)
            .then(email => {
                this.email = email
                this.updateEmail()
            })



    },
    methods: {
        updateEmail(){
            console.log('this.email:',this.email)
            this.email.isRead = true
            emailService.save(this.email)
        }
=======
        const { emailId } = this.$route.params
        console.log('id', emailId)
>>>>>>> 60ea17e832323e1cd668d7b7ce1e0ad7bac014df
    },
    computed: {
        sentAt() {
            const { sentAt } = this.email
            return new Date(+sentAt).toDateString()
        }
    },
<<<<<<< HEAD
    // watch: {
    //     '$route.params.emailId': {
    //         handler() {
    //             const id = this.$route.params.emailId
    //             emailService.get(id).then(email => {
    //                 this.email = email
                    
    //                 // console.log('email:',email)
    //                 email.isRead = !email.isRead
    //                 emailService.save(email)
    //             })
    //         },
    //         immediate: true
    //     }
=======
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
>>>>>>> 60ea17e832323e1cd668d7b7ce1e0ad7bac014df

    // },
    unmounted() { },
}