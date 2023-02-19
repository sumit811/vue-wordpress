<script>
import moment from 'moment';
import { mapGetters, mapState } from 'vuex';
export default {
    render() {
        return (
            <div class="p-4">
                <h4 class="fst-italic">Recent Comments</h4>
                {this.recentCommentsPostIdDetails}
                {this.data_loaded !== '' ? (
                    <ul class="list-unstyled">
                        {this.recent_comments.map((e) =>
                            <li>
                                <div class="ms-2 me-auto">
                                    <p>
                                        <img class="avatar" src={e.author_avatar_urls[24]} />
                                        <a href={e.author_url} target="_blank">{e.author_name}</a> on {this.postdetail(e.post)}
                                    </p>
                                    <p>{this.dateFormatChange(e.date)}</p>
                                    <div>{this.postContentTrim(e.content.rendered)}</div>
                                </div>
                            </li>)}
                    </ul >)
                    : 'loading'}
            </div>
        )
    },
    data() {
        return {
            data_loaded: false
        }
    },
    created() {
        this.$store.dispatch("c/recent_comments").then(() => {
            this.$store.dispatch("a/fetchSinglePostByIDs", this.recent_comments_id).then(() => {
                this.data_loaded = true;
            });
        })
    },
    computed: {
        ...mapState('c', ['recent_comments']),
        ...mapState('a', ['recent_comment_posts']),
        ...mapGetters('c', ['recent_comments_id']),
    },
    methods: {
        postContentTrim(content){
            let c = content.replace(/(<([^>]+)>)/gi, "")
            if(c.length>70){
                c = c.slice(0, 70)+'...'
            }
            return c;
        },
        postdetail(id){
            let post = this.recent_comment_posts.find(e => e.id==id);
            if(post){
                return <router-link to={'/'+post.slug}>{post.title.rendered}</router-link >;
            }
        },
        dateFormatChange(str) {
            return moment(str).format('MMMM DD YYYY');
        },
    }
}
</script>
<style scoped>
.avatar{
    padding-right: 10px;
}
li {
    margin-top: 20px;
    border-bottom: 1px solid grey;
    padding-bottom: 20px;
}
</style>