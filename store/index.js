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

