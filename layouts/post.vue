<template>
    <div class="post-layout">
        <header-default/>
        <main id="content-wrap">
            <Nuxt/>
        </main>
        <footer-default/>
        <div class="functions">
            <a :href="this.writeUrl" class="write-post">Write Post</a>
            <a :href="'https://api.jangwonseok.me/wp-admin/post.php?post='+ this.$store.state.posts.post.id +'&action=edit'" class="edit-post" v-if="this.$store.state.posts.post">Edit Post</a>
        </div>
    </div>
</template>

<script>
import HeaderDefault from "~/layouts/_header";
import FooterDefault from "~/layouts/_footer";
export default {
    components: {FooterDefault, HeaderDefault},
    data(){
        return {
            writeUrl : 'https://api.jangwonseok.me/wp-admin/edit.php'
        }
    }
}
</script>

<style scoped lang="scss">
@import 'assets/partialAsset';
.functions{
    position:fixed;
    bottom:0;
    right:0;
    padding:8px;
    box-sizing: border-box;
    display:flex;
    flex-direction: row;

    a{
        color:$color-light-100;
        font-size:12px;
        text-decoration: none;
        font-weight:100;
        margin:0 8px;

        &:hover{
            color:$color-dark-200;
        }
    }
}
</style>
