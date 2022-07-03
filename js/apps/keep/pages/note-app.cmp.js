import noteList from '../cmps/note-list.cmp.js'
import addNote from '../cmps/add-note.cmp.js'
import noteFilter from '../cmps/note-filter.cmp.js'
import { noteService } from '../services/note.service.js'

export default {
    template: `
            <section class="keep-app">
                <note-filter @setFilter="setFilter" />
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
        noteFilter,
    },
    data() {
        return {
            notes: null,
            txt: '',
            filters: null
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
        setFilter(searchTxt, filterBy) {
            this.filters = Object.assign({}, filterBy);
            this.txt = searchTxt
        },
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
            else if (noteType === 'note-img' || 'note-video' || 'note-audio') noteToUpdate.info.title = updatedtxt
            // else if (noteType === 'note-video') noteToUpdate.info.title = updatedtxt
            // else if (noteType === 'note-audio') noteToUpdate.info.title = updatedtxt
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
            var notes = this.notes
            if (this.filters?.type) {
                const regex = new RegExp(this.filters.type, 'i')
                notes = notes.filter(note => regex.test(note.type))
            }
            if (this.txt) {
                notes = notes.filter(note => {
                    if (note.type === 'note-txt') {
                        const regexText = new RegExp(this.txt, 'i')
                        return notes.filter(note => regexText.test(note.txt))
                    }
                    if (note.type === 'note-img' ) {
                        const regexImag = new RegExp(this.txt, 'i')
                        return notes.filter(note => regexImag.test(note.info.title))
                    }
                     if (note.type === 'note-audio' ) {
                        const regexAud = new RegExp(this.txt, 'i')
                        return notes.filter(note => regexAud.test(note.info.title))
                    }
                     if (note.type ===  'note-video' ) {
                        const regexVid = new RegExp(this.txt, 'i')
                        return notes.filter(note => regexVid.test(note.info.title))
                    }
                    if (note.type === 'note-todos') {
                        const regexTodo = new RegExp(this.txt, 'i')
                        return note.info.todos.some(todo => {
                            return regexTodo.test(todo.txt)
                        })
                    }
                })
            }
            return notes
        },
    },
}