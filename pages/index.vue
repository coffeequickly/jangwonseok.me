<template>
    <article>
        <i>🤔</i>
        <h1>아직은 비어있지만, <br/>잠재력을 가진 공간입니다.</h1>
        <p>제가 궁금해서 찾아오신 분들은 아래 링크를 봐 주시면 감사하겠습니다.</p>
        <ul>
            <li>제 이력이 궁금하시다면, <nuxt-link to="/about/resume">이력서 보기</nuxt-link></li>
            <li>아직 정리하고 있지만, 짧게라도 소개해 줬음 하신다면, <nuxt-link to="/about">소개 보기</nuxt-link></li>
            <li>그래도 좀 더 어떤 사람인지 좀 더 궁금하시다면, <a href="https://www.notion.so/jangwonseok/f32188d145e3413da7bd38df8b4131a2" target="_blank">(구) 자기소개 - Notion 으로 이동합니다.</a></li>
            <li>저에게 연락하고 싶으시다면, <a href="mailto:contact@jangwonseok.me">contact@jangwonseok.me</a></li>
        </ul>
    </article>
</template>

<script>
export default {
    name: "index",
    layout: 'default'
}
</script>

<style scoped lang="scss">
@import 'assets/partialAsset';

article{
    width:100%;
    height:100vh;
    padding:15px;
    box-sizing: border-box;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: $font-sans-serif;

    h1{
        font-weight:100;
        font-size:32px;
        word-break: keep-all;
        margin:24px 0;
    }

    i{
        font-style: normal;
        display:block;
        font-size:64px;
    }

    p{
        word-break: keep-all;
        font-size:16px;
        font-weight:bold;
    }

    ul{
        list-style: none;
        margin:0;
        padding:0;

        li{
            margin:4px 0;
            padding:0;
            color:$color-gray-light
        }
    }
}
</style>
