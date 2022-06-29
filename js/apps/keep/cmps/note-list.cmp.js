import notePreview from './note-preview.cmp.js'
export default {
    props: ['notes'],
    template: `
        <section class="notes-list">
        <h2>In list</h2>
                <ul>
                    <li v-for="(note,idx) in notes" :key="note.id" class="note-preview-card">
                        <note-preview :note="note"/>
                        <div class="actions">
                            <button @click="moveToDetails(note.id)" title="Show Note Info"> Details</button >
                            <button @click="remove(note.id)" title="Delete Note" >Delete</button>
                        </div>
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
        remove(noteId) {
            console.log('remove clicked', noteId)
        },
        moveToDetails(noteId) {
            console.log('moveToDetails clicked', noteId)
            this.$router.push('/note/' + noteId)
        }
    },
    computed: {

    },
}