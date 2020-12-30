<template>
    <section class="post-list-wrap">
        <dl>
            <dt v-if="this.loading"><PuSkeleton :count="1" height="72px" width="100%" /></dt>
            <dt v-else>{{ this.listTitle }}</dt>

            <dd class="post-list" v-if="this.loading">
                <article class="placeholder" v-for="n in 8" :key="n">
                    <PuSkeleton :count="1" height="200px" width="100%" :style="{marginBottom : '8px'}"/>
                    <div class="content">
                        <PuSkeleton :count="1" height="54px" width="100%" :style="{marginTop : '16px', marginBottom : '8px'}"/>
                        <PuSkeleton :count="1" height="36px" width="100%"/>
                    </div>
                </article>

                <PuSkeleton  v-for="n in 8" :key="n" :count="1" height="144px" width="100%" class="mobile-placeholder"/>
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
          listTitle : null,
          postList : [],
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
            let endpoint = '/posts?_embed'
            const category = this.$route.params.postId ? null : this.$route.params.category,
                postId = this.$route.params.postId

            if(category){
                endpoint += '&categories=' + this.categories[category];
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
                        title = 'Technical Logs'
                    }else{
                        title = 'Contemplation & Reflection'
                    }
                    this.meta.title = 'Post List > '+title;

                    this.listTitle = title;
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
</style>
