export default {
    props: ["info"],
    template: `
        <section class="note-video-container">
           <video width="280" height="170" controls>
                <source :src="info.url" type="video/ogg"> 
            </video>
            <h4 contenteditable="true" @blur="setTitle">{{info.title}}</h4>
        </section>
`,
    methods: {
        setTitle(ev) {
            const updatedtxt = ev.target.innerText
            this.$emit("setTitle", updatedtxt, 'note-video')
        }
    },
}