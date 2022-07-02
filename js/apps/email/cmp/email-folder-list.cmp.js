export default {
    props:["emails"],
    template: `
        <section class="email-folder-list">
            <div class="" @click="$emit('filtered', 'inbox')">
                <i class="fas fa-inbox"></i>
                <p>Inbox: ({{emails}})</p>
            </div>
            <div class="">
                <i class="fas fa-star"></i>
                <p>Starred</p>
            </div>
            <div class="">
                <i class="fab fa-firstdraft"></i>
                <p>Drafts</p>
            </div>
            <div class="sent-emails" @click="setFilter">
                <i class="fas fa-share-square"></i>
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
    methods: {
        setFilter(){
            this.$emit('filtered','sent')
        }
    },
    computed: {},
    unmounted() { },
}