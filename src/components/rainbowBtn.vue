<template>
    <button type="button" :value="btnText" @click="randombg" class="btn btn-info">Info</button>
</template>
<script>
export default{
    props:{
        btnText:{
            type:String,
            default: "Rainbow"
        }
    },
    methods:{
        randombg:function(){
            return this.$emit('randomBG',Math.floor(Math.random()*16777215).toString(16));
        }
    }
}
</script>