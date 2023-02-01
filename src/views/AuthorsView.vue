<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <div class="row align-items-center">
                    <div class="col-12 col-sm-6">
                        <h1>Our Authors</h1>
                    </div>
                    <div class="col-12 col-sm-6">
                        <input type="search" class="form-control" v-model="authorsearch" @input="authorSearch" placeholder="Search by author">
                    </div>
                </div>
                <hr />
                <section>
                    <Author v-for="author in authorSearch()" :key="author.id" :author-img="author.avatar_urls"
                        :author-name="author.name" :author-id="author.id" :author-slug="author.slug">
                        {{ author.description }}
                    </Author>
                </section>
            </div>
            <div class="col-md-4">
                <SideBar />
            </div>
        </div>
    </div>

</template>    
<script>
import SideBar from "@/components/SideBar.vue";
import Author from "@/components/AuthorBio.vue"
export default {
    name: 'AuthorsView',
    data() {
        return {
            authorsearch: '',
        }
    },
    components: {
        SideBar, Author
    },
    created() {
        this.fetchAuthors();
    },
    
    methods: {
        authorSearch() {
            return this.$store.state.authors.filter(author => author.name.toLowerCase().startsWith(this.authorsearch.toLowerCase()));
        },
        fetchAuthors() {
            this.$store.dispatch('fetchAuthors').then(() => {
                this.authors = this.authors_list
            });
        }
    }
}
</script>
