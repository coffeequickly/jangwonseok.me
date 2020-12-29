<template>
    <section>
        <client-only>
        <dl>
            <dt>All Scribbler</dt>
            <dd class="post-list">
                <article v-for="(list, index) in this.postList" :key="index">
                    <nuxt-link :to="Object.keys(categories).find(key => {return categories[key] === list['categories'][0]}) + '/' + list.id">
                        <figure v-if="list.better_featured_image !== null">
                            <div class="thumbnail" v-if="list.better_featured_image.media_details.sizes.medium" :style="{backgroundImage : 'url('+ list.better_featured_image.media_details.sizes.medium.source_url +')'}"/>
                            <div class="thumbnail" v-else :style="{backgroundImage : 'url('+ list.better_featured_image.media_details.sizes.thumbnail.source_url +')'}"/>
                            <article-label/>
                        </figure>

                        <figure v-else class="no-featured-image">
                            <svg-inline src="~assets/jangwonseok.svg"/>
                            <article-label/>
                        </figure>

                        <div class="content">
                            <h2 v-html="list.title.rendered"/>
                            <div class="excerpt" v-html="list.excerpt.rendered"/>

                            <ul>
                                <li>front-end</li>
                            </ul>
                        </div>
                    </nuxt-link>
                </article>
            </dd>
        </dl>
        </client-only>
    </section>
</template>

<script>
import ArticleLabel from "@/components/articleLabel";
export default {
    name: "index",
    components: {ArticleLabel},
    layout: 'default',
    fetchOnServer : true,
    data(){
        return {
            postList : [],
            categories : {},
            loading : false
        }
    },
    methods : {
        async getCategories(){
            await this.$axios.get('/categories').then(result =>{
                let categoryArrange = {};
                result.data.forEach(item => {
                    categoryArrange[item.slug] = item.id;
                })
                this.categories = categoryArrange;
            });
        },
        async getListAll(){
            this.loading = true;
            await this.getCategories();
            await this.$axios.get('/posts?_embed&per_page=100').then(result => {
                this.postList = result.data;
                this.loading = false;
            })
        },
    },
    async fetch() {
        await this.getListAll();
    }
}
</script>

<style scoped lang="scss">
@import 'assets/partialAsset';
section{
    dl{
        margin:0;
        width:100%;
        padding:64px 32px;
        box-sizing: border-box;

        dt{
            font-weight:900;
            text-transform: uppercase;
            font-size:48px;
            letter-spacing: -1px;
            box-sizing: border-box;
            margin-bottom:32px;
        }

        dd.post-list{
            display:flex;
            flex-direction: row;
            flex-wrap:wrap;
            //justify-content: space-between;
            margin:-16px 0;
            padding:0;
            width:100%;

            article{
                display:block;
                width:24.25%;
                margin:32px 1% 0 0;

                &:nth-child(4n){
                    margin-right:0;
                }

                a{
                    display:block;
                    width:100%;

                    figure{
                        position:relative;
                        background-color: $color-light-200;
                        width: 100%;
                        padding-top: 60%;
                        margin:0;

                        .thumbnail{
                            position: absolute;
                            top:0;
                            left:0;
                            z-index:1;
                            width:100%;
                            height:100%;
                            background-size: cover;
                            background-position: center center;
                        }

                        &:before{
                            content:'';
                            position:absolute;
                            top:0;
                            left:0;
                            display:block;
                            width:100%;
                            height:100%;
                            z-index:2;
                            background-color: $color-dark-500;
                            opacity: 0.05;
                        }

                        &.no-featured-image{
                            background-color: $color-blue-500;

                            ::v-deep svg{
                                position:absolute;
                                top:50%;
                                left:50%;
                                transform: translate(-50%, -50%);
                                width:128px;
                                height:128px;
                            }
                        }
                    }

                    .content{
                        position:relative;
                        min-height:136px;

                        h2{
                            font-size:18px;
                            word-break: keep-all;
                            font-weight:700;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                            margin:16px 0 8px;
                        }

                        .excerpt{
                            ::v-deep p{
                                display: -webkit-box;
                                -webkit-line-clamp: 2;
                                -webkit-box-orient: vertical;
                                overflow: hidden;
                                margin:0;
                                color:$color-dark-300;
                                font-size:12px;
                                font-weight:300;
                            }
                        }

                        ul{
                            margin:0;
                            padding:0;
                            position:absolute;
                            bottom:0;
                            left:0;
                            width:100%;
                            list-style: none;

                            li{
                                display:inline-block;
                                width:auto;
                                margin-right:8px;
                                color:$color-dark-200;
                                font-size:11px;
                                box-sizing: border-box;
                                border:1px solid $color-light-300;
                                padding:2px 8px;
                                text-transform: capitalize;
                                background-color: $color-light-200;

                                //&:after{
                                //    content:', ';
                                //}

                                &:last-child{
                                    margin-right:0;

                                    //&:after{
                                    //    content:'';
                                    //}
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}













//article{
//    width:100%;
//    //min-height:calc(100vh - (64px + 48px));
//    //font-family: $font-sans-serif;
//
//    figure{
//        padding:0;
//        margin:0 0 16px;
//
//        img{
//            display:block;
//            width:100%;
//            height:auto !important;
//        }
//    }
//
//    dl{
//        margin:0 0 16px;
//
//        dt{
//            margin:0;
//            padding:0;
//            font-size:18px;
//        }
//
//        dd{
//            margin:0;
//            padding:0;
//
//            ul{
//                li{
//                    margin-bottom:4px;
//
//                    &:last-child{
//                        margin-bottom:0;
//                    }
//
//                    a{
//
//                    }
//                }
//            }
//        }
//    }
//}
</style>
