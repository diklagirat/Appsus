import noteTxt from "../cmps/dynamic-cmp/note-txt.cmp.js"
import noteImg from "../cmps/dynamic-cmp/note-img.cmp.js"
import noteTodos from "../cmps/dynamic-cmp/note-todos.cmp.js"

export default {
    props: ['note'],
    template: `
    <section class="note-details">
        <div class="note-detail-card" v-if="note">
                <div>
                    <button class="pin-btn">Pin</button>
                    <button class="close-btn">X</button>
                </div>
                <div>
                        <component :is="note.type" :info="note.info"  :id="note.id" >
                        </component> 
                </div>
                <div class="edit-btn-container" v-if="isShowEditBtn">
                     <i @click="sendEmail" class="fas fa-paper-plane"></i>
                    <i @click="setColor" class="fas fa-palette"></i>
                    <i @click="pinNote" class="fas fa-thumbtack"></i>
                    <i @click="editNote" class="fas fa-edit"></i>
                    <i @click="removeNote" class="fas fa-trash"></i>
                </div>
            
            
        </div>
    </section>
`,
    created() {
    },
    data() {
        return {
            isShowEditBtn: true
        };
    },
    components: {
        noteTxt,
        noteImg,
        noteTodos,
    },
    methods: {
        sendEmail() {
            console.log('send Email..')
        },
        setColor() {
            console.log('select color..')
        },
        pinNote() {
            console.log('pin note..')
        },
        editNote() {
            console.log('edit note..')
        },
        removeNote() {
            console.log('remove note..')
        }
    },
    computed: {

    },

}

