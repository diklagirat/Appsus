export default {
    template: `
         <section>
            <div class="filter-container">
                <input ref="noteInput" list="notes-list-options" id="notes-list-choice" name="notes-list-choice"
                             @input="setFilter" placeholder="Search a note.." v-model="searchTxt"/>
                <datalist id="notes-list-options">
                    <option value="Image note"></option>
                    <option value="Txt note"></option>
                    <option value="Todos note"> </option>
                </datalist>
            </div>
         </section>
`,
    data() {
        return {
            searchTxt: '',
            filterBy: {
                type: ''
            },
        };
    },
    created() {
    },
    mounted() {
        console.log(this.$refs.noteInput)
        this.$refs.noteInput.focus()
    },
    methods: {
        setFilter() {
            if (this.searchTxt === 'Txt note') this.filterBy.type = 'note-txt'
            else if (this.searchTxt === 'Image note') this.filterBy.type = 'note-img'
            else if (this.searchTxt === 'Todos note') this.filterBy.type = 'note-todos'
            this.$emit('setFilter', this.searchTxt, this.filterBy)
        }
    },
    watch: {
        searchTxt(newVal, oldVal) {
            console.log('Txt changed from:', oldVal, 'to:', newVal)
        },
    },
}




