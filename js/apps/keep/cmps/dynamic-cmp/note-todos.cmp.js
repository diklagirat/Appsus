export default {
    props: ["info"],
    template: `
        <section class="note-todos-container">
            <h4>{{info.label}}</h4>
            <ul>
                <li v-for=" (todo, idx) in  info.todos" :key="idx">
                    <p>{{todo.txt}}</p>
                    <p>{{todo.doneAt}}</p>
                </li>
            </ul>
            
            </section>
`,
}