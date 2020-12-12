<template>
    <article v-if="this.$store.state.posts.post">
        포스트 타입 : {{ this.$route.params.category }}<br/>
        포스트 ID : {{ this.$route.params.postId }}<br/>
        <div v-if="this.$store.state.posts.post" v-html="this.$store.state.posts.post.content.rendered"  class="render"></div>
        <div v-if="this.$store.state.posts.postList">
            <ul>
                <li v-for="(list, index) in this.$store.state.posts.postList" :key="index">
                    {{list}}
                </li>
            </ul>
        </div>
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
            postId: this.$route.params.postId,
            // postType: 'episode'
        });
    }
}
</script>

<style scoped>

</style>
