<template>
    <div class="loaderbg">
        <div class="lds-ripple">
            <div></div>
            <div></div>
            <p class="loading-txt">{{loadingTxt}}</p>
        </div>
    </div>
</template>
<style>
.loading-txt{
    margin: 72px 0 0 0;
    color: rgba(255,255,255,.8);
}
.loaderbg {
    position: fixed;
    right: 0;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .5);
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.lds-ripple {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
}

.lds-ripple div {
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
}

@keyframes lds-ripple {
    0% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 0;
    }

    4.9% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 0;
    }

    5% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 1;
    }

    100% {
        top: 0px;
        left: 0px;
        width: 72px;
        height: 72px;
        opacity: 0;
    }
}
</style>
<script>
export default {
    props:{
        loadingTxt:{
            required: false,
            type: String,
            default: 'Loading...'
        }
    }
}
</script>