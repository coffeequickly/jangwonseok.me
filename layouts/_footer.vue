<template>
    <footer>
        <div class="footer-wrap">
            <dl>
                <dt>장 원석</dt>
                <dd>사람들이 좋아하는 서비스를 만드는 걸 좋아합니다.</dd>
                <dd>새로운 기술 요소를 탐닉합니다. 욕심이 많아서 넓고 얉게 훑습니다.</dd>
                <dd>글도 잘 쓰고 말도 잘 하고 싶습니다. 수다쟁이입니다.</dd>
            </dl>

            <dl>
                <dt>Thanks to</dt>
                <dd>Amazon Web Service</dd>
                <dd>Wordpress - Backend restfulAPI</dd>
                <dd>Nuxt.js - Easy front-end bootstrap with SSR</dd>
            </dl>

            <p>© Wonseok Jang</p>
        </div>
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
@import 'assets/partialAsset';
footer{
    background-color: $color-dark-500;

    .footer-wrap{
        width:$width-large;
        //text-align: center;
        margin:32px auto;
        padding:32px;
        box-sizing: border-box;

        dl{
            margin:0;
            width:100%;
            font-size:12px;

            dt{
                margin:0;
                color:$color-light-300;
            }

            dd{
                color:$color-light-300;
            }
        }
    }
}

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
