export default {
    props:["emails"],
    template: `
        <section class="email-folder-list">
            <div class="">
                <p>Inbox: ({{emails}})</p>
                <i class="fas fa-external-link"></i>
            </div>
            <div class="">
                <p>Starred</p>

            </div>
            <div class="">
                <i class="fas fa-edit"></i>
                <p>Drafts</p>
            </div>
            <div class="">
                <i class="fa-solid fa-inbox-out"></i>
                <p>Sent</p>
            </div>
            <div class="">
                <i class="fas fa-trash"></i>
                <p>Deleted</p>
            </div>
        </section>
`,
    data() {
        return {
           
        }
    },
    created() {

     },
    methods: {},
    computed: {},
    unmounted() { },
}