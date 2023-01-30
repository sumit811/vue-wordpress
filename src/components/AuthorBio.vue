<template>
    <article :style="{ backgroundColor:`#${bgcolor}` }">
        <div class="row">
            <div class="col-12-4 col-sm-3">
                <img :src="authorImg[96]" class="img-thumbnail rounded" alt="">
                <rainbowBtn @randomBG="newBgColor"/>
            </div> 
            <div class="col-12-8 col-sm-9">
                <router-link :to="{ name: 'authorsDetails', params: { user: authorUrl }}">
                    <h2>{{authorName}}</h2>
                </router-link>
                <slot></slot>
            </div> 
            <footer>
                <router-link :to="{ name: 'authorsDetails', params: { user: authorUrl }}" class="float-end">
                    View all of {{authorName}}'s posts.
                </router-link>
            </footer>
        </div>
    </article>
</template>
<script>
import rainbowBtn from './rainbowBtn.vue';
export default {
    components:{rainbowBtn},
    data(){
        return{
            bgcolor:'fff'
        }
    },
    methods:{
        newBgColor: function(v){
            this.bgcolor = v
        }
    },
    props:{
        authorImg:{
            type: Object,
            required: true,
        },
        authorId:{
            type: Number,
            required: true
        },
        authorName:{
            type: String,
            required: true
        },
        authorSlug:{
            type: String,
            required: true
        }
    },
    computed:{
        authorUrl: function(){
            return this.authorSlug+'-'+ this.authorId
        }
    }
}
</script>
<style scoped>
article{
    box-shadow: 2px 5px 10px 4px rgb(0 0 0 / 50%);
    margin-bottom: 40px;
    border-radius: 10px;
}
</style>
