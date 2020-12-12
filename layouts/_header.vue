<template>
  <header>
      <nuxt-link to="/" class="home">
          <svg-inline src="~assets/jangwonseok.svg"/>
      </nuxt-link>
      <nav>
          <nuxt-link to="/" v-slot="{ href, navigate, isActive, isExactActive }">
              <a :href="href" @click="navigate" :class="{'is-active' : isExactActive}">대문</a>
          </nuxt-link>

          <nuxt-link to="/logs" v-slot="{ href, navigate, isActive, isExactActive }">
              <a :href="href" @click="navigate" :class="{'is-active' : isActive}">개발괴발</a>
          </nuxt-link>

          <nuxt-link to="/article" v-slot="{ href, navigate, isActive, isExactActive }">
              <a :href="href" @click="navigate" :class="{'is-active' : isActive}">생각들</a>
          </nuxt-link>

          <nuxt-link to="/episode" v-slot="{ href, navigate, isActive, isExactActive }">
              <a :href="href" @click="navigate" :class="{'is-active' : isActive}">일화</a>
          </nuxt-link>

          <nuxt-link to="/about" v-slot="{ href, navigate, isActive, isExactActive }">
              <a :href="href" @click="navigate" :class="{'is-active' : isActive}">대하여</a>
          </nuxt-link>
      </nav>
  </header>
</template>

<script>
export default {
  name: "headerDefault"
}
</script>

<style scoped lang="scss">
@import 'assets/partialAsset';

header{
    display:flex;
    top:0;
    left:0;
    flex-direction: row;
    justify-content: flex-start;
    align-content: center;
    position:fixed;
    height:64px;
    width:100%;
    padding:16px;
    box-sizing: border-box;
    z-index:9;
    background-color: rgba(255, 255, 255, 0.8);

    a.home{
        ::v-deep svg{
            width:32px;
            height:32px;
            display:block;
        }
    }

    nav{
        margin-left:auto;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        a{
            margin-left:8px;
            color:$color-green-main;
            display:inline-block;
            padding:4px 16px;
            box-sizing: border-box;
            text-decoration: none;
            transition: all 0.3s ease-in-out;

            &:before{
                content:'# '
            }

            &:hover, &.is-active{
                background-color: $color-green-main;
                color:$color-light-100;
                transition: all 0.3s ease-in-out;
            }
        }
    }
}
</style>
