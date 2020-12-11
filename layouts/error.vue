<template>
<article>
    <div>
        <h1>아무 것도 없는 공간에 오신 것을 환영합니다!</h1>
        <p>아직 이 주소에는 아무런 내용이 없는 것 같습니다.</p>
        <nuxt-link to="/">첫 화면으로 돌아가기</nuxt-link>
    </div>
</article>
</template>

<script>
export default {
    name: "error",
    props: ['error'],
}
</script>

<style lang="scss" scoped>
@import 'assets/partialAsset';

article{
    position:fixed;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    overflow: hidden;
    background-color: $color-green-main;
    display:flex;
    justify-content: center;
    align-items: center;

    div{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        *{
            font-size:16px;
            font-weight:normal;
            font-family: $font-sans-serif;
        }

        h1, p{
            color:$color-light-100;
            font-weight:100;
        }

        h1{
            font-size:32px;
        }

        p{
            font-size:13px;
        }

        a{
            display:inline-block;
            text-align: center;
        }
    }
}
</style>
