<template>
    <div id="features" class="section features" data-magellan-destination="features">
        <div class="row hi-icon-wrap hi-icon-effect-3 hi-icon-effect-3b">
            <div class="large-4 columns feature">
                <span class="icon icon-trophy hi-icon"></span>
                <h3 style="font-family: 'Noto Sans', sans-serif;">{{ t('work_more_than_5_years') }}</h3>
                <p>{{ t('work_from') }}</p>
            </div>
            <div class="large-4 columns feature">
                <span class="icon icon-tools hi-icon"></span>
                <h3 style="font-family: 'Noto Sans', sans-serif;">{{ t('speed') }}</h3>
                <p>{{ t('availability') }}</p>
            </div>
            <div class="large-4 columns feature">
                <span class="icon fa fa-car hi-icon"></span>
                <h3 style="font-family: 'Noto Sans', sans-serif;">{{ t('abroad') }}</h3>
                <p>{{ t('technical_help_abroad') }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const { t } = useI18n() 
</script>

<i18n lang="yaml">
ua:
    work_more_than_5_years: Працюємо вже більше 5 років
    work_from: Працюємо з 2015 року, гарантуємо якісний сервіс 24/7 без вихідних. Виконуємо будь-які завдання по евакуації і транспортуванні автомобіля.
    speed: Подача машини протягом 30 хвилин
    availability: Постійно в наявності і готовності до роботи є кілька вільних евакуаторів, тому ми приїдемо в найкоротший термін до 30 хвилин.
    abroad: Евакуація авто по Європі
    technical_help_abroad: Перевезення автомобіля по Європі, перетин кордону, авто на розмитнення. Технічна допомога та перевезення за кордоном.

ru:
    work_more_than_5_years: Работаем уже более 5 лет
    work_from: Работаем с 2015 года, гарантируем качественный сервис 24/7 без выходных. Выполняем любые задачи по эвакуации и транспортировке автомобиля.
    speed: Подача машины в течении 30 минут
    availability: Постоянно в наличии и готовности к работе есть несколько свободных эвакуаторов, поэтому мы приедем в кратчайшие сроки до 30 минут.
    abroad: Эвакуация авто по Европе
    technical_help_abroad: Перевозка автомобиля по Европе, пересечение границы, авто на растаможку. Техническая помощь и перевозка за границей.

en:
    work_more_than_5_years: We work more than 5 years
    work_from: We have been working since 2015, we guarantee quality service 24/7 without days off. We perform any tasks for evacuation and transportation of a car.
    speed: Car delivery within 30 minutes
    availability: There are always several free tow trucks in stock and ready to work, so we will arrive in the shortest possible time within 30 minutes.
    abroad: Car evacuation across Europe
    technical_help_abroad: Car transportation across Europe, crossing the border, car for customs clearance. Technical assistance and transportation abroad.
</i18n>