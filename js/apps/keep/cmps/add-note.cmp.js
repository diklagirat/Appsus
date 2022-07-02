import { noteService } from "../services/note.service.js";

export default {
    template: `
             <section class="add-note">
                <div class="add-note-container">
                <form  @submit.prevent="save"=>
                    <input type="text" v-model="inputText" :placeholder="placeholderText"/>
                </form>
                    <div class="add-btn">
                        <i class="fas fa-font" @click="addTextNote" :class= "[isActive ? 'active' : '']"></i>
                        <i class="fas fa-image" ></i>
                        <i class="fab fa-youtube"></i>
                        <i class="fas fa-volume-up"></i>
                        <i class="fas fa-list-ul"></i>
                    </div>
                </div> 
             </section>    
`,
    components: {
    },

    data() {
        return {
            imageNote: null,
            textNote: null,
            todoNote: null,
            isActive: null,
            inputText: '',
            placeholderTxt: 'Enter Text here...',
            noteToAdd: {
                text: '',
                image: '',
                todo: '',
                video: '',
            }
        };
    },
    create() {
        // this.imageNote = noteService.getEmptyImageNote()
        // this.todoNote = noteService.getEmptyTodoNote()
    },
    methods: {
        addTextNote() {
            //0. update noteToAdd.text
            //1. ADD class-active
            //2. change text placeholder to Enter text here..
            // 3. get empty note
            // 4. set user input
            this.noteToAdd.text = 'text'
            this.placeholderTxt = 'Enter Text here...'
            this.textNote = noteService.getEmptyTextNote()
            console.log(this.textNote)
            this.textNote.info.txt = this.inputText
        },
    },
    computed: {
        placeholderText() {
            return this.placeholderTxt
        },
    },
}