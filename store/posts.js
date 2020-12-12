export const state = () => ({
    postList : [],
    post : null
})

export const mutations = {
    SET_LIST(state, payload){
        state.postList = payload;
    },

    SET_POST(state, payload){
        state.post = payload;
    }
}

export const actions = {
    async getPost({commit}, {postType, postId}){
        console.log(postId);

        let endpoint = '/posts/';

        if(postId){
            endpoint += postId;
        }

        // TODO : postType 분리되면 거기 맞게 endpoint 분기처리 해주어야 함.

        await $nuxt.fetchAPI('GET', endpoint).then(result => {
            if(postId){
                commit('SET_POST', result.data);
            }else{
                commit('SET_LIST', result.data);
            }
        })
    },
}
