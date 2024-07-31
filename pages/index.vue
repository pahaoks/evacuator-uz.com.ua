<template>
  <div>
    <Menu/>
    <Header/>
    <NumberSaved/>
    <Call/>
    <Features/>
    <Product/>
    <LazyHydrate never>
      <Photos/>
    </LazyHydrate>
    <Benefits/>
    <Contacts/>
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
  title: 'Евакуатор Братислава, Словаччина, Європа'
  description: 'Послуги евакуатора в Братиславі, Словаччині та Європі недорого.'
  keywords: 'евакуатор, братислава, евакуатор братислава, евакуація авто, SGtrans, транспортування автомобіля'
en:
  title: 'Tow truck in Bratislava, Slovakia, Europe'
  description: 'Tow truck services in Bratislava, Slovakia and Europe.'
  keywords: 'tow truck, bratislava, tow truck bratislava, car evacuation, SGtrans, tow truck slovakia, car transportation'
ru:
  title: 'Эвакуатор Братислава, Словакия, Европа'
  description: 'Услуги эвакуатора в Братиславе, Словакии и Европе.'
  keywords: 'эвакуатор, братислава, эвакуатор братислава, эвакуация авто, SGtrans, эвакуатор словакия, транспортировка автомобиля'
</i18n>