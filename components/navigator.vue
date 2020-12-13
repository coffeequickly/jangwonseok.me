<template>
    <nav>
        <nuxt-link to="/" v-slot="{ href, navigate, isActive, isExactActive }">
            <a :href="href" @click="navigate" :class="{'is-active' : isExactActive}">대문</a>
        </nuxt-link>

        <nuxt-link to="/logs" v-slot="{ href, navigate, isActive, isExactActive }">
            <a :href="href" @click="navigate" :class="{'is-active' : isActive}">개발괴발</a>
        </nuxt-link>

        <nuxt-link to="/article" v-slot="{ href, navigate, isActive, isExactActive }">
            <a :href="href" @click="navigate" :class="{'is-active' : isActive}">탐구생활</a>
        </nuxt-link>

        <nuxt-link to="/episode" v-slot="{ href, navigate, isActive, isExactActive }">
            <a :href="href" @click="navigate" :class="{'is-active' : isActive}">고민고민</a>
        </nuxt-link>

        <nuxt-link to="/about" v-slot="{ href, navigate, isActive, isExactActive }">
            <a :href="href" @click="navigate" :class="{'is-active' : isActive}">어바웃</a>
        </nuxt-link>
    </nav>
</template>

<script>
export default {
    name: "navigator"
}
</script>

<style scoped lang="scss">
@import 'assets/partialAsset';

a {
    margin-left: 8px;
    color: $color-green-600;
    display: inline-block;
    padding: 2px 12px;
    box-sizing: border-box;
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:before {
        content: '# '
    }

    &:hover, &.is-active {
        background-color: $color-green-600;
        color: $color-light-100;
        transition: all 0.3s ease-in-out;
    }
}
</style>
