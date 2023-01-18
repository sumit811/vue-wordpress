<template>
    <nav aria-label="Page navigation example">{{ noOfPages }}
        <ul class="pagination justify-content-center">
            <li class="page-item" :class="{disabled : (this.current<=1) }">
                <a class="page-link" href="#" @click.prevent="postPage('p')">Previous</a>
            </li>
            <li class="page-item" v-for="n in noOfPages" :key="n" :class="activeClass(n)">
                <a class="page-link" href="#" @click.prevent="postPage(n)">{{n}}</a>
            </li>
            <li class="page-item" :class="{disabled : (this.current>=this.noOfPages)}">
                <a class="page-link" href="#" @click.prevent="postPage('n')">Next</a>
            </li>
        </ul>
    </nav>
</template>
<script>
export default{
    name:'PagginationVue',
    props:{
        noOfPages:{
            type:Number,
            required: true
        }
    },
    data(){
        return{
            current:1
        }
    },
    couputed:{
        previousPage(){
            --this.current;
            // return --this.current?this.current>1:1;
        },
        nextPage(){
            this.current++;
            // return ++this.current?this.current>this.noOfPages:this.current;
        }

    },
    methods:{
        activeClass: function(n){
            if(n === this.current)
                return 'active'
        },
        postPage: function(n){
            console.log('n',n);
            switch(n){
                case 'p':
                    this.current>1?this.current--:this.current;
                break;
                case 'n':
                    this.current<this.noOfPages?this.current++:this.current;
                break;
                default:
                    this.current = n;
                break;
            }
            console.log('current',this.current);
            this.$store.dispatch("a/fetchPosts",this.current);
        },
    }
}
</script>