<template>
    <div class="post-layout">
        <header-default/>
        <main id="content-wrap">
            <Nuxt/>
        </main>
        <footer-default/>
    </div>
</template>

<script>
import HeaderDefault from "~/layouts/_header";
import FooterDefault from "~/layouts/_footer";
export default {
    name : 'post',
    components: {FooterDefault, HeaderDefault},
    data(){
        return {
            writeUrl : 'https://api.jangwonseok.me/wp-admin/edit.php'
        }
    }
}
</script>

<style scoped lang="scss">
//@import 'assets/partialAsset';
//.functions{
//    position:fixed;
//    bottom:0;
//    right:0;
//    padding:8px;
//    box-sizing: border-box;
//    display:flex;
//    flex-direction: row;
//
//    @media(max-width:$width-normal){
//        display:none;
//    }
//
//    a{
//        color:transparent;
//        font-size:12px;
//        text-decoration: none;
//        font-weight:100;
//        margin:0 8px;
//
//        &:hover{
//            color:$color-dark-200;
//        }
//    }
//}
</style>
