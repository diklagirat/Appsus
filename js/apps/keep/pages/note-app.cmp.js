import noteList from "../cmps/note-list.cmp.js"
import { noteService } from "../services/note.service.js"

//TODO: add user msg to cmp 
export default {
    template: `
            <section class="keep-app">
               <note-list :notes="notesToShow" @updateNotes=updateNotes 
                            @remove="removeNote"
                            @edit="editNote"
                            @setPin="setPinNote"/>
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
        noteService.query()
            .then(
                notes => this.notes = notes)
            .catch(err => {
                console.log(err)
            })
    },
    methods: {
        removeNote(noteId) {
            console.log('delete APP', noteId)
            noteService.remove(noteId)
                .then(() => {
                    const idx = this.notes.findIndex((note) => note.id === noteId)
                    this.notes.splice(idx, 1)
                    console.log('Deleted successfully')
                }).catch(err => {
                    console.log(err)
                })
        },
        editNote(noteId) {
            console.log('edit APP', noteId)
        },
        setPinNote(noteId) {
            const noteToUpdate = this.notes.find((note) => note.id === noteId)
            noteToUpdate.isPinned = !noteToUpdate.isPinned
            noteService.save(noteToUpdate)
                .then((note) => {
                    this.note = note
                    console.log('Update successfully', this.notes)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    },
    computed: {
        notesToShow() {
            return this.notes
        },
    },
}