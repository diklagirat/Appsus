import noteList from "../cmps/note-list.cmp.js"
import { noteService } from "../services/note.service.js"

export default {
    template: `
            <section class="keep-app">
               <note-list :notes="notesToShow"/>
            </section>
`,
    components: {
        noteList,
    },
    data() {
        return {
            notes: null
        };
    },
    created() {
        // get all notes from server
        noteService.query()
            .then(
                notes => this.notes = notes)
            .catch(err => {
                console.log(err)
            })
    },
    methods: {},
    computed: {
        notesToShow() {
            return this.notes
        },
    },
}