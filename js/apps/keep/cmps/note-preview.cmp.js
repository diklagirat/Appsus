import noteTxt from "./dynamic-cmp/note-txt.cmp.js"
import noteImg from "./dynamic-cmp/note-img.cmp.js"
import noteTodos from "./dynamic-cmp/note-todos.cmp.js"

export default {
    props: ['note'],
    template: `
        <section>
                <component :is="note.type" :info="note.info">
                </component> 
        </section>
`,
    components: {
        noteTxt,
        noteImg,
        noteTodos,
    },
    created() {
    },
    data() {
        return {
        };
    },
    methods: {

    },
    computed: {

    },
}