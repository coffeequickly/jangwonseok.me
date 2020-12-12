export default {
    // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
    ssr: false,
    target: 'static',
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'Wonseok Jang - Service Oriented Web Software Engineer',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {
                hid: 'description',
                name: 'description',
                content: '저는 남들보다는 조금 더 여러가지 수식어와 범주에 걸쳐 있는 개발자입니다. 서비스 중심의 개발을 지향합니다.'
            },
            {
                hid: 'og:image',
                property: 'og:image',
                content: 'https://jangwonseok.me/meta/jangwonseok.me.jpg'
            }
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/meta/favicon/favicon.ico'},
            {rel: 'apple-touch-icon', sizes: '57x57', href: '/meta/favicon/apple-icon-57x57.png'},
            {rel: 'apple-touch-icon', sizes: '60x60', href: '/meta/favicon/apple-icon-60x60.png'},
            {rel: 'apple-touch-icon', sizes: '72x72', href: '/meta/favicon/apple-icon-72x72.png'},
            {rel: 'apple-touch-icon', sizes: '76x76', href: '/meta/favicon/apple-icon-76x76.png'},
            {rel: 'apple-touch-icon', sizes: '114x114', href: '/meta/favicon/apple-icon-114x114.png'},
            {rel: 'apple-touch-icon', sizes: '120x120', href: '/meta/favicon/apple-icon-120x120.png'},
            {rel: 'apple-touch-icon', sizes: '144x144', href: '/meta/favicon/apple-icon-144x144.png'},
            {rel: 'apple-touch-icon', sizes: '152x152', href: '/meta/favicon/apple-icon-152x152.png'},
            {rel: 'apple-touch-icon', sizes: '180x180', href: '/meta/favicon/apple-icon-180x180.png'},
            {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/meta/favicon/favicon-32x32.png'},
            {rel: 'icon', type: 'image/png', sizes: '96x96', href: '/meta/favicon/favicon-96x96.png'},
            {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/meta/favicon/favicon-16x16.png'},
            {rel: 'icon', type: 'image/png', sizes: '192x192', href: '/meta/favicon/android-icon-192x192.png'},
            {rel: 'icon', type: 'image/png', sizes: '192x192', href: '/meta/favicon/android-icon-192x192.png'}
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        'normalize.css/normalize.css',
        {
            src: '~/assets/common.scss',
            lang: 'scss'
        }
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        {src : '~plugins/googleAnalytics.js', mode: 'client'},
        {src : '~plugins/fetch.js', mode: 'client'},
        {src : '~plugins/svg-inline.js', mode: 'client'},
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [],

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        publicPath: '/_core/',
        extend(config, {isDev, isClient}) {

            // Store Vue loaders
            const vueLoader = config.module.rules.find(function (module) {
                return module.test.toString() === '/\\.vue$/i'
            })

            // Remove SVG from default rules
            config.module.rules.forEach((rule) => {
                console.log(rule);
                if (rule.test.toString() === '/\\.(png|jpe?g|gif|svg|webp|avif)$/i') {
                    rule.test = /\.(png|jpe?g|gif|webp)$/i
                }
            })

            // Add svg inline loader configuration
            config.module.rules.push({
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            })

            // Important to apply transforms on svg-inline:src
            vueLoader.options.transformAssetUrls['svg-inline'] = 'src'
        }
    }
}
