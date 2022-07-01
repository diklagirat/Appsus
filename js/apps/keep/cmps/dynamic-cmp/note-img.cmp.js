export default {
    props: ["info"],
    template: `
        <section class="note-img-container">
            <img :src="info.url"> 
            <h4 contenteditable="true" @blur="setTitle">{{info.title}}</h4>
            </section>
`, methods: {
        setTitle(ev) {
            const updatedtxt = ev.target.innerText
            this.$emit("setTitle", updatedtxt, 'note-img')
        }
    },
}