<template>
<div id="contact" class="section seo gray" data-magellan-destination="seo">
    <div class="row">
      <div class="large-12 columns">
        <h2>{{ localizedTitle }}</h2>
        <div class="seo-block">
          <p>{{ localizedBody }}</p>
          <p v-if="country">{{ localizedBodyWithCities }}</p>
        </div>  

        <h2>
          {{ t('title') }}
        </h2>
        <div class="seo-block">
          <p>{{ general }}</p>
          <p>{{ t('part2') }}</p>
        </div>

        <h2>{{ t('situationsTitle') }}</h2>
        <div class="seo-block">
          <p>{{ t('situationsBody') }}</p>
          <ul class="seo-list">
            <li>{{ t('situationsBodyList1') }}</li>
            <li>{{ t('situationsBodyList2') }}</li>
            <li>{{ t('situationsBodyList3') }}</li>
            <li>{{ t('situationsBodyList4') }}</li>
            <li>{{ t('situationsBodyList5') }}</li>
            <li>{{ t('situationsBodyList6') }}</li>
          </ul>
        </div>

        <h2>{{ t('priceTitle') }}</h2>
        <div class="seo-block">
          <p>{{ t('priceBody') }}</p>
          <ul class="seo-list">
            <li>{{ t('priceBodyList1') }}</li>
            <li>{{ t('priceBodyList2') }}</li>
            <li>{{ t('priceBodyList3') }}</li>
          </ul>
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
const countriesCities = useCountriesCities()
const city = route.params.city
const country = route.params.country

var translatedCity = translateCity.t(locale.value, city, 1)
var translatedCountry = translateCountry.t(locale.value, country, 1)
var translatedCountryFrom = ''
var translatedCities = ''

if (!city) {
  translatedCity = t('in_europe')
}
if (!country) {
  translatedCountry = t('in_europe')
} else {
    translatedCities = countriesCities[country].map(
        city => translateCity.t(locale.value, city, 2)).join(', ')
    translatedCountryFrom = translateCountry.t(locale.value, country, 3)
}

const general = t('general').replace('!!!city!!!', translatedCity)
const localizedTitle = t('localizedTitle').replace('!!!country!!!', translatedCountry)
const localizedBody = t('localizedBody').replace('!!!country!!!', translatedCountry)
const localizedBodyWithCities = t('localizedBodyWithCities')
    .replace('!!!cities!!!', translatedCities)
    .replace('!!!country!!!', translatedCountryFrom)

</script>

<style>
.seo-block {
  font-size: 22px;
}

.seo-list {
  padding-left: 1.5rem;
}
</style>

