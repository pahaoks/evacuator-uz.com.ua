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
  title: 'Евакуатор Ужгород, Україна, Європа'
  description: 'Послуги евакуатора у Ужгороді в Закарпатській області, по Україні та Європі недорого.'
  keywords: 'евакуатор, ужгород, евакуатор ужгород, евакуація авто, SGtrans, евакуатор закарпаття, транспортування автомобіля'
en:
  title: 'Tow truck in Uzhhorod, Ukraine, Europe'
  description: 'Tow truck services in Uzhhorod, Zakarpattia region, Ukraine and Europe.'
  keywords: 'tow truck, uzhhorod, tow truck uzhhorod, car evacuation, SGtrans, tow truck zakarpattia, car transportation'
ru:
  title: 'Эвакуатор Ужгород, Украина, Европа'
  description: 'Услуги эвакуатора в Ужгороде в Закарпатской области, по Украине и Европе.'
  keywords: 'эвакуатор, ужгород, эвакуатор ужгород, эвакуация авто, SGtrans, эвакуатор закарпатья, транспортировка автомобиля'
</i18n>