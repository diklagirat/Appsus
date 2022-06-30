import notePreview from './note-preview.cmp.js'
import noteDetails from '../pages/note-details.cmp.js';
export default {
    props: ['notes'],
    template: `
        <section class="notes-list flex wrap">
            <div class="notes-list-container">
                    <ul class="notes-container ">
                        <li v-for="(note,idx) in notes" :key="note.id" class="notes-preview-card">
                            <note-preview :note="note" @click="select(note)"/>
                        </li>
                    </ul>
                    <note-details v-if="selectedNote" :note="selectedNote"></note-details>
            </div>
            </section>
`,
    components: {
        notePreview,
        noteDetails,
    },

    data() {
        return {
            isShowList: false,
            selectedNote: null
        };
    },
    methods: {
        select(note) {
            console.log('clicked', note)
            this.selectedNote = note
        },
        moveToDetails(noteId) {
            console.log('moveToDetails clicked', noteId)
            this.$router.push('/note/' + noteId)
        }
    },
    computed: {

    },
}