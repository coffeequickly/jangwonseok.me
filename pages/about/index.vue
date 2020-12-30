<template>
    <article>
        <figure>
            <img src="~/assets/jangwonseok.jpg" title="Wonseok Jang" alt="장원석 사진">
        </figure>

        <div class="introduce">
            <dl class="quote">
                <dt>"강의 반대편은 가만히 있을 때는 모습을 드러내지 않는다. <br/>나아가야 그것이 자신을 드러낼
                    것이다."</dt>
                <dd>플라톤 테아이테토스 편 중.</dd>
            </dl>
            <div class="words">
                <p>테스형이 말한 것 처럼, 반성과 실행의 힘이 더 좋은 개발자가 되는 디딤돌이 될거라 믿습니다.</p>
                <p>2014년 notepad++ 로 처음 html을 찍기 시작해 계속해서 포지션과 경계에 얽메이지 않고 탐구하고 있습니다.</p>
                <p>실전 압축 야매 코딩으로 빠르지만 위태하게 스파게티 코드로 경력을 쌓아 올렸습니다.<br/>클린 코드 다지기 위해 방법론과 CS를 수혈중 입니다.</p>
                <p>서비스 개발도 좋아하지만, 사실 IT를 전반에 걸쳐 좋아합니다. <br/>엄청 수다쟁이인데, 글도 잘 썼으면 좋겠습니다.</p>
            </div>
            <ul>
                <li><a href="https://github.com/coffeequickly" target="_blank">Github</a></li>
                <li><a href="https://www.behance.net/coffeequickly" target="_blank">Behance</a></li>
                <li><a href="/introduce.pdf" target="_blank">Introduce & Resume</a></li>
                <li><a href="mailto:contact@jangwonseok.me" target="_blank">contact@jangwonseok.me</a></li>
            </ul>
        </div>
    </article>
</template>

<script>
export default {
    name: "about"
}
</script>

<style scoped lang="scss">
@import 'assets/partialAsset';
article{
    margin: auto;
    width: $width-large;
    padding: 64px 32px;
    box-sizing: border-box;
    display:flex;
    flex-direction: row;
    align-items: center;
    min-height:calc(80vh - 64px);

    @media(max-width:$width-normal){
        width:100%;
        flex-direction: column;
        padding:0;
        min-height:auto;
    }

    figure, .introduce{
        width:50%;
        margin:0;
        padding:32px;
        box-sizing: border-box;

        @media(max-width:$width-normal){
            width:100%;
            padding:0;
        }
    }

    figure{
        img{
            display:block;
            width:100%;
            height:auto;
        }
    }

    .introduce{
        color:$color-light-100;

        @media(max-width:$width-normal){
            padding:16px;
            box-sizing: border-box;
        }

        dl{
            font-family: $font-serif;
            text-align: right;

            @media(max-width:$width-normal){
                text-align: left;
                margin:32px 0;
                padding:0;
                word-break: keep-all;
            }

            dd{
                color:$color-light-500;

                @media(max-width:$width-normal){
                    margin:8px 0 0;
                    padding:0;
                    font-size:13px;
                }
            }
        }

        ul{
            list-style: none;
            text-align: right;
            font-size:13px;
            color:$color-light-500;

            @media(max-width:$width-normal){
                text-align: left;
                margin:0;
                padding:0;
            }

            li{
                a{
                    color:$color-red-300;
                    opacity: 0.8;
                    text-decoration: underline;

                    &:hover{
                        opacity: 1;
                    }
                }
            }
        }

        p{
            font-size:13px;
            text-align: right;
            color:$color-light-500;

            @media(max-width:$width-normal){
                text-align: left;
                margin:0 0 16px;
                padding:0;
            }
        }
    }
}
</style>
