<template>
    <article v-if="this.post" class="post">
        <header class="post-header">
            <div v-if="!!this.post.better_featured_image">
                <div class="thumbnail" v-if="!!this.post.better_featured_image.media_details.sizes.medium_large" :style="{background : 'url('+ this.post.better_featured_image.media_details.sizes.medium_large.source_url +')no-repeat'}"/>
                <div class="thumbnail" v-else="!!this.post.better_featured_image" :style="{background : 'url('+ this.post.better_featured_image.source_url +')no-repeat'}"/>
            </div>
            <div class="thumbnail" v-else></div>

            <div class="title-wrap">
                <h1>
                    <strong v-html="this.post.title.rendered"/>
                    <span v-html="this.meta.content"/>
                </h1>
                <span class="author">장 원석 — {{this.moment(this.post.date).format('YYYY. MM. DD.')}}</span>
            </div>
        </header>
        <section class="post-content" v-html="this.post.content.rendered"></section>
    </article>
</template>

<script>
const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();
export default {
    name: "postId",
    layout: 'post',
    fetchOnServer : true,

    data(){
      return {
          meta : {
              title : null,
              content : null
          },
          postList : [],
          post : null,
          categories : {},
          loading : false
      }
    },

    methods: {
        async getPost(){
            this.loading = true;
            let endpoint = '/posts/' + this.$route.params.postId;

            await this.$axios.get(endpoint).then(result => {
                this.post = result.data;
                this.meta.title = entities.decode(result.data.title.rendered);
                this.meta.content = entities.decode(result.data.excerpt.rendered.replace(/<\/?p>/g, ''));
                this.loading = false;
            })
        },
    },

    async fetch() {
        await this.getPost();
    },

    head() {
        return {
            title: this.meta.title,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.meta.content
                }
            ]
        }
    },
}
</script>

<style scoped lang="scss">
@import 'assets/partialAsset';
article {
    margin: auto;
    width: $width-large;
    padding: 64px 32px;
    box-sizing: border-box;

    @media(max-width:$width-normal){
        padding:0 16px;
        width:100%;
    }

    .post-header{
        width:100%;

        .thumbnail{
            position:relative;
            margin:0 -64px;
            height:500px;
            background-size: cover !important;
            background-position: center center !important;

            @media(max-width:$width-normal){
                margin:0 -16px;
                height:200px;
                background-color: $color-blue-500;
            }

            &:before{
                content:'';
                display:block;
                width:100%;
                height:100%;
                background-color: $color-dark-500;
                opacity: 0.1;

                @media(max-width:$width-normal){
                    display:none;
                }
            }
        }

        .title-wrap{
            position:relative;
            background-color: $color-light-100;
            z-index:2;
            top:-50%;
            margin-bottom:-5%;
            padding:32px 64px;
            word-break: keep-all;
            width:$width-normal;
            box-sizing: border-box;
            transform: translateY(-50%);

            @media(max-width:$width-normal){
                top:auto;
                margin:0;
                transform: none;
                padding:16px 0;
                width:100%;
            }

            h1{
                margin:0 0 16px;

                strong{
                    font-size:32px;
                    display:block;
                    font-weight:900;
                    margin-bottom:8px;

                    @media(max-width:$width-normal){
                        word-break: break-word;
                        font-size:24px;
                        margin-bottom:16px;
                    }
                }

                span{
                    font-size:16px;
                    display:block;
                    font-weight:300;
                    color:$color-dark-200;
                    font-style: italic;

                    @media(max-width:$width-normal){
                        background-color: $color-light-300;
                        margin:0 -16px;
                        letter-spacing: -0.5px;
                        font-size:14px;
                        padding:16px 8px;
                        box-sizing: border-box;
                    }
                }
            }

            .author{
                display:inline-block;
                margin:8px 0 0;
                width:100%;
                padding:0;
                font-size:14px;
                color:$color-dark-200;
                font-weight: 300;

                @media(max-width:$width-normal){
                    display:none;
                }
            }
        }
    }

    .post-content{
        position:relative;
        width: $width-content;
        margin:auto auto 64px;
        //margin-bottom:64px;
        font-family: $font-serif;
        font-weight:300;

        @media(max-width:$width-normal){
            width:100%;
        }

        ::v-deep{
            a{
                color:$color-red-300;
                text-decoration: underline;
            }

            p{
                font-size:17px;
                line-height:1.6;
                word-break: break-word;

                @media(max-width:$width-normal){
                    font-size:14px;
                    //word-break: break-all;
                }
            }

            strong{
                font-weight:400;
            }

            h2, h3{
                display:inline-block;
                width:100%;
                font-weight:900;
                font-family: $font-sans-serif;
                font-size:32px;
                margin:32px 0 16px;

                @media(max-width:$width-normal){
                    margin:16px 0 8px;
                    font-size:20px;
                    word-break: break-word;
                }
            }

            & > ul{
                background-color: $color-light-200;
                margin:32px 0;
                padding:32px 64px 32px;
                box-sizing: border-box;
                border:1px solid $color-light-300;
                border-radius:2px;
                font-family: $font-sans-serif;

                @media(max-width:$width-normal){
                    margin:16px 0;
                    padding:16px 16px 16px 32px;
                }

                li{
                    margin-bottom:8px;

                    @media(max-width:$width-normal){
                        font-size:13px;
                    }

                    &:last-child{
                        margin-bottom:0;
                    }

                    ul{
                        margin:16px 0;
                    }
                }
            }

            figure{
                position:relative;
                display:inline-block;
                //max-width:100%;
                //width:auto;
                border:1px solid $color-light-300;
                box-sizing: border-box;
                background-color: $color-light-100;
                margin:0 auto 32px;
                width:auto;
                text-align: center;

                img{
                    display:block;
                    height:auto;
                    max-width:100%;
                    box-sizing: border-box;
                }

                figcaption{
                    //display:block;
                    font-size:13px;
                    font-family: $font-sans-serif;
                    //width:100%;
                    //max-width:$width-normal;
                    padding:16px;
                    border-top:1px solid $color-light-300;
                    box-sizing: border-box;
                    font-style: italic;
                    font-weight:400;

                    a{
                        display:inline-block;
                        margin:4px 0;
                    }
                }
            }

            code {
                display: inline-flex;
                align-content: center;
                color: $color-red-300;
                background-color: $color-light-200;
                border: 1px solid $color-light-300;
                padding: 0 8px;
                box-sizing: border-box;
                font-weight: bold;
                border-radius: 4px;
                font-size: 13px;
                word-break: break-all;
                font-family: "Courier New", monospace;
            }
        }
    }
}

