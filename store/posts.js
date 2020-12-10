export const state = () => ({
    list : [],
    post : null
})

export const mutations = {
    SET_LIST(state, payload){
        state.list = payload;
    },

    SET_POST(state, payload){
        state.post = payload;
    }
}

export const actions = {
    async getPost({commit}, postId){
        let endpoint = '/posts/';

        if(postId){
            endpoint += postId;
        }

        await $nuxt.fetchAPI('GET', endpoint).then(result => {
            if(postId){
                commit('SET_POST', result.data);
            }else{
                commit('SET_LIST', result.data);
            }
        })
    },
}
