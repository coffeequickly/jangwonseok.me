<template>
  <header>
      <nuxt-link to="/" class="home">
          <svg-inline src="~assets/jangwonseok.svg"/>
      </nuxt-link>
      <navigator class="nav"/>
  </header>
</template>

<script>
import Navigator from "@/components/navigator";
export default {
  name: "headerDefault",
    components: {Navigator}
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

    .nav{
        margin-left:auto;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
}
</style>
