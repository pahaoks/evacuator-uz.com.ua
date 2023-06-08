<template>
    <div id="screenshot" style="padding-top: 50px" class="section screenshot">
      <div class="row">
        <div class="large-12 columns">
          <h2 style="font-size: 34px; margin-bottom: 0px">
            {{ t("additional") }}
          </h2>
          <span class="subheading" style="margin-bottom: 30px; font-size: 22px">
            {{ t("if_block_wheel") }}
            <span
              style="
                color: #4e97cc;
                font-size: 34px;
                font-weight: 700;
                line-height: 40px;
              "
            >
              {{ t("from_200") }}
            </span>
            <br />{{ t("block_rudder") }}
            <span
              style="
                color: #4e97cc;
                font-size: 34px;
                font-weight: 700;
                line-height: 40px;
              "
              >{{ t("200_hrn") }}</span
            >
            <br />{{ t("waiting") }}
            <span
              style="
                color: #4e97cc;
                font-size: 34px;
                font-weight: 700;
                line-height: 40px;
              "
              >{{ t("250_hrn_hr") }}</span
            >
            <br />{{ t("wrong_call") }}
            <span
              style="
                color: #4e97cc;
                font-size: 34px;
                font-weight: 700;
                line-height: 40px;
              "
              >50%</span
            >
            {{ t("from_agreed_price") }}<br /><br />{{ t("tow_from_europe") }}
            <span
              style="
                color: #4e97cc;
                font-size: 34px;
                font-weight: 700;
                line-height: 40px;
              "
            >
              {{ t("price_agreeable") }}
            </span>
          </span>

          <h2 style="font-size: 44px; margin-bottom: 30px">
            {{ t("our_works") }}
          </h2>
          <ul class="clearing-thumbs small-block-grid-3" data-clearing>
            <li>
              <a href="/img/our_worcks_001.jpg"
                ><img src="/img/our_worcks_001.jpg" :alt="t('tow_auto') + ' 1'"
              /></a>
            </li>
            <li>
              <a href="/img/our_worcks_002.jpg"
                ><img src="/img/our_worcks_002.jpg" :alt="t('tow_auto') + ' 2'"
              /></a>
            </li>
            <li>
              <a href="/img/our_worcks_003.jpg"
                ><img src="/img/our_worcks_003.jpg" :alt="t('tow_auto') + ' 3'"
              /></a>
            </li>
            <li>
              <a href="/img/our_worcks_004.jpg"
                ><img src="/img/our_worcks_004.jpg" :alt="t('tow_auto') + ' 4'"
              /></a>
            </li>
            <li>
              <a href="/img/our_worcks_005.jpg"
                ><img src="/img/our_worcks_005.jpg" :alt="t('tow_auto') + ' 5'"
              /></a>
            </li>
            <li>
              <a href="/img/our_worcks_006.jpg"
                ><img src="/img/our_worcks_006.jpg" :alt="t('tow_auto') + ' 6'"
              /></a>
            </li>
            <li>
              <a href="/img/our_worcks_007.jpg"
                ><img src="/img/our_worcks_007.jpg" :alt="t('tow_auto') + ' 7'"
              /></a>
            </li>
            <li>
              <a href="/img/our_worcks_008.jpg"
                ><img src="/img/our_worcks_008.jpg" :alt="t('tow_auto') + ' 8'"
              /></a>
            </li>
            <li>
              <a href="/img/our_worcks_009.jpg"
                ><img src="/img/our_worcks_009.jpg" :alt="t('tow_auto') + ' 9'"
              /></a>
            </li>
            <li>
              <a href="/img/our_worcks_010.jpg"
                ><img
                  src="/img/our_worcks_010.jpg"
                  :alt="t('tow_auto') + ' 10'"
              /></a>
            </li>
            <li>
              <a href="/img/our_worcks_011.jpg"
                ><img
                  src="/img/our_worcks_011.jpg"
                  :alt="t('tow_auto') + ' 11'"
              /></a>
            </li>
            <li>
              <a href="/img/our_worcks_012.jpg"
                ><img
                  src="/img/our_worcks_012.jpg"
                  :alt="t('tow_auto') + ' 12'"
              /></a>
            </li>
            <li>
              <a href="/img/our_worcks_010.jpg"
                ><img
                  src="/img/our_worcks_013.jpg"
                  :alt="t('tow_auto') + ' 13'"
              /></a>
            </li>
            <li>
              <a href="/img/our_worcks_011.jpg"
                ><img
                  src="/img/our_worcks_014.jpg"
                  :alt="t('tow_auto') + ' 14'"
              /></a>
            </li>
            <li>
              <a href="/img/our_worcks_012.jpg"
                ><img
                  src="/img/our_worcks_015.jpg"
                  :alt="t('tow_auto') + ' 15'"
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script setup>
const { t } = useI18n();
</script>

<i18n lang="yaml">
ua:
  additional: "Додатково:"
  if_block_wheel: "Якщо заблоковане колесо - "
  from_200: "по 200 грн"
  block_rudder: "Заблоковане кермо - "
  waiting: "Очікування (простій) евакуатора - "
  200_hrn: "200 грн"
  250_hrn_hr: "250 грн / година"
  wrong_call: "Помилковий виклик по Ужгороду - "
  from_agreed_price: "від обумовленої ціни"
  tow_from_europe: "Вивіз авто з Європи/СНД - "
  price_agreeable: "ціна договірна"
  our_works: "Наші роботи"
  tow_auto: "Евакуація авто"

ru:
  additional: "Дополнительно:"
  if_block_wheel: "Если заблокированное колесо - "
  from_200: "по 200 грн"
  block_rudder: "Заблокированное руль - "
  waiting: "Ожидание (простой) эвакуатора - "
  200_hrn: "200 грн"
  250_hrn_hr: "250 грн / час"
  wrong_call: "Ложный вызов по Ужгороду - "
  from_agreed_price: "от обусловленной цены"
  tow_from_europe: "Вывоз авто из Европы/СНГ - "
  price_agreeable: "цена договорная"
  our_works: "Наши работы"
  tow_auto: "Эвакуация авто"

en:
  additional: "Additional"
  if_block_wheel: "If blocked wheel - "
  from_200: "from 200 UAH"
  block_rudder: "Blocked steering wheel - "
  waiting: "Waiting (idle) - "
  200_hrn: "200 UAH"
  250_hrn_hr: "250 UAH / hour"
  wrong_call: "Wrong call in Uzhgorod - "
  from_agreed_price: "from the agreed price"
  tow_from_europe: "Export of cars from Europe/CIS - "
  price_agreeable: "price negotiable"
  our_works: "Our works"
  tow_auto: "Tow auto"
</i18n>
