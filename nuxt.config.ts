// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            script: [
                { 
                    innerHTML: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
            
                    gtag('config', 'UA-209757583-1');`
                },
                { src: 'https://www.googletagmanager.com/gtag/js?id=UA-209757583-1', async: true },
                { src: '/js/jquery-1.8.2.min.js' },
                { src: '/js/vendor/custom.modernizr.js' },
                { src: '/js/foundation.min.js', body: true },
                { src: '/js/functions.js', body: true },
                { src: '/js/jquery.nicescroll.js', body: true },
                { src: '/js/jquery.localscroll-1.2.7.js', body: true },
                { src: '/js/jquery.scrollTo-1.4.3.1.js', body: true },
                { src: '/js/jquery.flexslider.js', body: true },
                { src: '/js/custom.js', body: true },
            ],
            link: [
                { rel: 'preload', as: 'image', href: '/img/main_slide.jpg' },
                { rel: 'preload', as: 'image', href: '/img/handphone.png' },
                { rel: 'preload', as: 'image', href: '/img/super.jpg' },
                { rel: 'stylesheet', href: '/css/normalize.css' },
                { rel: 'stylesheet', href: '/css/foundation.min.css' },
                { rel: 'stylesheet', href: '/css/style.css' },
                { rel: 'stylesheet', href: '/css/ie.css' },
                { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css' },
                { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Noto+Sans:400,700' },
                { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Cabin+Condensed:600' },
                { rel: 'stylesheet', type: 'text/css', href: '/css/flexslider.css', body: true },
            ]
        }
    },
    modules: [
        '@nuxtjs/i18n',
        'nuxt-lazy-hydrate'
    ],
    i18n: {
        vueI18n: './i18n.config.ts',
        locales: [
            { code: 'ua', iso: 'uk-UA', name: 'Українська' },
            { code: 'en', iso: 'en-US', name: 'English' },
            { code: 'ru', iso: 'ru-RU', name: 'Русский' }    
        ], 
        defaultLocale: 'ua', 
        baseUrl: process.env.NODE_ENV === 'production' ? 'https://evacuator-uz.com.ua' : 'http://localhost:3000',
    },
})
