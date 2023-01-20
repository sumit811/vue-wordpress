<template>
    <div class="p-4">
        <h4 class="fst-italic">Tags</h4>
        <router-link :to="'/tag/' + tag.id" v-for="tag in tags" :key="tag.id" class="tag">
            <button type="button" class="btn btn-primary position-relative">
                {{ tag.name }}
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {{ tag.count }}
                    <span class="visually-hidden">Posts</span>
                </span>
            </button>
        </router-link>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    created() {
        this.$store.dispatch("fetchTags");
    },
    computed: {
        ...mapState(['tags'])
    }
}
</script>
<style scoped>
.tag{
    display: inline-block;
    margin-right: 20px;
    margin-bottom: 10px;
}
</style>