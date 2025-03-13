<template>
  <div id="contact" class="section contact gray" data-magellan-destination="contact">
    <div class="row">
      <div class="large-12 columns">
        <h2>
          {{ contactHeader }}
        </h2>

        <div style="font-size: 22px">
          <p>
            {{ contactServices }}
          </p>
          <p></p>
          <ul style="padding-left: 40px">
            <li>{{ t('contact_around_the_clock') }}</li>
            <li>
              {{ decapitalize(contactHeader) }}
            </li>
            <li>
              {{ t('contact_transportation') }}
            </li>
            <li>{{ t('contact_item_1') }}</li>
            <li>{{ t('contact_item_2') }}</li>
            <li>{{ t('contact_item_3') }}</li>
            <li>{{ t('contact_item_4') }}</li>
            <li>
              {{ t('contact_item_5') }}
            </li>
            <li>{{ t('contact_item_6') }}</li>
            <li>{{ t('contact_item_7') }}</li>
            <li>
              {{ t('contact_item_8') }}
            </li>
            <li>
              {{ t('contact_item_10') }}
            </li>
          </ul>
          <p>
            {{ t('contact_item_12') }}
          </p>

          <p>
            {{ t('contact_item_14') }}
          </p>
          <p>{{ t('contact_item_15') }}</p>
          <p>
            {{ t('contact_item_16') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t, locale } = useI18n()
const route = useRoute()
const translateCity = useTranslateCity()
const translateCountry = useTranslateCountry()
const inCityPlaqceholder = "!!!in_city!!!"
const cityPlaceholder = "!!!city!!!"

const city = route.params.city
const country = route.params.country
const abroad = !!country && country !== 'ukraine'

const decapitalize = ([first, ...rest], upperRest = false) =>
  first.toLowerCase() +
  (upperRest ? rest.join('').toUpperCase() : rest.join(''));

const localCity = city ? city : 'bratislava'

let contactHeader = t("contact_header")
  .replace(inCityPlaqceholder, translateCity.t(locale.value, localCity, 1))
  .replace(cityPlaceholder, translateCity.t(locale.value, localCity, 0))

if (abroad) {
  contactHeader = t('tow_truck_services') + ' '
  if (city) {
    contactHeader += translateCity.t(locale.value, city, 1) + ', '
  }
  contactHeader += translateCountry.t(locale.value, country, 1) + ', ' +
    t('in_europe') + ', ' + t('good_and_cheap')
}

let contactServices = t('contact_services')
  .replace(inCityPlaqceholder, translateCity.t(locale.value, localCity, 1))
  .replace(cityPlaceholder, translateCity.t(locale.value, localCity, 0))
if (abroad) {
  contactServices = t('tow_truck_sgtrans') + ' '
  if (city) {
    contactServices += '(' + translateCity.t(locale.value, city, 0) + ') '
  } else if (country) {
    contactServices += '(' + translateCountry.t(locale.value, country, 0) + ') '
  }
  contactServices += t('give_services')
}
</script>

<i18n lang="yaml">
ua:
  in_europe: Європі
  good_and_cheap: якісно і недорого
  tow_truck_services: 'Послуги евакуатора в'
  contact_header: 'Послуги евакуатора в Європі'
  tow_truck_sgtrans: 'Евакуатор SGTRANS'
  give_services: 'надає наступні послуги евакуатора за адекватну ціну:'
  contact_services: 'Евакуатор SGTRANS (!!!city!!!) надає наступні послуги евакуатора за
          адекватну ціну:'
  contact_around_the_clock: 'виклик евакуатора на місце поломки цілодобово'
  contact_transportation: 'транспортування автомобіля замовника в указане місце'
  contact_item_1: 'евакуація / перевезення несправного авто до місця ремонту'
  contact_item_2: 'евакуація автомобіля після ДТП, хороша ціна'
  contact_item_3: 'перевезення спецтехніки: навантажувачів, мінітракторів'
  contact_item_4: 'перевезення квадроциклів, баггі, в.т.ч. через кордон'
  contact_item_5: 'перевезення несправного / ретро автомобіля'
  contact_item_6: 'перевезення нестандартного вантажу через кордон'
  contact_item_7: 'послуги евакуатора з Європи (через кордон) дешево'
  contact_item_8: 'дорожня допомога (заміна коліс чи акумулятора у дорозі, підвезення
            палива)'
  contact_item_10: 'лафета за кордон (перевезення авто через кордон під розмитнення)'
  contact_item_12: 'Ми забезпечимо якісне завантаження Вашого авто (спецтехніки,
          вантажу) на евакуатор та безпечне перевезення до місця призначення.
          Довіртеся нам і Ваш автомобіль буде доставлений цілим та
          неушкодженим у найкоротший час по зазначеній адресі незалежно від
          складності маршруту, погодних умов та відстані транспортування.
          Страхування вантажу!'
  contact_item_14: 'Евакуатори служби
          "SGTRANS" перевезуть Ваш автомобіль у будь яке місто Європи.
          Наші фахівці нададуть кваліфіковану юридичну допомогу при перетині
          кордону та досконало розмовляють англійською, адекватна ціна на
          послуги евакуатора.'
  contact_item_15: 'Виклик евакуатора за кордон / по Європі'
  contact_item_16: 'Послуги евакуатора, підзарядка акумулятора, заміна колеса і
          транспортування спеціальним автомобілем до найближчої станції
          ремонту чи за будь-якою іншою адресою за Вашим бажанням – це сервіс,
          корисний і необхідний для будь-якого автомобіліста який цінує свій
          час і своє авто!'

