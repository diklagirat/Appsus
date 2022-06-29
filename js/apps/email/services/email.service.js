import { storageService } from "../../../services/storage.service.js"
import { utilService } from "../../../services/util.service.js"
import emailsJson from '../../../../data/emails.json' assert {type: "json"}

const EMAILS_KEY = 'emails'
_createEmails()

export const emailService = {
    query,
    get,
    remove,
    save,
}

function query() {
    return storageService.query(EMAILS_KEY)
}

function _createEmails() {
    let emails = utilService.loadFromStorage(EMAILS_KEY)
    if (!emails || !emails.length) {
        emails = emailsJson;
        utilService.saveToStorage(EMAILS_KEY, emails)
    }
    return emails
}

function get(emailId) {
    return storageService.get(EMAILS_KEY, emailId)
}

function remove(emailId) {
    return storageService.remove(EMAILS_KEY, emailId)
}

function save(email) {
    if (email.id) return storageService.put(EMAILS_KEY, email)
    else return storageService.post(EMAILS_KEY, email)
}
