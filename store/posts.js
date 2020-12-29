import fetchAPI from '../plugins/fetch'

export const state = () => ({
    postList : [],
    post : null,
    categories : [],
    loading : false
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
    },

    SET_LOADING(state, payload){
        // if(payload === false){
        //     state.loading = payload;
        //     // setTimeout(()=>{
        //     //     state.loading = payload;
        //     // }, 200);
        // }else{
        //     state.loading = payload;
        // }
        state.loading = payload;
    }
}

export const actions = {
    async getCategories({commit}){
        commit('SET_LOADING', true);
        await this.$axios.get('/categories').then(result =>{
            let categoryArrange = {};
            result.data.forEach(item => {
                categoryArrange[item.slug] = item.id;
            })
            commit('SET_LOADING', false);
            commit('SET_CATEGORIES', categoryArrange);
        });
    },


    async getPost({state, commit, dispatch}, {category, postId}){
        commit('SET_LOADING', true);
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

            fetchAPI('GET', endpoint).then(result => {
                if(postId){
                    commit('SET_POST', result.data);
                }else{
                    commit('SET_LIST', result.data);
                }

                commit('SET_LOADING', false);
            })
        })
    },
}
