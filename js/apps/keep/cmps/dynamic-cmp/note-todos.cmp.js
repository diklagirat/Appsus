export default {
    props: ["info"],
    template: `
        <section class="note-todos-container">
            <h4 contenteditable="true" @blur="setTitle">{{info.label}}</h4>
            <ul>
                <li v-for=" (todo, idx) in  info.todos" :key="idx">
                    <p contenteditable="true">{{todo.txt}}</p>
                    <p contenteditable="true">{{todo.doneAt}}</p>
                </li>
            </ul>
            
            </section>
`, methods: {
        setTitle(ev) {
            const updatedtxt = ev.target.innerText
            this.$emit("setTitle", updatedtxt, 'note-todos')
        }
    },
}