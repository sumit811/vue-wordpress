<template>
    <section class="gradient-custom">
        <div class="card">
            <div class="card-body p-4">
                <h4 class="text-center mb-4 pb-2">Comments section</h4>
                <div class="row">
                    <div class="col">
                        <div class="d-flex flex-start mb-4" v-for="comment in comments" :key="comment.id">
                            <img class="rounded-circle shadow-1-strong me-3" :src="comment.author_avatar_urls[96]"
                                alt="avatar" width="65" height="65" />
                            <div class="flex-grow-1 flex-shrink-1">
                                <div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <p class="mb-1">
                                            {{ comment.author_name | commentName }} <span class="small">- {{comment.date | moment("from", "now")}}</span>
                                        </p>
                                        <!-- <a href="void(0)" v-if="comment.id===" @click.prevent="delComment(comment.id )"><span class="small"><i class="bi bi-trash"></i></span></a> -->
                                    </div>
                                    <p class="small mb-0" v-html="comment.content.rendered"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

export default {
    methods: {
        delComment: function (id) {
            console.log('delComment', id);
            this.$store.dispatch("c/deleteComment", id)
                .then(response => {
                    console.log(response);
                })
        }
    },
    props: {
        comments: {
            required: true,
            type: Array
        }
    },
    filters: {
        commentName: function (v) {
            return v + '............................';
        }
    }
}
</script>
<!-- https://mdbootstrap.com/docs/standard/extended/comments/ -->