//article.post {
//    width: 100%;
//
//    header {
//        margin-bottom: 64px;
//
//        @media(max-width: $width-normal) {
//            margin-bottom: 24px;
//        }
//
//        h1 {
//            color: $color-dark-500;
//
//            @media(max-width: $width-normal) {
//                margin-top: 0;
//                font-size: 18px;
//                word-break: keep-all;
//            }
//        }
//    }
//
//    .post-content {
//        width: 100%;
//
//        @media(max-width: $width-normal) {
//            font-size: 13px;
//        }
//
//
//        &::v-deep {
//            * {
//                color: $color-dark-300;
//            }
//
//            a {
//                word-break: break-all;
//                color:$color-green-400;
//                text-decoration: underline;
//                transition: all 0.3s ease-in-out;
//
//                &:hover{
//                    color:$color-green-600;
//                    transition: all 0.3s ease-in-out;
//                }
//            }
//
//            p{
//                margin:32px 0;
//            }
//
//            ul {
//                @media(max-width: $width-normal) {
//                    padding-left: 20px;
//                }
//
//                li {
//                    margin-bottom: 8px;
//                    //font-size:12px;
//
//                    @media(max-width: $width-normal) {
//                        &::marker {
//                            font-size: 10px;
//                        }
//                    }
//
//                    &:last-child {
//                        margin-bottom: 0;
//                    }
//                }
//            }
//
//            code {
//                display: inline-flex;
//                align-content: center;
//                color: $color-red;
//                background-color: $color-light-200;
//                border: 1px solid $color-light-300;
//                padding: 0 8px;
//                box-sizing: border-box;
//                font-weight: bold;
//                border-radius: 4px;
//                font-size: 13px;
//                word-break: break-all;
//                font-family: "Courier New", monospace;
//            }
//
//            figure {
//                width: 80%;
//                margin: 32px auto;
//
//                @media(max-width: $width-normal) {
//                    width: 100%;
//                }
//
//                img {
//                    display: block;
//                    width: 100%;
//                    height: auto;
//                }
//
//                figcaption{
//                    text-align: center;
//                    font-size:12px;
//                    color:$color-dark-300;
//
//                    a{
//                        color:$color-green-400;
//                    }
//                }
//            }
//        }
//    }
//}
//
//ul.list {
//    list-style: none;
//    margin: 0;
//    padding: 0 !important;
//    width: 100%;
//
//    li {
//        margin: 0 0 32px;
//        padding: 0;
//        width: 100%;
//
//        @media(max-width: $width-normal) {
//            margin-bottom: 16px;
//        }
//
//        &:last-child {
//            margin-bottom: 0;
//        }
//
//        a {
//            display: flex;
//            width: 100%;
//            box-sizing: border-box;
//            padding: 24px 32px;
//            text-decoration: none;
//            border-radius: 8px;
//            border: 1px solid $color-light-300;
//
//            @media(max-width: $width-normal) {
//                padding: 16px;
//            }
//
//            &:hover {
//                border-color: $color-green-600;
//            }
//
//
//            dl {
//                margin: 0;
//                padding: 0;
//                width: 100%;
//
//                dt {
//                    margin: 0 0 16px;
//                    padding: 0;
//                    font-size: 18px;
//                    color: $color-dark-500;
//                    font-weight: bold;
//                    word-break: keep-all;
//
//                    @media(max-width: $width-normal) {
//                        word-break: break-all;
//                    }
//                }
//
//                dd {
//                    margin: 0;
//                    padding: 0;
//                    color: $color-dark-200;
//
//                    ::v-deep p {
//                        display: -webkit-box;
//                        margin: 0;
//                        font-size: 13px;
//                        line-height: 1.5;
//                        word-break: break-all;
//                        overflow: hidden;
//                        -webkit-line-clamp: 3;
//                        -webkit-box-orient: vertical;
//                    }
//                }
//            }
//        }
//    }
//}
</style>
