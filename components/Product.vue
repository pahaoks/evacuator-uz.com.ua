<template>
	<div id="product" class="section product gray" style="padding-top:30px" data-magellan-destination="product">
		<div class="row">
			<div class="large-12 columns">
				<h2 style="margin-bottom: 0.4em">
					{{ t('our_services') }}
				</h2>
				<span class="subheading" style="margin-bottom: 40px;">
					{{ t('kind_of_baggage') }}
				</span>

				<div class="row">
					<div class="tariffs" id="tariffs">
						<div class="tariffs_twoblocks flex">
							<div class="tariffs_twoblocks_item">
								<div class="tariffs_twoblocks_car flex">
									<div class="tariffs_twoblocks_carimg">
										<img src="/img/car.svg" title="">
									</div>
									<div class="tariffs_twoblocks_cartext">
										<p class="top">{{ t('tariff_in') }} {{ place }} </p>
										<p class="middle">{{ t('from_800') }}</p>
										<p class="bottom" style="margin-bottom:0px">
											{{ t('price_depends') }}
										</p>
									</div>
								</div>
							</div>
							<div class="tariffs_twoblocks_item">
								<div class="tariffs_twoblocks_list">
									<ul style="margin-bottom:0">
										<li>{{ t('price_in_ukraine') }}</li>
										<li>{{ t('price_europe') }}</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="tariffs_threeblocks">
							<h2 style="font-size:34px;margin-bottom: 20px;margin-top: 30px;">
								{{ t('payment_ways') }}
							</h2>
							<div class="tariffs_threeblocks_wrapper flex">
								<div class="tariffs_threeblocks_item">
									<div class="tariffs_threeblocks_img">
										<img src="/img/price.png" title="">
									</div>
									<div class="tariffs_threeblocks_text">
										{{ t('cash_payment') }}
									</div>
								</div>
								<div class="tariffs_threeblocks_item" style="margin-right: 100px;">
									<div class="tariffs_threeblocks_img">
										<img src="/img/privat24.png" title="">
									</div>
									<div class="tariffs_threeblocks_text">
										Privat24
									</div>
								</div>
							</div>
						</div>
					</div>
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

const city = route.params.city
const country = route.params.country

let place = city ?
	translateCity.t(locale.value, city, 1) :
	country ? translateCountry.t(locale.value, country, 1) : t('in_default_city')	
</script>

<i18n lang="yaml">
ua:
    our_services: Наші послуги
    kind_of_baggage: Перевозимо легкові автомобілі, великогабаритний транспорт, промислове обладнання і водний транспорт. Вантажний евакуатор допоможе в екстрених ситуаціях. 
    tariff_in: Тарифи в
    from_800: Від 800 грн
    price_depends: Ціна формується в залежності від типу та ваги автомобіля і необхідної відстані
    price_in_ukraine: По Україні - від 20 грн / км
    cash_payment: Готівковий розрахунок
    price_europe: По Європі  - від 40 грн / км
    payment_ways: Способи оплати
    in_default_city: Ужгороді
	
ru:
    our_services: 'Наши услуги'
    kind_of_baggage: 'Перевозим легковые автомобили, крупногабаритный транспорт, промышленное оборудование и водный транспорт. Грузовой эвакуатор поможет в экстренных ситуациях.'
    tariff_in: 'Тарифы в'
    from_800: 'От 800 грн'
    price_depends: 'Цена формируется в зависимости от типа и веса автомобиля и необходимого расстояния'
    price_in_ukraine: 'По Украине - от 20 грн / км'
    cash_payment: 'Наличный расчет'
    price_europe: 'По Европе - от 40 грн / км'
    payment_ways: 'Способы оплаты'
    in_default_city: Ужгороде

en:
    our_services: Our services
    kind_of_baggage: We transport cars, large vehicles, industrial equipment and water transport. A tow truck will help in emergency situations.
    tariff_in: Tariffs in
    from_800: From 800 UAH
    price_depends: The price is formed depending on the type and weight of the car and the required distance
    price_in_ukraine: In Ukraine - from 20 UAH / km
    cash_payment: Cash payment
    price_europe: In Europe - from 40 UAH / km
    payment_ways: Payment methods
    in_default_city: Uzhhorod
</i18n>