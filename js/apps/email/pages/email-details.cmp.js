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
        noteDetails,
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