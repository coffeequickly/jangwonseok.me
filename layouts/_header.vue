<template>
    <client-only>
    <header>
        <div class="header-wrap">
            <nuxt-link to="/" tag="button" class="button-clear brand">
                <svg-inline src="~assets/jangwonseok.svg"/>
                <span>archive!</span>
            </nuxt-link>
            <navigator/>
        </div>
    </header>
    </client-only>
</template>

<script>
import Navigator from "@/components/navigator";

export default {
    name: "headerDefault",
    components: {Navigator},
    methods : {
        toggleNav(){
            this.$store.commit('SET_NAV');
        }
    }
}
</script>

<style scoped lang="scss">
@import 'assets/partialAsset';
header{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:72px;
    display:flex;
    background-color: $color-light-100;
    box-sizing: border-box;
    border-bottom:1px solid $color-light-300;
    z-index:9;

    .header-wrap{
        display:flex;
        width:1540px;
        margin:auto;

        .brand{
            position:relative;
            display:flex;
            flex-direction: row;
            align-items: center;
            height:48px;
            box-sizing: border-box;

            &:hover{
                ::v-deep svg{
                    path[fill='#F6DBD7']{
                        opacity: 0.6 !important;
                        transition: opacity 0.5s ease-out;
                    }
                }
            }

            ::v-deep svg{
                width:auto;
                height:100%;

                path[fill='#F6DBD7']{
                    opacity: 0 !important;
                    transition: opacity 0.5s ease-out;
                }
            }

            span{
                font-weight:900;
                font-size:24px;
                font-style: italic;
                margin-left:16px;
            }
        }

        .navigation{
            display:flex;
            flex-direction: row;
            margin-left:auto;
            align-items: center;

            ::v-deep a{
                display: inline-block;
                margin-right:32px;
                font-size:16px;
                font-weight:300;
                color:$color-dark-500;
                font-style: italic;
                text-align: center;

                &:last-child{
                    margin-right:0;
                }

                &:hover{
                    text-decoration: underline;
                }
            }
        }
    }
}

//header {
//    display: block;
//    top: 0;
//    left: 0;
//    position: fixed;
//    box-sizing: border-box;
//    z-index: 9;
//    width: 100%;
//    background-color: rgba(255, 255, 255, 0.8);
//
//    @media(max-width: $width-normal) {
//        position: relative;
//        justify-content: center;
//        flex-wrap: wrap;
//        background-color: $color-green-600;
//        height: auto;
//    }
//
//    .header-wrap {
//        position:relative;
//        display: flex;
//        flex-direction: row;
//        justify-content: flex-start;
//        align-content: center;
//        height: 64px;
//        width: 100%;
//        padding: 16px;
//        box-sizing: border-box;
//
//        @media(max-width: $width-normal) {
//            justify-content: center;
//            padding: 8px 16px;
//            height: auto;
//        }
//
//        button.open-navigation {
//            position: absolute;
//            top: 50%;
//            left: 4px;
//            display: none;
//            justify-content: center;
//            align-items: center;
//            border: 0;
//            box-shadow: none;
//            background-color: transparent;
//            transform: translateY(-50%);
//            -webkit-appearance: none;
//            outline: none !important;
//
//            @media(max-width: $width-normal) {
//                display: flex;
//            }
//
//            ::v-deep svg {
//                width: 24px;
//                height: 24px;
//
//                path {
//                    fill: $color-light-100;
//                }
//            }
//        }
//
//        a.home {
//            ::v-deep svg {
//                width: 32px;
//                height: 32px;
//                display: block;
//
//                @media(max-width: $width-normal) {
//                    path[fill="#303D26"] {
//                        fill: $color-light-200;
//                    }
//
//                    path[fill="#FCFCFB"] {
//                        fill: $color-green-600;
//                    }
//                }
//            }
//        }
//    }
//
//    .mobile-nav{
//        width: 100%;
//        display: none;
//        position:relative;
//        flex-direction: column;
//        border-bottom:1px solid $color-dark-300;
//        margin-bottom:-1px;
//        background-color: $color-light-100;
//        overflow:hidden;
//
//        ::v-deep a{
//            display:block;
//            width:100% !important;
//            margin:0;
//            padding:8px;
//            border-bottom:1px solid $color-light-300;
//
//            &:last-child{
//                border-bottom:0;
//            }
//        }
//
//        @media(max-width: $width-normal) {
//            display: flex;
//        }
//    }
//
//    .nav {
//        position: absolute;
//        top: 16px;
//        right: 16px;
//        display: flex;
//        flex-direction: row;
//        justify-content: space-between;
//        align-items: center;
//
//        @media(max-width: $width-normal) {
//            display:none;
//        }
//    }
//}
</style>
