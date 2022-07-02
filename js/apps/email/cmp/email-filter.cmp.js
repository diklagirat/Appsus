export default {
    name: 'email-filter',
    template: `
        <section class="email-filter">
            <input placeholder='Search' list="search-options" id="search" name="search" v-model="filterBy.read" @change="setFilter"/>
            <datalist id="search-options">
                <option>Read</option>
                <option>Unread</option>
            </datalist>
        </section>
`,
    data() {
        return {
            filterBy: {
                read: '',
                emailBox: ''
            },
        }
    },
    created() { },
    methods: {
        setFilter() {
            // console.log('setting filter:', this.filterBy)
            console.log('...this.filterBy:',this.filterBy)
            this.$emit('filtered', this.filterBy)
        }
    },
    computed: {},
    unmounted() { },
    // watch: {
    //     filterBy: {
    //         handler(newVal) {
    //             console.log('Filter changed', newVal)
    //         },
    //         deep: true
    //     }
    // }
}