import notePreview from './note-preview.cmp.js'
export default {
    props: ['notes'],
    template: `
        <section class="notes-list flex wrap">
                <ul class="notes-container ">
                    <li v-for="(note,idx) in notes" :key="note.id" class="notes-preview-card">
                        <note-preview :note="note"/>
                    </li>
                </ul>
            </section>
`,
    components: {
        notePreview,
    },

    data() {
        return {
            isShowList: false,
        };
    },
    methods: {
        // remove(noteId) {
        //     console.log('remove clicked', noteId)
        //         < div class="actions" >
        //             <button @click="moveToDetails(note.id)" title = "Show Note Info" > Details</button >
        //                 <button @click="remove(note.id)" title = "Delete Note" > Delete</button >
        // },
        moveToDetails(noteId) {
            console.log('moveToDetails clicked', noteId)
            this.$router.push('/note/' + noteId)
        }
    },
    computed: {

    },
}