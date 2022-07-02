import noteList from "../cmps/note-list.cmp.js"
import addNote from "../cmps/add-note.cmp.js"
import { noteService } from "../services/note.service.js"
export default {
    template: `
            <section class="keep-app">
               <note-list :notes="notesToShow"
                            @remove="removeNote"
                            @setPin="setPinNote"
                            @setNoteTitle="setNoteTitle"
                            @setNoteTodo="setNoteTodo"
                            @setNoteColor="setNoteColor"
                            @duplicateNote="duplicateNote"/>
            </section>
`,
    components: {
        noteList,
        addNote,
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
        duplicateNote(noteToCopy) {
            let newNote
            if (noteToCopy.type === 'note-txt') {
                newNote = noteService.getEmptyTextNote()
                newNote.info.txt = noteToCopy.info.txt
                newNote.style = noteToCopy.style
                newNote.isPinned = noteToCopy.isPinned
            }
            else if (noteToCopy.type === 'note-img') {
                newNote = noteService.getEmptyImageNote()
                newNote.info.title = noteToCopy.info.title
                newNote.info.url = noteToCopy.info.url
                newNote.style = noteToCopy.style
                newNote.isPinned = noteToCopy.isPinned
            }
            else {
                newNote = noteService.getEmptyTodoNote()
                console.log('noteToCopy', noteToCopy)
                newNote.info.label = noteToCopy.info.label
                noteToCopy.info.todos.map(todo => {
                    newNote.info.todos.push(todo)
                })
            }
            noteService.save(newNote)
                .then((note) => {
                    this.note = note
                    this.notes.push(newNote)
                    console.log('Duplicate note update successfully', this.notes)
                })
                .catch(err => {
                    console.log(err)
                })

        },
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
            const noteToUpdateIdx = this.notes.findIndex((note) => note.id === noteId)
            noteToUpdate.isPinned = !noteToUpdate.isPinned
            noteService.save(noteToUpdate)
                .then((note) => {
                    // Move to the beginning of the array
                    let temp = this.notes[0]
                    this.notes[0] = this.notes[noteToUpdateIdx]
                    this.notes[noteToUpdateIdx] = temp
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
                    console.log('Color update successfully', this.notes)
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