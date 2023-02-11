<template>
    <article v-if="singlePost.title">
        <!-- <pre>
        {{singlePost}}
        </pre> -->
        <h1>{{ singlePost.title.rendered }}</h1>
        <section>
            <div v-html="singlePost.content.rendered"></div>
        </section>
        <hr />
        <footer>
            <div class="row">
                <div class="col">Published : {{ singlePost.date }}</div>
                <div class="col">
                    <p>Categorized as
                        <router-link class="cat-cls" v-for="c in catList" :to="'/category/' + c.id" :key="c.id">{{ c.name }}</router-link>
                    </p>
                    <p v-if="tagList">Tagged <router-link class="cat-cls" v-for="t in tagList" :to="'/category/' + t.id" :key="t.id">{{ t.name }}</router-link></p>
                </div>
            </div>
        </footer>
    </article>
</template>
<script>
export default {
    name: 'SinglePost',
    data() {
        return {
        }
    },
    computed: {
        catList: function () {
            let catArr = [...this.singlePost.categories];
            console.log('catArr',catArr);
            return this.$store.state.categories.filter(c => {
                if (catArr.includes(c.id)) {
                   return true;
                }
            })
        },
        tagList: function () {
            let ttArr = [...this.singlePost.tags];
            console.log('ttArr',ttArr);
            return this.$store.state.tags.filter(t => {
                if (ttArr.includes(t.id)) {
                   return true;
                }
            })
        }
    },
    props: {
        singlePost: {
            required: true,
        }
    },
    mounted() {
        // console.log(typeof this.singlePost,this.singlePost);
    },
}
</script>
<style scoped>
section>>>img {
    max-width: 100%;
}
.cat-cls:not(:last-of-type){
    margin-right: 10px;
}
.cat-cls:not(:last-of-type):after{
    content: ',';
}
</style>
