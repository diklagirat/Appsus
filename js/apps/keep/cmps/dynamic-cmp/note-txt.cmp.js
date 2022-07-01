
export default {
    props: ["info"],
    template: `
        <section class="note-txt-container">
            <h4 contenteditable="true" @blur="setTitle">{{info.txt}}</h4>
            </section>
`,
    methods: {
        setTitle(ev) {
            const updatedtxt = ev.target.innerText
            this.$emit("setTitle", updatedtxt, 'note-txt')
        }
    },
}