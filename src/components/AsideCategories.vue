<template>
    <div class="p-4">
        <h4 class="fst-italic">Categories</h4>
        <ul class="list-group list-group">
            <li class="list-group-item d-flex justify-content-between align-items-start" v-for="category in categories"
                :key="category.id">
                <div class="ms-2 me-auto">
                    <router-link :to="'/category/' + category.id">
                        <div class="fw-bold">{{ category.name }}</div>
                    </router-link>    
                </div>
                <span class="badge bg-primary rounded-pill">{{ category.count }}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    created() {
        this.$store.dispatch("fetchCategories");
    },
    computed: {
        ...mapState(['categories'])
    }
}
</script>
