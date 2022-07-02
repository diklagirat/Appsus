

export default {
    name: 'email-preview',
    props: ['email'],
    template: `
        <router-link :to="'/email/'+email.id" class="clean-link">
            <section class="email-preview" >
                <div class="cell sender">
                      <p>{{email.to}}</p>
                </div>
                <div class="cell subject">
                    <p>{{email.subject}}</p>
                </div>
                <div class="cell date">
                    <p>{{sentAt}}</p>
                </div>
            </section>
        </router-link>
        <router-link :to="/email/">
        <div class="cell star" @click="setStar">
            <p><i class="far fa-star"></i></p>
        </div>
    </router-link>
        <!-- <div class="email-preview">
            <h1>Hello</h1>
        </div> -->
`,
    data() {
        return {}
    },
    created() { },
    methods: {
        setStar(){
            const emailId = this.email.id
            console.log('click star in preview');
            console.log('emailId:',emailId)
            this.$emit('setStar', emailId)
        }
    },
    computed: {
        sentAt() {
            const { sentAt } = this.email
            return new Date(+sentAt).toDateString()
        },

    },
    unmounted() { },
    emits: ["setStar"]
}