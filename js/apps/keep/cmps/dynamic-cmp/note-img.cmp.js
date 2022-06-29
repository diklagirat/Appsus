export default {
    props: ["info"],
    template: `
        <section class="note-img-container">
            <img :src="info.url"> 
            <h2>{{info.title}}</h2>
            </section>
`,
}