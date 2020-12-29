export const state = () => ({
    nav : false
})

export const mutations = {
    SET_NAV(state, payload){
        if(payload === false){
            state.nav = payload
        }else{
            state.nav = state.nav === false;
        }
    }
}

// 서버측 렌더링 로직은 여기에
export const actions = {
    async nuxtServerInit({ state, dispatch }, {app}) {
        await dispatch('posts/getCategories');
    }
}
