import emailPreview from "./email-preview.cmp.js"

// TODO: implement a mini-preview with a flag on the model (not in here) - later, when i have time

export default {
    name: 'email-list',
    props: ['emails'],
    template: `
        <section>
            <ul class="emails-list flex column">
                <li v-for="(email, idx) in emails" :key="email.id" class="email-preview-card clean-list row" :class="{unread: !email.isRead}">
                        <!-- <router-link :to="'/email/'+email.id" class="clean-link"> -->
                            <email-preview :email="email" @setStar="$emit('setStar', $event)"/>
                        <!-- </router-link> -->
                    </li>
                </ul>
        </section>
`,
    components: {
        emailPreview
    },
    data() {
        return {
            email: null,
            isOpen: false
        }
    },
    created() {

    },
    methods: {
        openPreview() {
            if (!this.isOpen) {
                console.log('open view')
                this.isOpen = true
            } else {
                console.log('close view')
                this.isOpen = false
            }
        },
        // setStar(emailId){
        //     console.log('click star in list');
        //     console.log('emailId:',emailId)
        //     this.$emit('starred', emailId)
        // }

    },
    computed: {

    },
    unmounted() { },
}
