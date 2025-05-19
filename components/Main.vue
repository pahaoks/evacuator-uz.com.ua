<template>
    <div>
        <Menu />
        <Header />
        <NumberSaved />
        <Call />
        <Features />
        <Product />
        <Reviews />
        <LazyHydrate never>
            <Photos />
        </LazyHydrate>
        <Benefits />
        <Contacts />
        <Seo />
        <Footer />
    </div>
</template>
  
<script setup>
const { t, locale, locales } = useI18n()
const countryEnum = useCountryEnum()
const translateCountry = useTranslateCountry()
const translateCity = useTranslateCity()
const route = useRoute()

let iso = locales.value.find((l) => l.code === locale.value)?.iso
let alternates = useAlternates()
onMounted(() => {
    $(document).foundation();
})

const props = defineProps([
    'title',
    'description',
])
let country = route.params.country

if (!country) {
    country = countryEnum.Ukraine
}

let city = route.params.city
let isEmptyCity = city === undefined
let title = props.title
let description = props.description

if (!title) {
    title = t('tow_truck') + ' '

    if (!isEmptyCity) {
        title += translateCity.t(locale.value, city, 0) + ", "
    }

    title += translateCountry.t(locale.value, country, 0) + ", " + t('europe')
}

if (!description) {
    description = t('tow_truck_services') + ' ' + t('in') + ' '

    if (!isEmptyCity) {
        description += translateCity.t(locale.value, city, 1) + ", "
    }
    description += translateCountry.t(locale.value, country, 1) + ' ' + 
        t('and') + ' ' + t('in_europe') + ', ' + t('good_and_cheap') +'.'
}

useHead({
    htmlAttrs: {
        lang: iso,
    },
    title,
    meta: [
        { hid: 'description', name: 'description', content: description },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' },
        { property: 'og:locale', content: iso },
        { property: "og:type", content: "article" },
        { property: "og:title", content: title },
    ],
    link: [
        ...alternates,
    ],
    script: [
    ],
})
</script>
  
<i18n lang="yaml">
    ua:
        in_europe: Європі
        in: "в"
        and: 'та'
        across: 'по'
        tow_truck: 'Евакуатор'
        tow_truck_services: 'Послуги евакуатора'
        good_and_cheap: 'якісно і недорого'
        europe: 'Європа'
    en:
        in_europe: Європе
        in: "in"
        and: 'and'
        across: 'across'
        tow_truck: 'Tow truck'
        tow_truck_services: 'Tow truck services'
        europe: 'Europe'
        good_and_cheap: 'good and cheap'
        title: 'Tow truck in Uzhhorod, Ukraine, Europe'
    ru:
        in_europe: Europe
        in: 'в'
        and: 'и'
        across: ''
        tow_truck: 'Эвакуатор'
        tow_truck_services: 'Услуги эвакуатора'
        europe: 'Европа'
        good_and_cheap: 'качественно и недорого'
        title: 'Эвакуатор Ужгород, Украина, Европа'
</i18n>