<template>
    <section class="post-list-wrap">
        <dl>
            <dt>All Posts</dt>
            <dd class="post-list" v-if="this.loading">
                <div>
                    <article class="placeholder" v-for="n in 8" :key="n">
                        <PuSkeleton :count="1" height="200px" width="100%" :style="{marginBottom : '8px'}"/>
                        <div class="content">
                            <PuSkeleton :count="1" height="54px" width="100%" :style="{marginTop : '16px', marginBottom : '8px'}"/>
                            <PuSkeleton :count="1" height="36px" width="100%"/>
                        </div>
                    </article>
                </div>

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
</style>
