// todo: fixing sentAt (date presentation)

export default {
    props: ['email'],
    template: `
        <section class="email-preview">
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
`,
    data() {
        return {}
    },
    created() { },
    methods: {},
    computed: {
        sentAt() {
            const { sentAt } = this.email
            return new Date(sentAt)
        }
    },
    unmounted() { },
}