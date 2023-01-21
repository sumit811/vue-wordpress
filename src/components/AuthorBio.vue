<template>
    <article>
        <div class="row">
            <div class="col-12-4 col-sm-3">
                <img :src="authorImg[96]" class="img-thumbnail rounded" alt="">
            </div> 
            <div class="col-12-8 col-sm-9">
                <router-link :to="{ name: 'authorsDetails', params: { user: authorSlug+'-'+authorId }}"><h2>{{authorName}}</h2></router-link>
                <slot></slot>
            </div> 
        </div>
    </article>
</template>
<script>
export default {
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
