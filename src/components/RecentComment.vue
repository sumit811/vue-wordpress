<template>
    <div class="p-4">
        <h4 class="fst-italic">Recent Comments</h4>
        {{recentCommentsPostIdDetails}}
        <ul class="list-unstyled">
            <li v-for="comment in recent_comments" :key="comment.id">
                <div class="ms-2 me-auto">
                    <p><a :href="comment.author_url" target="_blank"><img :src="comment.author_avatar_urls[24]"></a> : <a :href="comment.author_url" target="_blank">{{ comment.author_name }}</a> on <router-link to="http://www.google.com">{{ comment.post }}</router-link></p>
                    <p>{{ comment.date | moment("MMMM DD, YYYY") }}</p>
                    <div>{{ comment.content.rendered | stripHTML }}</div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import moment from 'moment';
import { mapGetters, mapState } from 'vuex';
export default {
    
    created() {
        this.$store.dispatch("c/recent_comments")
    },
    computed: {
        ...mapState('c', ['recent_comments']),
        ...mapGetters('c', ['recent_comments_id']),
        recentCommentsPostIdDetails: function(){
            console.log(this.recent_comments_id)

                return 'dsdafadfsafdsafasd';

        }

    },
    filters: {
        stripHTML: function (value) {
            const div = document.createElement('div')
            div.innerHTML = value
            const text = div.textContent || div.innerText || ''
            return text.slice(0, 70);
        },
        dateFormatChange:function(str){
            return moment(str).format('MMMM Do YYYY, h:mm:ss a');
        }
    }
}
</script>
<style scoped>
li {
    margin-top: 20px;
    border-bottom: 1px solid grey;
    padding-bottom: 20px;
}
</style>