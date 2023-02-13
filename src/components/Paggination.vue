<template>
    <nav aria-label="Page navigation" ref="nav">
        <ul class="pagination justify-content-center" ref="navItems">
            <li class="page-item info" :class="{ disabled: (this.current <= 1) }">
                <a class="page-link info" href="#" @click.prevent="postPage('p')"><span aria-hidden="true"
                        class="pe-1">&laquo;</span>Previous</a>
            </li>
            <li class="page-item" v-for="n in pageNumArr" :key="n" :class="activeClass(n)" ref="noOfPagess">
                <a class="page-link" :class="{ 'cursor-default': (n == '...') }" href="#"
                    @click.prevent="postPage(n)">{{
                        n
                    }}</a>
            </li>
            <li class="page-item info" :class="{ disabled: (this.current >= this.noOfPages) }">
                <a class="page-link" href="#" @click.prevent="postPage('n')">Next<span aria-hidden="true"
                        class="ps-1">&raquo;</span></a>
            </li>
        </ul>
    </nav>
</template>
<script>

export default {
    name: 'PagginationVue',
    props: {
        noOfPages: {
            type: Number,
            required: true,
        }
    },
    data() {
        return {
            current: 1,
            pageNumArr: [],
            removeArr: [],
        }
    },
    couputed: {
        previousPage() {
            --this.current;
        },
        nextPage() {
            this.current++;
        },
    },
    created() {
        window.addEventListener("resize", this.pageLinkArr);
    },
    destroyed() {
        window.removeEventListener("resize", this.pageLinkArr);
    },
    mounted() {
        this.pageLinkArr();
    },
    watch:{
        noOfPages(newVal,oldVal){
            console.log('postPagesCount',newVal,oldVal);
            if(oldVal != newVal){
                this.pageLinkArr();
            }
        }
    },
    methods: {
        pageLinkArr() {
            let x = false;
            let max = null;
            this.removeArr = [];
            this.pageNumArr = [];
            if (screen.width > 1400) {
                max = 16
            } else if (screen.width >= 1200) {
                max = 13;
            } else if (screen.width >= 992) {
                max = 10
            } else if (screen.width >= 768) {
                max = 6
            } else if (screen.width >= 576) {
                max = 6
            } else if (screen.width > 576) {
                max = 6
            } else {
                max = 6
            }
            if(this.noOfPages>max){
                let median = this.noOfPages/2;
                let item2removed = this.noOfPages - max;
                for(let i = median;i<=(median+item2removed); i++){
                    this.removeArr.push(i);
                }
            }
            for (let i = 1; i <= this.noOfPages; i++) {
                if (!this.removeArr.includes(i)) {
                    this.pageNumArr.push(i);
                } else {
                    if (!x) {
                        this.pageNumArr.push('...');
                        x = true;
                    }
                }
            }
        },
        activeClass: function (n) {
            if (n === this.current)
                return 'active'
        },
        postPage: function (n) {
            switch (n) {
                case '...':
                    return;
                case 'p':
                    this.current > 1 ? this.current-- : this.current;
                    break;
                case 'n':
                    this.current < this.noOfPages ? this.current++ : this.current;
                    break;
                default:
                    this.current = n;
                    break;
            }
            this.$router.push({query: { page: n } }).catch(() => {})
        },
    }
}
</script>
<style scoped>
.cursor-default {
    cursor: default;
}

nav {
    overflow: hidden;
}
</style>
