<template>
    <nav class="navigation">
        <nuxt-link to="/episode" v-slot="{ href, navigate, isActive, isExactActive }">
            <a :href="href" @click="navigate" :class="{'is-active' : isActive}">Just thinking scribbler</a>
        </nuxt-link>

        <nuxt-link to="/logs" v-slot="{ href, navigate, isActive, isExactActive }">
            <a :href="href" @click="navigate" :class="{'is-active' : isActive}">Technical scribbler</a>
        </nuxt-link>

        <nuxt-link to="/about" v-slot="{ href, navigate, isActive, isExactActive }">
            <a :href="href" @click="navigate" :class="{'is-active' : isActive}">About this place and me</a>
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
