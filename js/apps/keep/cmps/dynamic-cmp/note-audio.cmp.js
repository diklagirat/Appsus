export default {
    props: ['info'],
    template: `
    <section class="note-audio-container">    
            <audio controls>
                <source :src="info.url" type="audio/ogg">
                <source :src="info.url" type="audio/mpeg">
            </audio>
            <h4 contenteditable="true" @blur="setTitle">{{info.title}}</h4>
    </section>
    `,
    methods: {
        setTitle(ev) {
            const updatedtxt = ev.target.innerText
            this.$emit("setTitle", updatedtxt, 'note-audio')
        }
    },
}