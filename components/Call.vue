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
			    <h1 style="margin-left: 10px;">{{ t('ask_help') }}</h1>
			    <span style="margin-left: 10px;" class="subheading">
                    {{ t('we_will_be_in_30_minutes') }}
                </span>
                <div class="front_banner_right_but">
					<a href="tel:+380981337627" class="but but_yellow">{{ t('call_tow_truck') }}</a>
				</div>		
            </div>
	    </div>
    </header>
</template>

<script setup>
const { t } = useI18n()

onMounted(() => {
    $('.flexslider').flexslider();
})
</script>

<i18n lang="yaml">
ua: 
    our_tow_truck: Наш евакуатор
    ask_help: Потрібна допомога?
    we_will_be_in_30_minutes: Будемо через 30 хвилин! Всі види послуг евакуації автотранспорту та спецтехніки
    call_tow_truck: Викликати евакуатор
    our_tow_track: Наш евакуатор

ru:
    our_tow_truck: Наш эвакуатор
    ask_help: Нужна помощь?
    we_will_be_in_30_minutes: Будем через 30 минут! Все виды услуг эвакуации автотранспорта и спецтехники
    call_tow_truck: Вызвать эвакуатор
    our_tow_track: Наш эвакуатор

en:
    our_tow_truck: Our tow truck
    ask_help: Need help?
    we_will_be_in_30_minutes: We will be in 30 minutes! All types of evacuation services for vehicles and special equipment
    call_tow_truck: Call a tow truck
    our_tow_track: Our tow truck

</i18n>