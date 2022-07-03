

export default {
    name: 'email-preview',
    props: ['email'],
    template: `
    <section class="email-preview-container">
        <article class="cell star" @click.stop="setStar">
        <router-link :to="/email/">
                <p><i class="far fa-star"></i></p>
            </router-link>
        </article>
        <article class="email-preview" >
                <router-link :to="'/email/'+email.id" class="clean-link">
                <div class="cell sender">
                      <p>{{email.to}}</p>
                </div>
                <div class="cell subject">
                    <p>{{email.subject}}</p>
                </div>
                <div class="cell date" type="date">
                    <p>{{sentAt}}</p>
                </div>
            </router-link>
        </article>
    </section>

        <!-- <div class="email-preview">
            <h1>Hello</h1>
        </div> -->
`,
    data() {
        return {}
    },
    created() { },
    methods: {
        setStar() {
            const emailId = this.email.id
            console.log('click star in preview');
            console.log('emailId:', emailId)
            this.$emit('setStar', emailId)
        }
    },
    computed: {
        sentAt() {
            const { sentAt } = this.email
            return new Date(sentAt).toDateString()
        },
    },
    unmounted() { },
    emits: ["setStar"]
}