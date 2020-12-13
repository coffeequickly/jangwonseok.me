<template>
    <article v-if="this.$store.state.posts.post">
        <div v-html="this.$store.state.posts.post.content.rendered"  class="render"></div>
    </article>

    <ul v-else-if="this.$store.state.posts.postList">
        <li v-for="(list, index) in this.$store.state.posts.postList" :key="index">
            <nuxt-link :to="$route.params.category+'/'+list.id">{{list.title.rendered}}</nuxt-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: "postId",
    // layout: (route) => route.params.postId ? 'post-article' : 'post-list',
    layout: 'post',
    mounted() {
        this.$store.dispatch('posts/getPost', {
            category : this.$route.params.postId ? null : this.$route.params.category,
            postId: this.$route.params.postId
        });
    }
}
</script>

<style scoped>

</style>
