import noteList from "../cmps/note-list.cmp.js"
import { noteService } from "../services/note.service.js"
export default {
    template: `
            <section class="keep-app">
               <note-list :notes="notesToShow"
                            @remove="removeNote"
                            @edit="editNote"
                            @setPin="setPinNote"
                            @setNoteTitle="setNoteTitle"/>
            </section>
`,
    components: {
        noteList,
    },
    data() {
        return {
            notes: null,
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
        setNoteTitle({ updatedtxt, noteType }) {
            console.log('APP', updatedtxt, noteType)
        },
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