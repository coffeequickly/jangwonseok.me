<template>
    <client-only>
    <header>
        <div class="header-wrap">
            <nuxt-link to="/" tag="button" class="button-clear brand">
                <svg-inline src="~assets/jangwonseok.svg"/>
                <span>archive!</span>
            </nuxt-link>
            <navigator :class="{ active : this.nav }" />

            <button class="button-clear toggle-navigation" @click.prevent="toggleNav">
                <svg-inline src="~assets/icon/menu.svg" :class="{ active : this.nav }" />
            </button>
        </div>
    </header>
    </client-only>
</template>

<script>
import Navigator from "@/components/navigator";

export default {
    name: "headerDefault",
    components: {Navigator},

    computed : {
        nav(){
            return this.$store.state.nav;
        }
    },

    methods : {
        toggleNav(){
            this.$store.commit('SET_NAV');
        }
    }
}
</script>

<style scoped lang="scss">
@import 'assets/partialAsset';
header{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:72px;
    display:flex;
    background-color: $color-light-100;
    box-sizing: border-box;
    border-bottom:1px solid $color-light-300;
    z-index:9;

    @media (max-width:$width-normal) {
        height:50px;
    }

    .header-wrap{
        display:flex;
        width:1540px;
        margin:auto;
        padding:0 32px;
        box-sizing: border-box;
        align-items: center;

        @media (max-width:$width-normal) {
            padding:0 16px;
            width:100%;
        }

        .brand{
            position:relative;
            display:flex;
            flex-direction: row;
            align-items: center;
            height:48px;
            box-sizing: border-box;

            @media (max-width:$width-normal) {
                height:40px;
            }

            &:hover{
                ::v-deep svg{
                    path[fill='#F6DBD7']{
                        opacity: 0.6 !important;
                        transition: opacity 0.5s ease-out;
                    }
                }
            }

            ::v-deep svg{
                width:auto;
                height:100%;

                path[fill='#F6DBD7']{
                    opacity: 0 !important;
                    transition: opacity 0.5s ease-out;
                }
            }

            span{
                font-weight:900;
                font-size:24px;
                font-style: italic;
                margin-left:16px;

                @media (max-width:$width-normal) {
                    font-size:16px;
                    margin-left:8px;
                }
            }
        }

        .navigation{
            display:flex;
            flex-direction: row;
            margin-left:auto;
            align-items: center;

            @media (max-width:$width-normal) {
                display:none;
                height:100vh;
                position:fixed;
                top:50px;
                left:0;
                width:100%;
                background-color: $color-light-100;
                flex-direction: column;

                &.active{
                    display:flex;
                }
            }


            ::v-deep a{
                display: inline-block;
                margin-right:32px;
                font-size:16px;
                font-weight:300;
                color:$color-dark-500;
                font-style: italic;
                text-align: center;

                @media (max-width:$width-normal) {
                    margin:0;
                    padding:16px;
                    box-sizing: border-box;
                    border-bottom:1px solid $color-light-300;
                    width:100%;
                }

                &:last-child{
                    margin-right:0;
                }

                &:hover{
                    text-decoration: underline;
                }

                &.is-active{
                    @media (max-width:$width-normal) {
                        background-color: $color-blue-500;
                        color:$color-light-100;
                        font-weight:bold;
                    }
                }
            }
        }

        .toggle-navigation{
            position:relative;
            top:-2px;
            display:none;
            align-items: center;
            justify-content: center;
            width:36px;
            height:36px;
            margin-left:auto;

            @media(max-width:$width-normal){
                display:flex;
            }

            ::v-deep svg{
                width:32px;
                height:32px;
                display:flex;
                align-items: center;
                justify-content: center;

                .svg-menu-toggle {
                    fill:$color-dark-500;
                    pointer-events:all; //needs to be there so the hover works

                    .bar {
                        transform:rotate(0) translateY(0) translateX(0);
                        opacity:1;
                        transition: transform 0.4s ease-in-out, opacity 0.2s ease-in-out;

                        &:nth-of-type(1) {
                            transform-origin: 20px 10px;
                        }

                        &:nth-of-type(3) {
                            transform-origin: 20px 20px;
                        }
                    }
                }

                &.active{
                    .svg-menu-toggle {
                        .bar:nth-of-type(1) {
                            -webkit-transform:rotate(-45deg) translateY(0) translateX(0);
                            transform:rotate(-45deg) translateY(0) translateX(0);
                        }
                        .bar:nth-of-type(2) {
                            opacity:0;
                        }

                        .bar:nth-of-type(3) {
                            -webkit-transform:rotate(45deg) translateY(0em) translateX(0em);
                            transform:rotate(45deg) translateY(0em) translateX(0em);

                        }
                    }
                }
            }
        }
    }
}
</style>
