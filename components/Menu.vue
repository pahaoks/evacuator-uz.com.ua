<template>
    <nav class="menu" :class="{ 'menu--opened': menuOpened }">
        <div class="menu-name">
            {{ t('menu') }}
        </div>

        <ul>
            <li>
                <NuxtLink :to="path(locale)">
                    {{ t('main_page') }}
                </NuxtLink>
            </li>
            <li>
                {{ t('tow_truck_in') }}:
            </li>
            <li>
                <ul>
                    <li v-for="country in allCountries">
                        <NuxtLink :key="country" :to="path(locale, 'place', country)">
                            {{ translateCountry.t(locale, country, 1) }}
                        </NuxtLink>

                        <ul>
                            <li v-for="city in countriesCities[country]" :key="city">
                                <NuxtLink :key="country" :to="path(locale, 'place', country, city)">
                                    {{ translateCity.t(locale, city, 1) }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<script setup>
const menuOpened = useMenuOpened()
const allCountries = useAllCounties()
const countriesCities = useCountriesCities()
const { locale, t } = useI18n()
const path = usePath()
const translateCountry = useTranslateCountry()
const translateCity = useTranslateCity()
</script>

<style lang="sass">
.menu
    background-color: white
    height: 100%
    width: 300px
    display: block 
    position: absolute
    transform: translate(-300px)
    transition: transform .7s
    top: 0
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px
    z-index: 1
    padding: 100px 0 0 40px
    font-size: 18px

    &-name 
        margin-bottom: 16px
        font-size: 20px

    li 
        list-style-type: none
        padding: 3px

    a 
        color: black
        text-shadow: 2px 7px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)
    
    a:hover
        color: #4e97cc

    .router-link-active
        color: #4e97cc

.menu--opened 
    transform: translate(0)
    transition: transform .5s
  
</style>

<i18n lang="yaml">
ua:
    main_page: 'Головна'
    menu: 'Меню'
    tow_truck_in: 'Евакуатор в'
ru:
    main_page: 'Главная'
    menu: 'Меню'
    tow_truck_in: 'Эвакуатор в'
en:
    main_page: 'Main'
    menu: 'Menu'
    tow_truck_in: 'Tow truck in'
</i18n>