<template>
    <section class="gradient-custom">
        <div class="card">
            <div class="card-body p-4">
                <h4 class="text-center mb-4 pb-2">Nested comments section</h4>

                <div class="row">
                    <div class="col">
                        <div class="d-flex flex-start mb-4" v-for="comment in comments" :key="comment.id">
                            <img class="rounded-circle shadow-1-strong me-3"
                                :src="comment.author_avatar_urls[96]" alt="avatar"
                                width="65" height="65" />
                            <div class="flex-grow-1 flex-shrink-1">
                                <div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <p class="mb-1">
                                            {{comment.author_name}} <span class="small">- 2 hours ago</span>
                                        </p>
                                        <a href="#!"><i class="fas fa-reply fa-xs"></i><span class="small">
                                                reply</span></a>
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
    props:{
        comments:{
            required: true,
            type: Array
        }
    }
}
</script>
<!-- https://mdbootstrap.com/docs/standard/extended/comments/ -->
