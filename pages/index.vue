<template>
    <section>

        <dl>
            <dt>All Posts</dt>
            <dd class="post-list" v-if="this.loading">
                <article v-for="n in 8" :key="n">
                    <PuSkeleton :count="1" height="200px" width="100%" :style="{marginBottom : '8px'}" class="thumbnail-wrap"/>
                    <div class="content">
                        <PuSkeleton :count="1" height="54px" width="100%" :style="{marginTop : '16px', marginBottom : '8px'}" class="title" />
                        <PuSkeleton :count="1" height="36px" width="100%" class="excerpt"/>
                    </div>
                </article>
            </dd>

            <dd class="post-list" v-else>
                <article v-for="(list, index) in this.postList" :key="index">
                    <nuxt-link :to="Object.keys(categories).find(key => {return categories[key] === list['categories'][0]}) + '/' + list.id">
                        <figure v-if="list.better_featured_image !== null" class="thumbnail-wrap">
                            <div class="thumbnail" v-if="list.better_featured_image.media_details.sizes.thumbnail" :style="{backgroundImage : 'url('+ list.better_featured_image.media_details.sizes.thumbnail.source_url +')'}"/>
                            <div class="thumbnail" v-else :style="{backgroundImage : 'url('+ list.better_featured_image.source_url +')'}"/>
                            <div class="fresh-post" v-if="$nuxt.moment(list.date).format('x') > $nuxt.moment().add('-2', 'days').format('x')">싱싱한 새로 나온 글!</div>
                        </figure>

                        <figure v-else class="thumbnail-wrap no-featured-image">
                            <svg-inline src="~assets/jangwonseok.svg"/>
                            <div class="fresh-post" v-if="$nuxt.moment(list.date).format('x') > $nuxt.moment().add('-2', 'days').format('x')">싱싱한 새로 나온 글!</div>
                        </figure>

                        <div class="content">
                            <h2 class="title" v-html="list.title.rendered"/>
                            <div class="excerpt" v-html="list.excerpt.rendered"/>
                        </div>
                    </nuxt-link>
                    <ul class="tags" v-if="list._embedded['wp:term'][1].length > 0">
                        <li v-for="(tag, index) in list._embedded['wp:term'][1]" :key="index">{{tag.name}}</li>
                    </ul>
                </article>
            </dd>
        </dl>

    </section>
</template>

<script>
export default {
    name: "index",
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
    margin:0;
    width:100%;
    padding:64px 32px;
    box-sizing: border-box;

    dl{
        margin:0;
        padding:0;

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
                position:relative;
                display:block;
                width:24.25%;
                margin:32px 1% 0 0;
                height:350px;

                &:nth-child(4n){
                    margin-right:0;
                }

                //&:nth-child(1), &:nth-child(2){
                //    width:48.5%;
                //    height:auto;
                //    margin:32px 2% 0 0;
                //}

                ::v-deep span{
                    display:block;
                }

                a{
                    display:block;
                    width:100%;

                    &:hover{
                        figure{
                            &:before, .fresh-post{
                                opacity: 0;
                                transition: all 0.3s ease-out;
                            }
                        }

                        .thumbnail{
                            filter:grayscale(0) !important;
                            transition: all 0.3s ease-out;
                        }
                    }

                    .thumbnail-wrap{
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
                            filter:grayscale(0.5);
                            transition: all 0.3s ease-out;
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
                            opacity: 0.1;
                            transition: all 0.3s ease-out;
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

                        .fresh-post{
                            position:absolute;
                            bottom:0;
                            right:0;
                            z-index:2;
                            font-size:11px;
                            color:$color-light-100;
                            background-color: $color-red-300;
                            padding:4px 8px;
                            line-height:1;
                            box-sizing: border-box;
                            opacity: 1;
                            transition: all 0.3s ease-out;
                        }
                    }

                    .content{
                        position:relative;

                        .title{
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
                    }
                }

                ul.tags{
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
                        text-transform: lowercase;
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
