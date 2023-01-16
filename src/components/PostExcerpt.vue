<template>
    <article>
        <h3><router-link :to="post.slug">{{ post.title.rendered }}</router-link></h3>
        <div v-html="removeMoreLink(post.excerpt.rendered, post.slug)"></div>
        <footer>
            <p>Published: {{ post.date }}</p>
        </footer>
    </article>
    <!-- <article v-for="post in posts" :key="post.id">
        <h3>
            <router-link :to="post.slug">{{ post.title.rendered }}</router-link>
        </h3>
        <section v-once v-html="removeMoreLink(post.excerpt.rendered, post.slug)"></section>
        <footer>
            <p v-once>Published: {{ post.date }}</p>
        </footer>
    </article> -->
</template>
<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    methods: {
        removeMoreLink(v) {
            let parser = new DOMParser();
            const doc = parser.parseFromString(v, "text/html");
            let links = doc.getElementsByClassName("more-link");
            [...links].forEach((link) => {
                console.log('link:-',link)
                // link.setAttribute("href", "#");
                link.remove();
            });
            // console.dir(doc);
            // console.log(doc.documentElement.innerHTML);
            return doc.documentElement.innerHTML;
        },
    },
}
</script>