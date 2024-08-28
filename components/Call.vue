<template>
    <header id="header" >
	    <div class="row">
    	    <div class="large-6 columns">
			    <div id="teaser-slider-2">
					<div class="flexslider">
						<ul class="slides">
							<li>
								<img src="/img/main_slide.jpg" :alt="t('our_tow_track')">
							</li>
						</ul>
					</div> 
				</div>
		    </div>
        
		    <div class="large-6 columns">
			    <h1 style="margin-left: 10px;" class="heading--abroad">{{ header }}</h1>
			    <span style="margin-left: 10px;" class="subheading subheading--abroad">
                    {{ body }}
                </span>
                <div class="front_banner_right_but">
					<a href="tel:+380981337627" class="but but_yellow">{{ t('call_tow_truck') }}</a>
				</div>		
            </div>
	    </div>
    </header>
</template>

<script setup>
const { t, locale } = useI18n()
const route = useRoute()
const translateCity = useTranslateCity()
const translateCountry = useTranslateCountry()

const city = route.params.city 
const country = route.params.country

let header = t('ask_help')


if (city) {
    header = t('ask_help_in') + ' ' + translateCity.t(locale.value, city, 1) + '?'
} else if (country) {
    header = t('ask_help_in') + ' ' + translateCountry.t(locale.value, country, 1) + '?'
} else {
    header = t('ask_help_in') + ' ' + t('in_europe') + '?'
}

let body = t('we_will_be_in_30_minutes')

if (city) {
    body = t('dont_worry') + ' ' + translateCity.t(locale.value, city, 2) + ' ' + t('as_soon_as_possible')
} else if (country) {
    body = t('dont_worry') + ' ' + translateCountry.t(locale.value, country, 2) + ' ' + t('as_soon_as_possible')
} else {
    body = t('any_place')
}

onMounted(() => {
    $('.flexslider').flexslider();
})
</script>

<style lang="sass">
#header .heading--abroad 
    font-size: 50px
    line-height: 65px

@media only screen and (max-width: 768px)
    #header .heading--abroad 
        line-height: 50px

#header .subheading--abroad
    font-size: 22px
</style>

<i18n lang="yaml">
ua: 
    in_europe: Європі
    any_place: Дзвоніть нам, ми прибудемо куди треба, якнайшвидше, та допоможемо з транспортуванням вашого автомобіля в Україну, або будь-яке інше місто Європи
    dont_worry: Дзвоніть нам, ми прибудемо в
    as_soon_as_possible: якнайшвидше, та допоможемо з транспортуванням вашого автомобіля в Україну, або будь-яку точку Європи
    our_tow_truck: Наш евакуатор
    ask_help: Потрібна допомога?
    ask_help_in: Зламалась машина в
    we_will_be_in_30_minutes: Будемо через 30 хвилин! Всі види послуг евакуації автотранспорту та спецтехніки
    call_tow_truck: Викликати евакуатор
    our_tow_track: Наш евакуатор

ru:
    in_europe: Европе
    any_place: Звоните нам, мы приедем куда нужно, как можно скорее, и поможем с транспортировкой вашего автомобиля в Украину, или любой другой город Европы
    dont_worry: Звоните нам, мы приедем в
    as_soon_as_possible: как можно скорее и поможем с транспортировкой вашего автомобиля в Украину, или другую точку Европы
    our_tow_truck: Наш эвакуатор
    ask_help: Нужна помощь?
    ask_help_in: Сломалась машина в
    we_will_be_in_30_minutes: Будем через 30 минут! Все виды услуг эвакуации автотранспорта и спецтехники
    call_tow_truck: Вызвать эвакуатор
    our_tow_track: Наш эвакуатор

en:
    in_europe: Europe
    any_place: Call us, we will arrive wherever you need, as soon as possible, and will help you to tow your car to Ukraine, or any other location in Europe
    dont_worry: Call us, we will arrive in
    as_soon_as_possible: as soon as possible, and will help you to tow your car to Ukraine, or any other location in Europe
    our_tow_truck: Our tow truck
    ask_help: Need help?
    ask_help_in: Need help in
    we_will_be_in_30_minutes: We will be in 30 minutes! All types of evacuation services for vehicles and special equipment
    call_tow_truck: Call a tow truck
    our_tow_track: Our tow truck

</i18n>