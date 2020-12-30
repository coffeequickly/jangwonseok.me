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
                <dt>Build Set</dt>
                <dd>Amazon Web Service</dd>
                <dd>Wordpress - Backend restfulAPI</dd>
                <dd>Nuxt.js - Easy front-end bootstrap with SSR</dd>
            </dl>
            <dl class="links">
                <dd><a href="https://github.com/coffeequickly" target="_blank">Github</a></dd>
                <dd><a href="https://www.behance.net/coffeequickly" target="_blank">Behance</a></dd>
                <dd><a href="/introduce.pdf" target="_blank">Introduce & Resume</a></dd>
                <dd><a href="mailto:contact@jangwonseok.me" target="_blank">contact@jangwonseok.me</a></dd>
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
    background-color: $color-dark-500;

    .footer-wrap{
        width:$width-large;
        margin:auto;
        padding:32px 0;
        box-sizing: border-box;
        display:flex;
        flex-direction: row;
        flex-wrap:wrap;
        align-items: stretch;


        dl{
            margin:0;
            padding:0 16px;
            width:auto;
            font-size:12px;

            &.links{
                display: flex;
                flex-direction: row;
                align-items: flex-end;
                margin-left:auto;

                dd{
                    display:inline-block;
                    margin:0;
                    padding:0 8px;
                }
            }

            dt{
                margin:0 0 8px;
                padding:0;
                color:$color-light-200;
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
    }
}
</style>
