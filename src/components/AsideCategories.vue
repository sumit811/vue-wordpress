<template>
    <div class="p-4">
        <h4 class="fst-italic">Categories</h4>
        <ol class="list-unstyled mb-0">
            <li v-for="category in categories" :key="category.id" class="mt-1">
                <router-link to="/category/">
                    <button type="button" class="btn btn-primary">
                        {{category.name}} <span class="badge badge-light">{{ category.count }}</span>
                    </button>
                </router-link>
            </li>
        </ol>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    created() {
        this.$store.dispatch("fetchCategories");
    },
    computed:{
        ...mapState(['categories'])
    }
}
</script>
