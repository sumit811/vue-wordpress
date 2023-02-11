<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 post-box-js">
                <h2>{{ postbyDetail }}</h2>
                <PostExcerpt :post="post" v-for="post in postBy" :key="post.id" />
            </div>
            <div class="col-md-4">
                <SideBar />
            </div>
        </div>
    </div>
</template>
<script>
import SideBar from "@/components/SideBar.vue";
import PostExcerpt from "./PostExcerpt.vue"
import { mapState } from "vuex";
export default {
    name: 'PostBy',
    data() {
        return {
            category: null,
        }
    },
    components:{
        SideBar, PostExcerpt
    },
    computed: {
        ...mapState('a', ['postBy']),
        postbyDetail: function () {
            return this.$route.name + ':' + this.tagIdtoName(this.$route.name,this.$route.params.id)
        },
    },
    watch:{
        $route(to,from){
            if(to !== from){
                this.fetchPostby();
            }
        },
    },
    methods: {
        tagIdtoName(type,id){
            let res = ''
            if(type=='tags'){
                res = this.$store.state.tags.filter(t => { 
                    if(id==t.id)
                    return true;
                });
            } else if(type=='category'){
                res = this.$store.state.categories.filter(t => { 
                    if(id==t.id)
                    return true;
                });
            }
            return res[0].name;
            
        },
        fetchPostby: function(){
            let q = location.pathname.split('/')
            this.$store.dispatch("a/fetchPostBy",[q[1],q[2]]);
        },
    },
    created() {
        this.fetchPostby();
    },
}
</script>
<style scoped>
h2{
    margin: 10px 0 20px 0;
    border-bottom: 1px solid;
    padding-bottom: 15px;
    text-transform: capitalize;
}
</style>