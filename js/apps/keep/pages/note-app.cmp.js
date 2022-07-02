import noteList from "../cmps/note-list.cmp.js"
// import addNote from "../cmps/add-note.cmp.js"
import { noteService } from "../services/note.service.js"
export default {
    template: `
            <section class="keep-app">
               <note-list :notes="notesToShow"
                            @remove="removeNote"
                            @setPin="setPinNote"
                            @setNoteTitle="setNoteTitle"
                            @setNoteTodo="setNoteTodo"
                            @setNoteColor="setNoteColor"/>
            </section>
`,
    components: {
        noteList,
        // addNote,
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
        setNoteTodo({ updatedTodotxt, todoIdx, noteId }) {
            let noteToUpdate = this.notes.find((note) => note.id === noteId)
            noteToUpdate.info.todos[todoIdx].txt = updatedTodotxt
            noteService.save(noteToUpdate)
                .then((note) => {
                    this.note = note
                    console.log(' Note Todo txt Update successfully', this.notes)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        setNoteTitle({ updatedtxt, noteType, noteId }) {
            const noteToUpdate = this.notes.find((note) => note.id === noteId)

            if (noteType === 'note-txt') noteToUpdate.info.txt = updatedtxt
            else if (noteType === 'note-img') noteToUpdate.info.title = updatedtxt
            else noteToUpdate.info.label = updatedtxt

            noteService.save(noteToUpdate)
                .then((note) => {
                    this.note = note
                    console.log(' Note title Update successfully', this.notes)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        removeNote(noteId) {
            noteService.remove(noteId)
                .then(() => {
                    const idx = this.notes.findIndex((note) => note.id === noteId)
                    this.notes.splice(idx, 1)
                    console.log('Deleted successfully')
                }).catch(err => {
                    console.log(err)
                })
        },
        setPinNote(noteId) {
            const noteToUpdate = this.notes.find((note) => note.id === noteId)
            noteToUpdate.isPinned = !noteToUpdate.isPinned
            noteService.save(noteToUpdate)
                .then((note) => {
                    this.note = note
                    // console.log('Note Pin Update successfully', this.notes)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        setNoteColor({ color, noteId }) {
            let noteToUpdate = this.notes.find((note) => note.id === noteId)
            console.log(color)
            noteToUpdate.style.backgroundColor = color
            noteService.save(noteToUpdate)
                .then((note) => {
                    this.note = note
                    // console.log('Note Pin Update successfully', this.notes)
                })
                .catch(err => {
                    console.log(err)
                })
        },
    },
    computed: {
        notesToShow() {
            return this.notes
        },
    },
}