ru:
  in: в
  in_europe: Європе
  good_and_cheap: качественно и недорого
  tow_truck_services: 'Услуги эвакуатора в'
  contact_header: 'Услуги эвакуатора в Европе'
  tow_truck_sgtrans: 'Эвакуатор SGTRANS'
  give_services: 'предоставляет следующие услуги эвакуатора за адекватную цену:'
  contact_services: 'Эвакуатор SGTRANS (!!!city!!!) предоставляет следующие услуги
          эвакуатора за адекватную цену:'
  contact_around_the_clock: 'вызов эвакуатора на место поломки круглосуточно'
  contact_transportation: 'транспортировка автомобиля заказчика в указанное место'
  contact_item_1: 'эвакуация / перевозка неисправного авто до места ремонта'
  contact_item_2: 'эвакуация автомобиля после ДТП, хорошая цена'
  contact_item_3: 'перевозка спецтехники: погрузчиков, минитракторов'
  contact_item_4: 'перевозка квадроциклов, багги, в.т.ч. через границу'
  contact_item_5: 'перевозка неисправного / ретро автомобиля'
  contact_item_6: 'перевозка нестандартного груза через границу'
  contact_item_7: 'услуги эвакуатора из Европы (через границу) дешево'
  contact_item_8: 'дорожная помощь (замена колеса или аккумулятора в дороге, подвоз
            топлива)'
  contact_item_10: 'лафет за границу (перевозка авто через границу под растаможку)'
  contact_item_12: 'Мы обеспечим качественную погрузку Вашего авто (спецтехники,
          груза) на эвакуатор и безопасную перевозку до места назначения.
          Доверьтесь нам и Ваш автомобиль будет доставлен целым и
          не поврежденным в кратчайшие сроки по указанному адресу независимо от
          сложности маршрута, погодных условий и расстояния транспортировки.
          Страхование груза!'
  contact_item_14: 'Эвакуаторы службы
          "SGTRANS" перевезут Ваш автомобиль в любой город Европы.
          Наши специалисты окажут квалифицированную юридическую помощь при
          пересечении границы и отлично говорят по-английски, адекватная цена
          на услуги эвакуатора.'
  contact_item_15: 'Вызов эвакуатора за границу / по Европе'
  contact_item_16: 'Услуги эвакуатора, подзарядка аккумулятора, замена колеса и
          транспортировка специальним автомобилем к ближайшей станции
          ремонта или по любому другому адресу по Вашему желанию – это сервис,
          полезный и необходимый для любого автомобилиста который ценит свое
          время и свое авто!'

en:
  in: in
  in_europe: Europe
  good_and_cheap: good and inexpensive
  tow_truck_services: 'Tow truck services in'
  contact_header: 'Tow truck services in Europe'
  contact_services: 'Tow truck SGTRANS (!!!city!!!) provides the following evacuation services
          at an adequate price:'
  tow_truck_sgtrans: 'Tow truck SGTRANS'
  give_services: 'provides the following evacuation services at an adequate price:'
  contact_around_the_clock: 'call a tow truck to the place of breakdown around the clock'
  contact_transportation: 'transportation of the customer`s car to the specified place'
  contact_item_1: 'evacuation / transportation of a faulty car to the place of repair'
  contact_item_2: 'evacuation of a car after an accident, good price'
  contact_item_3: 'transportation of special equipment: loaders, mini tractors'
  contact_item_4: 'transportation of ATVs, buggies, etc. including abroad'
  contact_item_5: 'transportation of a faulty / retro car'
  contact_item_6: 'transportation of non-standard cargo abroad'
  contact_item_7: 'tow truck services from Europe (abroad) inexpensively'
  contact_item_8: 'roadside assistance (replacement of a wheel or battery on the road,
            refueling)'
  contact_item_10: 'trailer abroad (transportation of a car across the border under customs clearance)'
  contact_item_12: 'We will provide quality loading of your car (special equipment,
          cargo) on a tow truck and safe transportation to the destination.
          Trust us and your car will be delivered whole and
          undamaged in the shortest possible time to the specified address regardless of
          the complexity of the route, weather conditions and distance of transportation.
          Cargo insurance!'
  contact_item_14: 'Tow trucks of the service
          "SGTRANS" will transport your car to any city in Europe.
          Our specialists will provide qualified legal assistance when
          crossing the border and speak English well, adequate price
          for tow truck services.'
  contact_item_15: 'Call a tow truck abroad / across Europe'
  contact_item_16: 'Tow truck services, battery charging, tire replacement and
          transportation by a special car to the nearest station
          repair or to any other address at your request - this is a service,
          useful and necessary for any motorist who values ​​his
          time and his car!'

</i18n>
