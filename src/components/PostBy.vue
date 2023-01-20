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
            console.log(this.$route)
            return this.$route.name + ':' + this.$route.params.id
        }
    },
    watch:{
        $route(to,from){
            if(to !== from){
                this.fetchPostby();
            }
        },
    },
    methods: {
        fetchPostby: function(){
            let q = location.pathname.split('/')
            // console.log('q',q[1],q[2]);
            this.$store.dispatch("a/fetchPostBy",[q[1],q[2]]).then(response => {
                console.log('aaaaaa',response);
            });
        },
    },
    created() {
        this.fetchPostby();
    },
}
</script>