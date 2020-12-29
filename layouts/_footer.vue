<template>
    <footer>
<!--        <dl>-->
<!--            <dt>Wonseok Jang</dt>-->
<!--            <dd>-->
<!--                <span>E-mail</span>-->
<!--                <a href="mailto:contact@jangwonseok.me">contact@jangwonseok.me</a>-->
<!--            </dd>-->
<!--&lt;!&ndash;            <dd>&ndash;&gt;-->
<!--&lt;!&ndash;                <span>Profile</span>&ndash;&gt;-->
<!--&lt;!&ndash;                <nuxt-link to="/">jangwonseok.me</nuxt-link>&ndash;&gt;-->
<!--&lt;!&ndash;            </dd>&ndash;&gt;-->
<!--&lt;!&ndash;            <dd>&ndash;&gt;-->
<!--&lt;!&ndash;                <span>Github</span>&ndash;&gt;-->
<!--&lt;!&ndash;                <a href="https://github.com/coffeequickly" target="_blank">github.com/coffeequickly</a>&ndash;&gt;-->
<!--&lt;!&ndash;            </dd>&ndash;&gt;-->
<!--        </dl>-->

<!--        <button class="scroll-to-top" @click.prevent="scrollToTop">-->
<!--            <svg-inline src="~assets/scrollToTop.svg" />-->
<!--        </button>-->
    </footer>
</template>

<script>
export default {
    name: "footerDefault",
    methods : {
        scrollToTop() {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    }
}
</script>

<style scoped lang="scss">
//@import 'assets/partialAsset';
//footer{
//    width:100%;
//    padding:4px 16px;
//    box-sizing: border-box;
//    //border-top:1px solid $color-light-300;
//    background-color: $color-light-200;
//
//
//    a{
//        text-decoration: none;
//
//        &:hover{
//            color:$color-green-300;
//        }
//    }
//
//    button{
//        -webkit-appearance:none;
//        border:0;
//        display:none;
//        box-shadow:none;
//        outline:none !important;
//        background-color: transparent;
//        position:fixed;
//        bottom:16px;
//        right:16px;
//        cursor: pointer;
//        width:24px;
//        height:24px;
//        align-content: center;
//        justify-content: center;
//        align-items: center;
//        padding:0;
//        margin:0;
//
//        @media (max-width:$width-normal) {
//            display:flex;
//        }
//
//        ::v-deep svg{
//            width:100%;
//            height:100%;
//            background-color: $color-light-100;
//            border-radius: 4px;
//            overflow: hidden;
//
//            path{
//                fill:$color-green-600;
//            }
//        }
//    }
//
//    dl{
//        display:flex;
//        flex-direction: row;
//        align-content: center;
//        justify-content: center;
//        font-style: italic;
//        font-size:12px;
//        font-weight:normal;
//        flex-wrap:wrap;
//
//        span{
//            margin-right:8px;
//        }
//
//        dt{
//            margin:0 0 8px;
//            padding:0;
//            width:100%;
//            text-align: center;
//
//            em{
//                font-size:12px;
//                font-weight:normal;
//            }
//        }
//
//        dd{
//            margin:0 8px;
//            padding:0;
//
//            @media(max-width:$width-normal){
//                width:100%;
//                text-align: center;
//            }
//        }
//    }
//}
</style>
