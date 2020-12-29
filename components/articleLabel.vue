<template>
<ul>
    <li>새로 쓴 글</li>
</ul>
</template>

<script>
export default {
    name: "articleLabel",
    props : {
        new : false,
        featured : false,

    }
}
</script>

<style scoped lang="scss">
@import 'assets/partialAsset';
ul{
    position:absolute;
    bottom:0;
    left:0;
    margin:0;
    padding:0;
    list-style: none;
    z-index:3;
    opacity: 0.8;

    li{
        margin:0;
        padding:2px 8px;
        background-color: $color-red-300;
        box-sizing: border-box;
        color:$color-light-100;
        font-size:11px;
        font-weight:300;
    }
}
</style>
