export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'ua',
    defaultLocale: 'ua',
    messages: {
        ua: {
            welcome: 'Вітаю'
        },
        en: {
            welcome: 'Welcome'
        },
        ru: {
            welcome: 'Привет'
        }
    }
}))