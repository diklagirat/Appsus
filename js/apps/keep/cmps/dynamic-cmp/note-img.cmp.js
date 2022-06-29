export default {
    props: ["info"],
    template: `
        <section class="note-img-container">
            <img :src="info.url"> 
            <h4>{{info.title}}</h4>
            </section>
`,
}