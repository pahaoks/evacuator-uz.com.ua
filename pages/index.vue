<template>
  <div>
    <Menu/>
    <Header/>
    <NumberSaved/>
    <Call/>
    <Features/>
    <Product/>
    <Reviews/>
    <LazyHydrate never>
      <Photos/>
    </LazyHydrate>
    <Benefits />
    <Description />
    <Seo />
    <Contacts />
    <Footer/>
  </div>
</template>

<script setup>
const { t, locale, locales } = useI18n()

let iso = locales.value.find((l) => l.code === locale.value)?.iso
let alternates = useAlternates()

onMounted(() => {
  $(document).foundation();
})

useHead({
  htmlAttrs: {
    lang: iso,
  },
  title: t('title'),
  meta: [
    { hid: 'description', name: 'description', content: t('description')},
    { hid: 'keywords', name: 'keywords', content: t('keywords')},
    { name:'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' },
    { property: 'og:locale', content:iso},
    { property:"og:type", content: "article"},
    { property:"og:title", content:t('title')},
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
  title: 'Евакуатор по Європі'
  description: 'Послуги евакуатора, Європа, недорого'
  keywords: 'евакуатор, евакуатор європа, перевезення авто, транспортування автомобіля'
en:
  title: 'Tow truck in Europe'
  description: 'Tow truck services in Europe.'
  keywords: 'tow truck, tow truck europe, car evacuation, car transportation'
ru:
  title: 'Эвакуатор по Европе'
  description: 'Услуги эвакуатора в Европе'
  keywords: 'эвакуатор, братислава, эвакуатор братислава, эвакуация авто, SVItransporter, эвакуатор словакия, транспортировка автомобиля'
</i18n>