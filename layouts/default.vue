<template>
    <div class="page-layout" :class="this.$route.name">
        <header-default/>
        <main id="content-wrap">
            <Nuxt/>
        </main>
        <footer-default/>
    </div>
</template>

<style lang="scss" scoped>
@import 'assets/partialAsset';
.page-layout{
    &.about{
        background-color: #000000;
    }
}

</style>
<script>

import HeaderDefault from "~/layouts/_header";
import FooterDefault from "~/layouts/_footer";

export default {
    name : 'default',
    components: {FooterDefault, HeaderDefault}
}
</script>
