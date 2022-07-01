import notePreview from './note-preview.cmp.js'
import noteDetails from '../pages/note-details.cmp.js';
import { noteService } from "../../keep/services/note.service.js"
export default {
    props: ['notes'],
    template: `
        <section class="notes-list flex wrap">
            <div class="notes-list-container">
                    <ul class="notes-container ">
                        <li v-for="(note,idx) in notes" :key="note.id" class="notes-preview-card" >
                            <note-preview :note="note" @click.stop="select(note)" />
                        </li>
                    </ul>
                    <note-details v-if="selectedNote" :note="selectedNote" 
                            @remove="$emit('remove',$event)"
                            @pinNote="$emit('setPin', $event)"
                            @editNote="$emit('edit', $event)"
                            @updateNoteTxt="$emit('setNoteTitle', $event)"></note-details>
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
            selectedNote: null,
        };
    },
    methods: {
        select(note) {
            this.selectedNote = note
        },
    },
}