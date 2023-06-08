export default () => {
    const { locale, locales, baseUrl } = useI18n()
    const switchLocalePath = useSwitchLocalePath()

    const alternatives = []
    const locs: any[] = locales.value

    for (const l of locs) {
        if (l.code !== locale.value) {
            alternatives.push({
                rel: 'alternate',
                hreflang: l.iso,
                href: baseUrl.value + switchLocalePath(l.code),
            })
        }
    }

    return alternatives
}