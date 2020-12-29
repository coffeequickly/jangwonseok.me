<template>
    <section>
        <dl>
            <dt>All Scribbler</dt>
            <dd class="post-list">
                <article v-for="(list, index) in this.postList" :key="index">
                    <nuxt-link :to="Object.keys(categories).find(key => {return categories[key] === list['categories'][0]}) + '/' + list.id">
                        <figure v-if="list._embedded['wp:featuredmedia']">
                            <img :src="list._embedded['wp:featuredmedia'][0].source_url">
                        </figure>
                        <h2 v-html="list.title.rendered"/>
                    </nuxt-link>
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
            margin:0;
            padding:0;
            width:100%;

            article{
                display:block;
                width:100%;

                a{
                    display:block;
                    width:100%;

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
