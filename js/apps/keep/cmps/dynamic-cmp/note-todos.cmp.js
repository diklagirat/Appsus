export default {
    props: ["info"],
    template: `
        <section class="note-todos-container">
            <h4>{{info.label}}</h4>
            <ul>
                <li v-for=" (todo, idx) in  info.todos" :key="idx">
                    <p contenteditable="true" @blur="reportVal">{{todo.txt}}</p>
                    <p contenteditable="true" @blur="reportVal">{{todo.doneAt}}</p>
                </li>
            </ul>
            
            </section>
`, methods: {
        reportVal(ev) {
            console.log('reportVal: note-todo, <p> ,{{todo.txt} / {todo.doneAt}', ev)
            // this.$emit("setVal", ev)
        }
    },
}