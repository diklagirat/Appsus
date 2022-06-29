export default {
    template: `
            <header class="app-header">
                 <nav>
                    <h1>App Sus</h1>
                        <ul>
                            <li>
                                <router-link to="/keep">Keep App</router-link>
                            </li>
                            <li>
                                <router-link to="/email">Email App</router-link>
                            </li>
                        </ul>
                </nav>
            </header>
`,
    data() {
        return {
        }
    },
    methods: {},
    computed: {}
}