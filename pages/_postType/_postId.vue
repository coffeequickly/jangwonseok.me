<template>
    <div>
        포스트 타입 : {{ this.$route.params.postType }}<br/>
        포스트 ID : {{ this.$route.params.postId }}<br/>
        <div v-if="this.$store.state.posts.post" v-html="this.$store.state.posts.post.content.rendered"  class="render">

        </div>
    </div>
</template>

<script>
export default {
    name: "postId",
    layout: (route) => route.params.postId ? 'post-article' : 'post-list',
    mounted() {
        this.$store.dispatch('posts/getPost', {
            postId: this.$route.params.postId,
            // postType: 'episode'
        });
    }
}
</script>

<style scoped>

</style>
