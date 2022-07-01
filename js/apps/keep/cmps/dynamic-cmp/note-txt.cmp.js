
export default {
    props: ["info"],
    template: `
        <section class="note-txt-container">
            <h4 contenteditable="true" @blur="reportVal">{{info.txt}}</h4>
            </section>
`,
    methods: {
        reportVal(ev) {
            const updatedtxt = ev.target.innerText
            this.$emit("setVal", updatedtxt, 'note-txt')
        }
    },
}