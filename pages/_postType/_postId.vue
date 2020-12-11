<template>
    <div>
        포스트 타입 : {{ this.$route.params.postType }}<br/>
        포스트 ID : {{ this.$route.params.postId }}<br/>
        결과 : {{this.$store.state.posts}}
    </div>
</template>

<script>
export default {
    name: "postId",
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
