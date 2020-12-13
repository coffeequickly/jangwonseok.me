<template>
    <article v-if="this.$store.state.posts.post" class="post">
        <header class="post-header">
            <h1 v-html="this.$store.state.posts.post.title.rendered"></h1>
        </header>
        <section class="post-content" v-html="this.$store.state.posts.post.content.rendered"></section>
    </article>

    <ul v-else-if="this.$store.state.posts.postList" class="list">
        <li v-for="(list, index) in this.$store.state.posts.postList" :key="index">
            <nuxt-link :to="$route.params.category+'/'+list.id">
                <dl>
                    <dt v-html="list.title.rendered"></dt>
                    <dd v-html="list.excerpt.rendered"></dd>
                </dl>
            </nuxt-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: "postId",
    layout: 'post',
    mounted() {
        this.$store.dispatch('posts/getPost', {
            category : this.$route.params.postId ? null : this.$route.params.category,
            postId: this.$route.params.postId
        });
    }
}
</script>

<style scoped lang="scss">
@import 'assets/partialAsset';

article.post{
    width:100%;

    header{
        margin-bottom:64px;

        @media(max-width:$width-normal){
            margin-bottom:24px;
        }

        h1{
            color:$color-dark-500;

            @media(max-width:$width-normal){
                margin-top:0;
                font-size:18px;
                word-break: keep-all;
            }
        }
    }

    .post-content{
        width:100%;

        @media(max-width:$width-normal){
            font-size:13px;
        }


        &::v-deep{
            *{
                color:$color-dark-300;
            }

            a{
                word-break: break-all;
            }

            ul{
                @media(max-width:$width-normal){
                    padding-left: 20px;
                }

                li{
                    margin-bottom:16px;

                    @media(max-width:$width-normal){
                        &::marker{
                            font-size: 10px;
                        }
                    }

                    &:last-child{
                        margin-bottom:0;
                    }
                }
            }

            code{
                display:inline-flex;
                align-content: center;
                color:$color-red;
                background-color: $color-light-200;
                border:1px solid $color-dark-100;
                padding:0 8px;
                box-sizing: border-box;
                font-weight:bold;
                border-radius: 4px;
                font-size:13px;
                word-break: break-all;
                font-family: "Courier New", monospace;
            }

            figure{
                width:80%;
                margin:16px auto;

                @media(max-width:$width-normal) {
                    width:100%;
                }

                img{
                    display:block;
                    width:100%;
                    height:auto;
                }
            }
        }
    }
}

ul.list{
    list-style: none;
    margin:0;
    padding:0 !important;
    width:100%;

    li{
        margin:0 0 32px;
        padding:0;
        width:100%;

        @media(max-width:$width-normal){
            margin-bottom:16px;
        }

        &:last-child{
            margin-bottom:0;
        }

        a{
            display:flex;
            width:100%;
            box-sizing: border-box;
            padding:24px 32px;
            text-decoration: none;
            border-radius: 8px;
            border:1px solid $color-dark-100;

            @media(max-width:$width-normal){
                padding:16px;
            }

            &:hover{
                border-color:$color-green-600;
            }


            dl{
                margin:0;
                padding:0;
                width:100%;

                dt{
                    margin:0 0 16px;
                    padding:0;
                    font-size:18px;
                    color:$color-dark-500;
                    font-weight:bold;
                    word-break: keep-all;

                    @media(max-width:$width-normal){
                        word-break: break-all;
                    }
                }

                dd{
                    margin:0;
                    padding:0;
                    color:$color-dark-200;

                    ::v-deep p{
                        display:-webkit-box;
                        margin:0;
                        font-size:13px;
                        line-height:1.5;
                        word-break: break-all;
                        overflow: hidden;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                    }
                }
            }
        }
    }
}
</style>
