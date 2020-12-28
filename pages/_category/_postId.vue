<template>
    <div v-if="this.loading" style="width:100%;">
        <div v-if="this.$route.params.postId && this.$route.params.category">
            <header class="post-header">
                <h1>
                    <PuSkeleton :count="1" height="84px" width="100%"/>
                </h1>
            </header>
            <section class="post-content">
                <PuSkeleton :count="1" height="1000px" width="100%"/>
            </section>
        </div>

        <ul class="list">
            <li v-for="n in 10">
                <PuSkeleton :count="1" height="150px" width="100%"/>
            </li>
        </ul>
    </div>

    <!--    <div v-if="this.$route.params.postId && this.$route.params.category">-->
    <article v-else-if="this.post" class="post">
        <header class="post-header">
            <h1 v-html="this.post.title.rendered"></h1>
        </header>
        <section class="post-content" v-html="this.post.content.rendered"></section>
    </article>
    <!--    </div>-->

    <ul v-else class="list">
        <li v-for="(list, index) in this.postList" :key="index">
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
        async getCategories(){
            await this.$axios.get('/categories').then(result =>{
                let categoryArrange = {};
                result.data.forEach(item => {
                    categoryArrange[item.slug] = item.id;
                })
                this.categories = categoryArrange;
            });
        },


        async getPost(){
            await this.getCategories();

            this.loading = true;
            let endpoint = '/posts/'
            const category = this.$route.params.postId ? null : this.$route.params.category,
                postId = this.$route.params.postId

            if(category){
                endpoint += '?categories=' + this.categories[category];
            }

            if(postId){
                endpoint += postId;
            }else if(category){
                endpoint += '&per_page=100';
            }else{
                endpoint += '?per_page=100';
            }

            await this.$axios.get(endpoint).then(result => {
                if(postId){
                    this.post = result.data;
                    this.meta.title = entities.decode(result.data.title.rendered);
                    this.meta.content = entities.decode(result.data.excerpt.rendered.replace(/<\/?p>/g, ''));
                }else{
                    this.postList = result.data;
                    let title = '';
                    if(category === 'logs'){
                        title = '탐구생활'
                    }else{
                        title = '고민고민'
                    }
                    this.meta.title = 'Article List > #'+title;
                }

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

article.post {
    width: 100%;

    header {
        margin-bottom: 64px;

        @media(max-width: $width-normal) {
            margin-bottom: 24px;
        }

        h1 {
            color: $color-dark-500;

            @media(max-width: $width-normal) {
                margin-top: 0;
                font-size: 18px;
                word-break: keep-all;
            }
        }
    }

    .post-content {
        width: 100%;

        @media(max-width: $width-normal) {
            font-size: 13px;
        }


        &::v-deep {
            * {
                color: $color-dark-300;
            }

            a {
                word-break: break-all;
                color:$color-green-400;
                text-decoration: underline;
                transition: all 0.3s ease-in-out;

                &:hover{
                    color:$color-green-600;
                    transition: all 0.3s ease-in-out;
                }
            }

            p{
                margin:32px 0;
            }

            ul {
                @media(max-width: $width-normal) {
                    padding-left: 20px;
                }

                li {
                    margin-bottom: 8px;
                    //font-size:12px;

                    @media(max-width: $width-normal) {
                        &::marker {
                            font-size: 10px;
                        }
                    }

                    &:last-child {
                        margin-bottom: 0;
                    }
                }
            }

            code {
                display: inline-flex;
                align-content: center;
                color: $color-red;
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

            figure {
                width: 80%;
                margin: 32px auto;

                @media(max-width: $width-normal) {
                    width: 100%;
                }

                img {
                    display: block;
                    width: 100%;
                    height: auto;
                }

                figcaption{
                    text-align: center;
                    font-size:12px;
                    color:$color-dark-300;

                    a{
                        color:$color-green-400;
                    }
                }
            }
        }
    }
}

ul.list {
    list-style: none;
    margin: 0;
    padding: 0 !important;
    width: 100%;

    li {
        margin: 0 0 32px;
        padding: 0;
        width: 100%;

        @media(max-width: $width-normal) {
            margin-bottom: 16px;
        }

        &:last-child {
            margin-bottom: 0;
        }

        a {
            display: flex;
            width: 100%;
            box-sizing: border-box;
            padding: 24px 32px;
            text-decoration: none;
            border-radius: 8px;
            border: 1px solid $color-light-300;

            @media(max-width: $width-normal) {
                padding: 16px;
            }

            &:hover {
                border-color: $color-green-600;
            }


            dl {
                margin: 0;
                padding: 0;
                width: 100%;

                dt {
                    margin: 0 0 16px;
                    padding: 0;
                    font-size: 18px;
                    color: $color-dark-500;
                    font-weight: bold;
                    word-break: keep-all;

                    @media(max-width: $width-normal) {
                        word-break: break-all;
                    }
                }

                dd {
                    margin: 0;
                    padding: 0;
                    color: $color-dark-200;

                    ::v-deep p {
                        display: -webkit-box;
                        margin: 0;
                        font-size: 13px;
                        line-height: 1.5;
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
