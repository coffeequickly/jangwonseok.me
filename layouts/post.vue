<template>
    <div class="post-layout">
        <header-default/>
        <main id="content-wrap">
            <Nuxt/>
        </main>
        <footer-default/>
    </div>
</template>

<script>
import HeaderDefault from "~/layouts/_header";
import FooterDefault from "~/layouts/_footer";
export default {
    components: {FooterDefault, HeaderDefault}
}
</script>

<style scoped>

</style>
