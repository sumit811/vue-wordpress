<template>
    <article class="overflow-auto">
        <img v-if="post?._embedded?.['wp:featuredmedia']?.[0].media_details?.sizes?.thumbnail?.source_url"
            :src="post?._embedded?.['wp:featuredmedia']?.[0].media_details?.sizes?.thumbnail?.source_url"
            class="rounded float-start imgshadow me-3 mb-3" alt="...">

        <h3><router-link :to="{ path: '/' + post.slug }">{{ post.title.rendered }}</router-link></h3>
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
import mixinOne from '@/mixin/mixinOne';
export default {
    mixins: [mixinOne],
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    methods: {
        // removeMoreLink(v) {
        //     let parser = new DOMParser();
        //     const doc = parser.parseFromString(v, "text/html");
        //     let links = doc.getElementsByClassName("more-link");
        //     [...links].forEach((link) => {
        //         console.log('link:-',link)
        //         // link.setAttribute("href", "#");
        //         link.remove();
        //     });
        //     // console.dir(doc);
        //     // console.log(doc.documentElement.innerHTML);
        //     return doc.documentElement.innerHTML;
        // },
    },
}
</script>
<style scoped>
article {
    background-color: #cff4fc;
    border: 1px solid #9eeaf9;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 30px;
    box-shadow: 0px 1px 7px 2px #9eeaf9;
    color: #087990;
}

article h3 a {
    text-decoration: none;
    color: #0dcaf0;
}</style>