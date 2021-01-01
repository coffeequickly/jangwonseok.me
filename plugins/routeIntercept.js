export default async ({ app, store, route }) => {
    await app.router.afterEach((to, from) => {
        store.commit('SET_NAV', false);
    })
};
