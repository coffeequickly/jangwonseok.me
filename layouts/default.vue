<template>
    <div>
        <header-default/>
        <main id="content-wrap">
            <Nuxt/>
        </main>
        <footer-default/>
    </div>
</template>

<style lang="scss" scoped>
@import 'assets/partialAsset';

#content-wrap{
    display:flex;
    max-width:$width-normal;
    margin:0 auto;
    padding:16px;
    box-sizing: border-box;
    font-family: $font-serif;
    font-weight:normal;
}
</style>
<script>

import HeaderDefault from "~/layouts/_header";
import FooterDefault from "~/layouts/_footer";

export default {
    components: {FooterDefault, HeaderDefault}
}
</script>
