<template>
  <div
    id="contact"
    class="section contact gray"
    data-magellan-destination="contact"
  >
    <div class="row">
      <div class="large-12 columns">
        <h2>
          {{ t("contact_header") }}
        </h2>

        <div style="font-size: 22px">
          <p>
            {{ t("contact_services") }}
          </p>
          <p></p>
          <ul style="padding-left: 40px">
            <li>{{ t('contact_around_the_clock') }}</li>
            <li>
              {{ t('contact_services_additional') }}
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
              {{ t('contact_item_9') }}
            </li>
            <li>
              {{ t('contact_item_10') }}
            </li>
            <li>
              {{ t('contact_item_11') }}
            </li>
          </ul>
          <p>
            {{ t('contact_item_12') }}
          </p>

          <p>
            {{ t('contact_item_13') }}
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
const { t } = useI18n()
</script>

<i18n lang="yaml">
ua:
    contact_header: 'Послуги евакуатора в Ужгороді, Закарпатській області, по Україні та
          Європі недорого.'
    contact_services: 'Евакуатор SGTRANS (Ужгород) надає наступні послуги евакуатора за
            адекватну ціну:'
    contact_around_the_clock: 'виклик евакуатора на місце поломки цілодобово'
    contact_services_additional: 'послуги евакуатора в Ужгороді, по Україні та за кордон недорого'
    contact_transportation: 'транспортування автомобіля замовника в Ужгороді та Закарпатській
              області в указане місце'
    contact_item_1: 'евакуація / перевезення несправного авто до місця ремонту'
    contact_item_2: 'евакуація автомобіля після ДТП, хороша ціна'
    contact_item_3: 'перевезення спецтехніки: навантажувачів, мінітракторів'
    contact_item_4: 'перевезення квадроциклів, баггі, в.т.ч. через кордон'
    contact_item_5: 'перевезення несправного / ретро автомобіля в Ужгороді, по Україні
              та Європі'
    contact_item_6: 'перевезення нестандартного вантажу через кордон'
    contact_item_7: 'послуги евакуатора з Європи (через кордон) дешево'
    contact_item_8: 'дорожня допомога (заміна коліс чи акумулятора у дорозі, підвезення
              палива)'
    contact_item_9: 'евакуатор Ужгород та Закарпатська область, виїзд за кордон по
              Європі'
    contact_item_10: 'лафета за кордон (перевезення авто через кордон під розмитнення)'
    contact_item_11: 'Послуги евакуатора в Ужгороді, в Закарпатській області, по Україні
              та Європі недорого.'
    contact_item_12: 'Ми забезпечимо якісне завантаження Вашого авто (спецтехніки,
            вантажу) на евакуатор та безпечне перевезення до місця призначення.
            Довіртеся нам і Ваш автомобіль буде доставлений цілим та
            неушкодженим у найкоротший час по зазначеній адресі незалежно від
            складності маршруту, погодних умов та відстані транспортування.
            Страхування вантажу!'
    contact_item_13: 'Евакуатор SGtrans можна викликати в Ужгороді, Закарпатській області,
            м.Мукачево, м.Чоп, м.Перечин, м.Іршава, м.Хуст, м.Виноградово,
            м.Берегово, м.Тячів, м.Рахів. Ми перевеземо Ваше авто по Україні та
            Європі.'
    contact_item_14: 'Рим, Мілан, Будапешт, Загреб, Бургас, Варна, Спліт, Відень,
            Зальцбург, Мюнхен, Берлін, Прага, Брно, Афіни, Париж, Вроцлав,
            Краків, Катовіце, Люблін, Варшава, Братіслава – евакуатори служби
            "SGTRANS" Ужгород перевезуть Ваш автомобіль у будь яке місто Європи.
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
    contact_header: 'Услуги эвакуатора в Ужгороде, Закарпатской области, по Украине и
          Европе недорого.'
    contact_services: 'Эвакуатор SGTRANS (Ужгород) предоставляет следующие услуги
            эвакуатора за адекватную цену:'
    contact_around_the_clock: 'вызов эвакуатора на место поломки круглосуточно'
    contact_services_additional: 'услуги эвакуатора в Ужгороде, по Украине и за границу недорого'
    contact_transportation: 'транспортировка автомобиля заказчика в Ужгороде и Закарпатской
              области в указанное место'
    contact_item_1: 'эвакуация / перевозка неисправного авто до места ремонта'
    contact_item_2: 'эвакуация автомобиля после ДТП, хорошая цена'
    contact_item_3: 'перевозка спецтехники: погрузчиков, минитракторов'
    contact_item_4: 'перевозка квадроциклов, багги, в.т.ч. через границу'
    contact_item_5: 'перевозка неисправного / ретро автомобиля в Ужгороде, по Украине
              и Европе'
    contact_item_6: 'перевозка нестандартного груза через границу'
    contact_item_7: 'услуги эвакуатора из Европы (через границу) дешево'
    contact_item_8: 'дорожная помощь (замена колеса или аккумулятора в дороге, подвоз
              топлива)'
    contact_item_9: 'эвакуатор Ужгород и Закарпатская область, выезд за границу по
                Европе'
    contact_item_10: 'лафет за границу (перевозка авто через границу под растаможку)'
    contact_item_11: 'Услуги эвакуатора в Ужгороде, в Закарпатской области, по Украине
              и Европе недорого.'
    contact_item_12: 'Мы обеспечим качественную погрузку Вашего авто (спецтехники,
            груза) на эвакуатор и безопасную перевозку до места назначения.
            Доверьтесь нам и Ваш автомобиль будет доставлен целым и
            не поврежденным в кратчайшие сроки по указанному адресу независимо от
            сложности маршрута, погодных условий и расстояния транспортировки.
            Страхование груза!'
    contact_item_13: 'Эвакуатор SGtrans можно вызвать в Ужгороде, Закарпатской области,
            г.Мукачево, г.Чоп, г.Перечин, г.Иршава, г.Хуст, г.Виноградово,
            г.Берегово, г.Тячев, г.Рахов. Мы перевезем Ваше авто по Украине и
            Европе.'
    contact_item_14: 'Рим, Милан, Будапешт, Загреб, Бургас, Варна, Сплит, Вена,
            Зальцбург, Мюнхен, Берлин, Прага, Брно, Афины, Париж, Вроцлав,
            Краков, Катовице, Люблин, Варшава, Братислава – эвакуаторы службы
            "SGTRANS" Ужгород перевезут Ваш автомобиль в любой город Европы.
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
    contact_header: 'Tow truck services in Uzhhorod, Transcarpathian region, Ukraine and
          Europe inexpensively.'
    contact_services: 'Tow truck SGTRANS (Uzhhorod) provides the following evacuation services
            at an adequate price:'
    contact_around_the_clock: 'call a tow truck to the place of breakdown around the clock'
    contact_services_additional: 'tow truck services in Uzhhorod, throughout Ukraine and abroad inexpensively'
    contact_transportation: 'transportation of the customer`s car in Uzhhorod and Transcarpathian
              region to the specified place'
    contact_item_1: 'evacuation / transportation of a faulty car to the place of repair'
    contact_item_2: 'evacuation of a car after an accident, good price'
    contact_item_3: 'transportation of special equipment: loaders, mini tractors'
    contact_item_4: 'transportation of ATVs, buggies, etc. including abroad'
    contact_item_5: 'transportation of a faulty / retro car in Uzhhorod, throughout Ukraine
              and Europe'
    contact_item_6: 'transportation of non-standard cargo abroad'
    contact_item_7: 'tow truck services from Europe (abroad) inexpensively'
    contact_item_8: 'roadside assistance (replacement of a wheel or battery on the road,
              refueling)'
    contact_item_9: 'tow truck Uzhhorod and Transcarpathian region, departure abroad
                across Europe'
    contact_item_10: 'trailer abroad (transportation of a car across the border under customs clearance)'
    contact_item_11: 'Tow truck services in Uzhhorod, in the Transcarpathian region, throughout Ukraine
              and Europe inexpensively.'
    contact_item_12: 'We will provide quality loading of your car (special equipment,
            cargo) on a tow truck and safe transportation to the destination.
            Trust us and your car will be delivered whole and
            undamaged in the shortest possible time to the specified address regardless of
            the complexity of the route, weather conditions and distance of transportation.
            Cargo insurance!'
    contact_item_13: 'Tow truck SGtrans can be called in Uzhhorod, Transcarpathian region,
            Mukachevo, Chop, Perechin, Irshava, Khust, Vinogradovo,
            Beregovo, Tyachiv, Rakhov. We will transport your car throughout Ukraine and
            Europe.'
    contact_item_14: 'Rome, Milan, Budapest, Zagreb, Burgas, Varna, Split, Vienna,
            Salzburg, Munich, Berlin, Prague, Brno, Athens, Paris, Wroclaw,
            Krakow, Katowice, Lublin, Warsaw, Bratislava - tow trucks of the service
            "SGTRANS" Uzhhorod will transport your car to any city in Europe.
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
