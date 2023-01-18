<template>
    <article v-if="this.$store.state.a.searched">
        <h3><router-link to="sed-ut-dolorem-eligendi-quia-saepe">{{ post.title }}</router-link></h3>
        <div v-html="post.excerpt"></div>
    </article>
</template>
<script>
export default{
    props: {
        post: {
            type: Object,
            required: true
        }
    },
}
</script>