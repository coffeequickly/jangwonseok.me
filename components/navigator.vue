<template>
    <nav class="navigation">
        <nuxt-link to="/episode" v-slot="{ href, navigate, isActive, isExactActive }">
            <a :href="href" @click="navigate" :class="{'is-active' : isActive}">About Something Posts</a>
        </nuxt-link>

        <nuxt-link to="/logs" v-slot="{ href, navigate, isActive, isExactActive }">
            <a :href="href" @click="navigate" :class="{'is-active' : isActive}">Technical Work Logs Posts</a>
        </nuxt-link>

        <nuxt-link to="/about" v-slot="{ href, navigate, isActive, isExactActive }">
            <a :href="href" @click="navigate" :class="{'is-active' : isActive}">About jangwonseok</a>
        </nuxt-link>
    </nav>
</template>

<script>
export default {
    name: "navigator"
}
</script>

<style scoped lang="scss">
</style>
