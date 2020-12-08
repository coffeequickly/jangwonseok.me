<template>
    <div>
        <header-default/>
        <Nuxt/>
        <footer-default/>
    </div>
</template>

<style>

</style>
<script>

import HeaderDefault from "~/layouts/_header";
import FooterDefault from "~/layouts/_footer";

export default {
    components: {FooterDefault, HeaderDefault}
}
</script>
