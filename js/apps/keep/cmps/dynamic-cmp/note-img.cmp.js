export default {
    props: ["info"],
    template: `
        <section class="note-img-container">
            <img :src="info.url"> 
            <h4 contenteditable="true" @blur="reportVal">{{info.title}}</h4>
            </section>
`, methods: {
        reportVal(ev) {
            console.log('reportVal: note-img, <h4> ,{{info.title}', ev)

            // this.$emit("setVal", this.txt)
        }
    },
}