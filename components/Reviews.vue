<template>
    <div class="row">
        <h2 style="margin-bottom: 0.4em">
			{{ t('our_reviews') }}
		</h2>
        <div id="reviews"></div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
const { t } = useI18n()

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://cdn.trustindex.io/loader.js?318a1e1467dd41977d16a44f94e'
  script.async = true
  script.defer = true
  document.getElementById('reviews').appendChild(script)
  script.onload = () => {
    document.documentElement.style.overflow = 'auto';
  }
})
</script>

<i18n lang="yaml">
  ua:
    our_reviews: Відгуки наших клієнтів

  ru: 
    our_reviews: Отзывы наших клиентов

  en:
    our_reviews: Our customers' reviews
</i18n>