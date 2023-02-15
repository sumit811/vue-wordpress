<template>
    <div class="p-4">
        <h4 class="fst-italic">Recent Comments</h4>
        <ul class="list-group list-group">
            <li class="list-group-item d-flex justify-content-between align-items-start"
                v-for="comment in recent_comments" :key="comment.id">
                <div class="ms-2 me-auto">
                    <router-link :to="'/category/' + comment.id">
                        <div class="fw-bold">{{ comment.content.rendered | stripHTML }}</div>
                    </router-link>
                </div>
                <span class="badge bg-primary rounded-pill">{{ comment.author_name }}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    created() {
        this.$store.dispatch("c/recent_comments")
    },
    computed: {
        ...mapState('c', ['recent_comments'])
    },
    filters: {
        stripHTML: function (value) {
            const div = document.createElement('div')
            div.innerHTML = value
            const text = div.textContent || div.innerText || ''
            return text.slice(0,70);
        }
    }
}
</script>
<style scoped>

</style>