<i18n lang="yaml">
  ua:
    in_europe: 'Європі'
    title: 'Що треба знати'
    general: |
      Користуючись автомобілем, кожен водій має розуміти, що машина — не тільки засіб пересування, 
      що дає незалежність та задоволення, а й відповідальність перед іншими учасниками дорожнього руху. 
      Поломка автівки чи потрапляння у дорожньо-транспортну пригоду може трапитися з кожним і часто евакуатор у !!!city!!! 
      може бути єдиною можливістю вирішити проблему.
    part2: |
      Якщо, з тої чи іншої причини, неприємність таки сталася — важливо, якщо є можливість, 
      самостійно прибрати машину з проїзної частини — це забезпечить безпеку іншим учасникам руху і запобігатиме утворенню корки. 
      В іншому випадку, коли власними силами відігнати автомобіль не виходить — потрібно викликати евакуатор. 
      Професійно з цим впорається компанія «SVItransporter».
    situationsTitle: В яких ситуаціях може знадобитися евакуатор
    situationsBody: |
      Як було зазначено вище, основними причинами, через які доводиться скористатися послугами евакуації є 
      серйозна несправність автомобіля або ДТП. Але така послуга може знадобитися і в інших випадках:
    situationsBodyList1: Транспортування специфічних вантажів, для яких необхідна низька платформа
    situationsBodyList2: Доставлення нових автівок до автосалонів
    situationsBodyList3: Перевезення важкої гусеничної спецтехніки на будівельні майданчики
    situationsBodyList4: Допомога водіям, що не розрахували з пальним чи ресурсом акумулятора
    situationsBodyList5: Витягування транспортних засобів із кюветів, суглобів чи багнюки
    situationsBodyList6: Допомога правоохоронним органам з переміщення автомобілів порушників до штрафмайданчиків
    priceTitle: Від чого залежить вартість евакуації
    priceBody: |
      Важливо розуміти, що не існує фіксованої ціни на послуги евакуатора. В кожному конкретному випадку, 
      вартість розраховується індивідуально.
      Серед чинників, що впливають на ціну:
    priceBodyList1: Габарити та вага транспортного засобу, що буде транспортуватися
    priceBodyList2: Місцеперебування ТЗ
    priceBodyList3: |
      Використання додаткових послуг: застосування допоміжного обладнання, зміна місця призначення тощо.
    localizedTitle: 'Евакуатор в !!!country!!!: Швидка та надійна допомога на дорозі'
    localizedBody: |
        Якщо вам терміново потрібен евакуатор в !!!country!!!, на автомагістралі, в горах або у центрі міста, 
        наша служба готова прийти на допомогу 24/7. Ми пропонуємо швидкий виїзд на місце, 
        професійну евакуацію автомобілей та доступні ціни.
    localizedBodyWithCities: |
        Наші послуги охоплюють весь регіон, включаючи !!!cities!!! і інші міста !!!country!!!. 
        Ми надаємо допомогу при аваріях, поломках, спущених шинах та інших нештатних ситуаціях.

  en:
    in_europe: 'Europe'
    title: 'What you need to know'
    general: |
      When using a car, every driver must understand that a vehicle is not just a means of transportation that provides 
      independence and pleasure but also a responsibility towards other road users. A car breakdown or involvement in a traffic 
      accident can happen to anyone, and often, a tow truck in !!!city!!! may be the only way to resolve the problem.
    part2: |
      If, for one reason or another, an unpleasant situation has occurred, it is important, if possible, to independently
      remove the car from the roadway — this will ensure the safety of other road users and prevent traffic jams.
      Otherwise, when it is impossible to drive the car away on your own — you need to call a tow truck.
      The company "SVItransporter" will cope with this professionally.
    situationsTitle: In what situations you may need a tow truck
    situationsBody: |
      As mentioned above, the main reasons for using towing services are serious car malfunctions or accidents. 
      But such a service may be needed in other cases as well:
    situationsBodyList1: Transportation of specific goods that require a low platform
    situationsBodyList2: Delivery of new cars to car dealerships
    situationsBodyList3: Transportation of heavy tracked special equipment to construction sites
    situationsBodyList4: Assistance to drivers who have miscalculated fuel or battery life
    situationsBodyList5: Pulling vehicles out of ditches, joints, or mud
    situationsBodyList6: Assistance to law enforcement agencies in moving violators' vehicles to impound lots
    priceTitle: What affects the cost of towing
    priceBody: |
      It is important to understand that there is no fixed price for tow truck services. 
      In each specific case, the cost is calculated individually. Among the factors that affect the price:
    priceBodyList1: Dimensions and weight of the vehicle to be transported
    priceBodyList2: Location of the vehicle
    priceBodyList3: |
      Use of additional services: use of auxiliary equipment, change of destination, etc.
    localizedTitle: 'Tow truck in !!!country!!!: Fast and reliable roadside assistance'
    localizedBody: |
        If you urgently need a tow truck in !!!country!!!, on the highway, in the mountains, or in the city center, 
        our service is ready to help 24/7. We offer fast on-site departure, professional car towing, and affordable prices.
    localizedBodyWithCities: |
        Our services cover the entire region, including !!!cities!!! and other cities of !!!country!!!. 
        We provide assistance in accidents, breakdowns, flat tires, and other emergencies.

  ru:
    in_europe: 'Европе'
    title: 'Что нужно знать'
    general: |
      Используя автомобиль, каждый водитель должен понимать, что машина — это не только средство передвижения, 
      дающее независимость и удовольствие, но и ответственность перед другими участниками дорожного движения. 
      Поломка автомобиля или попадание в дорожно-транспортное происшествие может случиться с каждым, 
      и часто эвакуатор в !!!city!!! может быть единственным способом решить проблему.
    part2: |
      Если по той или иной причине неприятность все-таки случилась — важно, если есть возможность,
      самостоятельно убрать машину с проезжей части — это обеспечит безопасность другим участникам движения и предотвратит пробку.
      В противном случае, когда собственными силами отогнать автомобиль не получается — нужно вызвать эвакуатор.
      Профессионально с этим справится компания «SVItransporter».
    situationsTitle: В каких ситуациях может понадобиться эвакуатор
    situationsBody: |
      Как было отмечено выше, основными причинами, из-за которых приходится воспользоваться услугами эвакуации, 
      являются серьезная неисправность автомобиля или ДТП. Но такая услуга может понадобиться и в других случаях:
    situationsBodyList1: Транспортировка специфических грузов, для которых необходима низкая платформа
    situationsBodyList2: Доставка новых автомобилей в автосалоны
    situationsBodyList3: Транспортировка тяжелой гусеничной спецтехники на строительные площадки
    situationsBodyList4: Помощь водителям, которые не рассчитали с топливом или ресурсом аккумулятора
    situationsBodyList5: Вытаскивание транспортных средств из кюветов, суглобов или болота
    situationsBodyList6: Помощь правоохранительным органам в перемещении автомобилей нарушителей на штрафплощадки
    priceTitle: От чего зависит стоимость эвакуации
    priceBody: |
      Важно понимать, что нет фиксированной цены на услуги эвакуатора. В каждом конкретном случае стоимость рассчитывается индивидуально.
      Среди факторов, влияющих на цену:
    priceBodyList1: Габариты и вес транспортного средства, которое будет транспортироваться
    priceBodyList2: Местонахождение ТС
    priceBodyList3: |
      Использование дополнительных услуг: применение вспомогательного оборудования, изменение места назначения и т. д.
    localizedTitle: 'Эвакуатор в !!!country!!!: Быстрая и надежная помощь на дороге'
    localizedBody: |
        Если вам срочно нужен эвакуатор в !!!country!!!, на автомагистрали, в горах или в центре города, 
        наша служба готова прийти на помощь 24/7. Мы предлагаем быстрый выезд на место, 
        профессиональную эвакуацию автомобилей и доступные цены.
    localizedBodyWithCities: |
        Наши услуги охватывают весь регион, включая !!!cities!!! и другие города !!!country!!!. 
        Мы предоставляем помощь при авариях, поломках, спущенных шинах и других чрезвычайных ситуациях.
</i18n>