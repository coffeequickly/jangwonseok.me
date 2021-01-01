<template>
    <footer>
        <div class="footer-wrap">
            <dl>
                <dt>장 원석</dt>
                <dd>사람들이 좋아하는 서비스를 만들고 싶습니다.</dd>
                <dd>새로운 기술 요소를 탐닉합니다. 욕심이 많아서 넓고 얉게 훑습니다.</dd>
                <dd>글도 잘 쓰고 말도 잘 하고 싶습니다. 수다쟁이입니다.</dd>
            </dl>

            <!--
            <dl>
                <dt>Build Set</dt>
                <dd>Amazon Web Service</dd>
                <dd>Wordpress — Backend restfulAPI</dd>
                <dd>Nuxt.js — Easy front-end bootstrap with SSR</dd>
            </dl>
            -->
            <dl class="links">
                <client-only>
                <dd><a href="/introduce.pdf" target="_blank"><svg-inline src="~assets/icon/pdf.svg" />Introduce & Resume Download</a></dd>
                <dd><a href="https://github.com/coffeequickly" target="_blank"><svg-inline src="~assets/icon/github.svg" />Github Profile</a></dd>
                <dd><a href="https://www.behance.net/coffeequickly" target="_blank"><svg-inline src="~assets/icon/behance.svg" />Behance Profile</a></dd>
                <dd><a href="mailto:contact@jangwonseok.me" target="_blank"><svg-inline src="~assets/icon/mail.svg" />contact@jangwonseok.me</a></dd>
                </client-only>
            </dl>
        </div>
        <p>© Wonseok Jang</p>
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
    border-top:1px solid $color-dark-400;
    background-color: $color-dark-500;

    .footer-wrap{
        width:$width-large;
        margin:auto;
        padding:32px 0;
        box-sizing: border-box;
        display:flex;
        flex-direction: row;
        flex-wrap:wrap;
        align-items: center;

        @media(max-width:$width-normal){
            width:100%;
            flex-direction: column;
            padding:16px 0;
        }


        dl{
            margin:0;
            padding:0 16px;
            width:auto;
            font-size:12px;

            @media(max-width:$width-normal){
                &:not(.link){
                    display:none;
                }
            }

            &.links{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                margin-left:auto;
                box-sizing: border-box;

                @media(max-width:$width-normal){
                    align-items: center;
                    margin:0;
                    padding:0 16px;
                    width:100%;
                }

                dd{
                    padding:2px 0;
                    box-sizing: border-box;

                    @media(max-width:$width-normal){
                        width:100%;
                    }

                    a{
                        display:flex;
                        align-items:center;
                        font-weight:300;
                        font-style:italic;
                        color:$color-light-500;

                        @media(max-width:$width-normal){
                            text-align: left;
                        }

                        ::v-deep svg{
                            display:inline-block;
                            height:24px;
                            width:auto;
                            margin-right:16px;
                            background-color: $color-dark-400;
                            padding:5px;
                            box-sizing: border-box;
                            border-radius: 50%;

                            path{
                                fill : $color-light-300;
                            }
                        }
                    }
                }
            }

            dt{
                margin:0 0 8px;
                padding:0;
                color:$color-light-200;
                font-weight:bold;
                font-size:13px;
            }

            dd{
                margin:0 0 4px;
                padding:0;
                color:$color-light-500;

                &:last-child{
                    margin-bottom:0;
                }

                a{
                    &:hover{
                        text-decoration: underline;
                    }
                }
            }
        }
    }

    p{
        width:100%;
        color:$color-light-100;
        border-top:1px solid $color-dark-400;
        text-align: center;
        margin:16px 0 0;
        padding:16px 0;
        font-size:10px;
        box-sizing: border-box;
        text-transform: uppercase;

        @media(max-width:$width-normal){
            margin-top:0;
        }
    }
}
</style>
