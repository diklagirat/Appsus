export default {
    name: 'add-email',
    template: `
        <section class="add-email">
            <div class="new-email-container">
                <h1>New Email</h1>
                <form @submit.prevent=add> 
                    <label>To</label>
                    <input type="email" name="email-to" id="email-to" v-model="newEmail.to" required>

                    <label>Subject</label>
                    <input type="text" name="subject" id="subject" v-model="newEmail.subject">

                    <textarea name="email-body" id="email-body" cols="100" rows="30" v-model="newEmail.body"></textarea>

                    <button>Send</button>

                </form>
            </div>
        </section>
`,
    data() {
        return {
            newEmail: {
                to: '',
                subject: '',
                body: '',
            }
        }
    },
    created() {
    },
    methods: {
        add(){
            this.$emit('added', this.newEmail)
        },
        
    },
    computed: {},
    unmounted() { },
}