<template>
    <input type="button" value="Rainbow" @click="randombg">
</template>
<script>
export default{
    methods:{
        randombg:function(){
            return this.$emit('randomBG',Math.floor(Math.random()*16777215).toString(16));
        }
    }
}
</script>