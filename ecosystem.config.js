module.exports = {
    apps: [
        {
            name: 'jangwonseok.me',
            exec_mode: 'cluster',
            instances: '2', // Or a number of instances
            script: './node_modules/nuxt/bin/nuxt.js',
            args: 'start',
            env_production: {
                NODE_ENV: 'production',
                PORT: '8081',
            },
        }
    ]
}
