export const state = () => ({
    postList : [],
    post : null,
    categories : []
})

export const mutations = {
    SET_LIST(state, payload){
        state.postList = payload;
    },

    SET_POST(state, payload){
        state.post = payload;
    },
    SET_CATEGORIES(state, payload){
        state.categories = payload;
    }
}

export const actions = {
    async getCategories({commit}){
        await $nuxt.fetchAPI('GET', '/categories').then(result =>{
            let categoryArrange = {};
            result.data.forEach(item => {
                categoryArrange[item.slug] = item.id;
            })

            commit('SET_CATEGORIES', categoryArrange);
        });
    },


    async getPost({state, commit, dispatch}, {category, postId}){

        await dispatch('getCategories').then(() =>{
            commit('SET_POST', null);
            commit('SET_LIST', []);

            let endpoint = '/posts/';

            if(category){
                endpoint += '?categories=' + state.categories[category];
            }

            if(postId){
                endpoint += postId;
            }else if(category){
                endpoint += '&per_page=100';
            }else{
                endpoint += '?per_page=100';
            }

            $nuxt.fetchAPI('GET', endpoint).then(result => {
                if(postId){
                    commit('SET_POST', result.data);
                }else{
                    commit('SET_LIST', result.data);
                }
            })
        })
    },
}
