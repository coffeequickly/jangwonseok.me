<template>
    <div class="page-layout">
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
