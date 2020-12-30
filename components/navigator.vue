<template>
    <nav class="navigation">
        <nuxt-link to="/contemplation" v-slot="{ href, navigate, isActive, isExactActive }">
            <a :href="href" @click="navigate" :class="{'is-active' : isActive}">Contemplation & Reflection</a>
        </nuxt-link>

        <nuxt-link to="/logs" v-slot="{ href, navigate, isActive, isExactActive }">
            <a :href="href" @click="navigate" :class="{'is-active' : isActive}">Technical Logs</a>
        </nuxt-link>

        <nuxt-link to="/about" v-slot="{ href, navigate, isActive, isExactActive }">
            <a :href="href" @click="navigate" :class="{'is-active' : isActive}">About</a>
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
