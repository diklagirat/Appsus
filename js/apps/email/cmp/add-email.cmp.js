export default {
    name: 'add-email',
    template: `
        <section class="add-email">
            <button @click="composeEmail"><i class="fas fa-plus"></i> Compose</button>
            <div v-if="isComposedEmail" class="new-email-container">
                <h1>New Email</h1>
                <form @submit.prevent="add">
                    <label>To</label>
                    <input type="email" name="" id="" >
                </form>
            </div>
        </section>
`,
    data() {
        return {
            isComposedEmail: false,
            // newEmail: {
            //     to: '',
            // }
        }
    },
    created() { 
    },
    methods: {
        composeEmail() {
            this.isComposedEmail = !this.isComposedEmail
            console.log('Compose email')
        }
    },
    computed: {},
    unmounted() { },
}