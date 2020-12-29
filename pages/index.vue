<template>
    <article>
        <figure>
            <img src="@/assets/jangwonseok.jpg" title="Wonseok Jang" alt="Wonseok Jang"/>
        </figure>
        <div class="notice">
            <p>넓지만 아직은 얕게, 꾸준히 채워나가기 위해 배우고 있습니다.</p>
            <p>2016년 부터 서울에서 웹 프로그래밍을 하고 있습니다.</p>
        </div>
        <dl class="quick">
            <dt>저에 대해 궁금하시다면</dt>
            <dd>
                <ul>
                    <li><nuxt-link to="/about">소개 바로가기</nuxt-link></li>
                    <li><a href="mailto:contact@jangwonseok.me">contact@jangwonseok.me</a></li>
                    <li><a href="https://github.com/coffeequickly" target="_blank">github.com/coffeequickly</a></li>
                </ul>
            </dd>
        </dl>
        <dl class="post-list">
            <dt>작성한 글타래</dt>
            <dd>
                <ul v-if="this.loading">
                    <li v-for="n in 10">
                        <PuSkeleton :count="2" height="20px"/>
                    </li>
                </ul>
                <ul v-else>
                    <li v-for="(list, index) in this.postList" :key="index">
                        <nuxt-link :to="Object.keys(categories).find(key => {return categories[key] === list['categories'][0]}) + '/' + list.id" v-html="list.title.rendered"></nuxt-link>
                    </li>
                </ul>
            </dd>
        </dl>
    </article>
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
            await this.$axios.get('/posts?per_page=100').then(result => {
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
