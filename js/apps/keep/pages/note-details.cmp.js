import noteTxt from "../cmps/dynamic-cmp/note-txt.cmp.js"
import noteImg from "../cmps/dynamic-cmp/note-img.cmp.js"
import noteTodos from "../cmps/dynamic-cmp/note-todos.cmp.js"
export default {
    props: ['note'],
    template: `
    <section class="note-details">
        <div class="note-detail-card" v-if="note">
                <div>
                        <button class="close-btn" @click="$emit('closeDetaile')">X</button>
                </div>
                <div>
                        <component :is="note.type" :info="note.info"  :id="note.id"
                                                    @setTitle="setTitle"
                                                    @setTodoTxt="setNoteTodoTxt"></component> 
                </div>
                <div class="edit-btn-container">
                        <i @click="sendEmail" class="fas fa-paper-plane"></i>
                        <i @click="setColor" class="fas fa-palette">
                                 <div class="color-container" v-if="isClicked">
                                    <span class="color-opt" @click="setColor('rgb(170, 255, 238)')" style="background-color: rgb(170, 255, 238);"> &nbsp; </span>
                                    <span class="color-opt" @click="setColor('rgb(162, 171, 155)')" style="background-color: rgb(162, 171, 155);"> &nbsp; </span>
                                    <span class="color-opt" @click="setColor('rgb(136, 187, 255)')" style="background-color: rgb(136, 187, 255);"> &nbsp; </span>
                                    <span class="color-opt" @click="setColor('rgb(166, 199, 239)')" style="background-color: rgb(166, 199, 239);"> &nbsp; </span>
                                    <span class="color-opt" @click="setColor('rgb(240, 229, 183)')" style="background-color: rgb(240, 229, 183);"> &nbsp; </span>
                            </div> 
                        </i>
                    <i class="fas fa-thumbtack" @click="pinNote" ></i>
                    <i class="fas fa-copy" @click="duplicateNote"></i>
                    <i class="fas fa-trash" @click="removeNote" ></i>
                </div>
        </div>
    </section>
`,
    created() {
    },
    data() {
        return {
            isShowEditBtn: true,
            isClicked: false
        };
    },
    components: {
        noteTxt,
        noteImg,
        noteTodos,
    },
    methods: {
        duplicateNote() {
            const note = this.note
            this.$emit('duplicateNote', note)
        },
        setNoteTodoTxt(updatedTodotxt, todoIdx) {
            const noteId = this.note.id
            this.$emit('setNoteTodoTxt', { updatedTodotxt, todoIdx, noteId })
        },
        setTitle(updatedtxt, noteType) {
            const noteId = this.note.id
            this.$emit('updateNoteTxt', { updatedtxt, noteType, noteId })
        },
        sendEmail() {
            console.log('send Email..')
        },
        setColor(color) {
            this.isClicked = !this.isClicked
            const noteId = this.note.id
            this.$emit('setColor', { color, noteId });
        },
        pinNote() {
            console.log('pin note..')
            this.$emit('pinNote', this.note.id)
        },
        removeNote() {
            this.$emit('remove', this.note.id)
        }
    },
}

