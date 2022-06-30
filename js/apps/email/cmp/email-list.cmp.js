import emailPreview from "./email-preview.cmp.js"

// todo: implement a mini-preview with a flag on the model (not in here) - later' when have time

export default {
    props: ['emails'],
    template: `
        <section class="emails-list table">
            <ul>
                <li v-for="(email, idx) in emails" :key="email.id" class="email-preview-card clean-list row" >
                        <router-link :to="'/email/'+email.id" :email="email">
                        <email-preview :email="email"/>
                        </router-link>

                    </li>
                </ul>
        </section>
`,
    components: {
        emailPreview
    },
    data() {
        return {
            isOpen: false
        }
    },
    created() { },
    methods: {
       openPreview(){
        if (!this.isOpen) {
           console.log('open view')
           this.isOpen = true
        } else {
            console.log('close view')
            this.isOpen = false
        }
       }
    },
    computed: {},
    unmounted() { },
}
