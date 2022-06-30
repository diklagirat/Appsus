import { storageService } from "../../../services/storage.service.js"
import { utilService } from "../../../services/util.service.js"
import notesJson from '../../../../data/notes.json' assert {type: "json"}

const NOTES_KEY = 'notes'
_createNotes()

export const noteService = {
    query,
    get,
    remove,
    save,
}

function query() {
    return storageService.query(NOTES_KEY);
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY);
    if (!notes || !notes.length) {
        notes = notesJson;
        utilService.saveToStorage(NOTES_KEY, notes);
    }
    return notes;
}

function get(noteId) {
    return storageService.get(NOTES_KEY, noteId)
}

function remove(noteId) {
    console.log(noteId)
    return storageService.remove(NOTES_KEY, noteId)
}

function save(note) {
    if (note.id) return storageService.put(NOTES_KEY, note)
    else return storageService.post(NOTES_KEY, note)
}
