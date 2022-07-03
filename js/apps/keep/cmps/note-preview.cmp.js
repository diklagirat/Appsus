import noteTxt from "./dynamic-cmp/note-txt.cmp.js"
import noteImg from "./dynamic-cmp/note-img.cmp.js"
import noteTodos from "./dynamic-cmp/note-todos.cmp.js"
import noteDetails from "../pages/note-details.cmp.js"
import noteVideo from "./dynamic-cmp/note-video.cmp.js"
import noteAudio from "./dynamic-cmp/note-audio.cmp.js"

export default {
    props: ['note'],
    template: `
        <section>
                <component :is="note.type" :info="note.info"></component> 
        </section>
`,
    components: {
        noteTxt,
        noteImg,
        noteTodos,
        noteDetails,
        noteVideo,
        noteAudio,
    },
}