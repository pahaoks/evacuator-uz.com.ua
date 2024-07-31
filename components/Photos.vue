<template>
    <div id="screenshot" style="padding-top: 50px" class="section screenshot">
      <div class="row">
        <div class="large-12 columns">
          <h2 style="font-size: 44px; margin-bottom: 30px">
            {{ t("our_works") }}
          </h2>
          <ul class="clearing-thumbs small-block-grid-3" data-clearing>
            <li>
              <a href="/img/our_work_1.jpg"
                ><img src="/img/our_work_1.jpg" :alt="t('tow_auto') + ' 1'"
              /></a>
            </li>
            <li>
              <a href="/img/our_work_2.jpg"
                ><img src="/img/our_work_2.jpg" :alt="t('tow_auto') + ' 2'"
              /></a>
            </li>
            <li>
              <a href="/img/our_work_3.jpg"
                ><img src="/img/our_work_3.jpg" :alt="t('tow_auto') + ' 3'"
              /></a>
            </li>
            <li>
              <a href="/img/our_work_4.jpg"
                ><img src="/img/our_work_4.jpg" :alt="t('tow_auto') + ' 4'"
              /></a>
            </li>
            <li>
              <a href="/img/our_work_5.jpg"
                ><img src="/img/our_work_5.jpg" :alt="t('tow_auto') + ' 5'"
              /></a>
            </li>
            <li>
              <a href="/img/our_work_6.jpg"
                ><img src="/img/our_work_6.jpg" :alt="t('tow_auto') + ' 6'"
              /></a>
            </li>
            <li>
              <a href="/img/our_work_7.jpg"
                ><img src="/img/our_work_7.jpg" :alt="t('tow_auto') + ' 7'"
              /></a>
            </li>
            <li>
              <a href="/img/our_work_8.jpg"
                ><img src="/img/our_work_8.jpg" :alt="t('tow_auto') + ' 8'"
              /></a>
            </li>
            <li>
              <a href="/img/our_work_9.jpg"
                ><img src="/img/our_work_9.jpg" :alt="t('tow_auto') + ' 9'"
              /></a>
            </li>
            <li>
              <a href="/img/our_work_10.jpg"
                ><img
                  src="/img/our_work_10.jpg"
                  :alt="t('tow_auto') + ' 10'"
              /></a>
            </li>
            <li>
              <a href="/img/our_work_11.jpg"
                ><img
                  src="/img/our_work_11.jpg"
                  :alt="t('tow_auto') + ' 11'"
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script setup>
const { t, locale } = useI18n()
const route = useRoute()
const translateCity = useTranslateCity()
const inCityPlaqceholder = "!!!in_city!!!"
const cityPlaceholder = "!!!city!!!"

const city = route.params.city 
const localCity = city ? city : 'uzhhorod'

const wrongCall = t('wrong_call')
  .replace(inCityPlaqceholder, translateCity.t(locale.value, localCity, 1))
  .replace(cityPlaceholder, translateCity.t(locale.value, localCity, 0))
</script>

<i18n lang="yaml">
ua:
  wrong_call: "Помилковий виклик по !!!in_city!!! - "
  from_agreed_price: "від обумовленої ціни"
  tow_from_europe: "Вивіз авто з Європи/СНД - "
  price_agreeable: "ціна договірна"
  our_works: "Наші роботи"
  tow_auto: "Евакуація авто"

ru:
  wrong_call: "Ложный вызов по !!!in_city!!! - "
  from_agreed_price: "от обусловленной цены"
  tow_from_europe: "Вывоз авто из Европы/СНГ - "
  price_agreeable: "цена договорная"
  our_works: "Наши работы"
  tow_auto: "Эвакуация авто"

en:
  wrong_call: "Wrong call in !!!in_city!!! - "
  from_agreed_price: "from the agreed price"
  tow_from_europe: "Export of cars from Europe/CIS - "
  price_agreeable: "price negotiable"
  our_works: "Our works"
  tow_auto: "Tow auto"
</i18n>
