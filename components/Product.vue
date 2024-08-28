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
										<p class="top">{{ t('tariff_in') }}</p>
										<p class="bottom" style="margin-bottom:0px">
											{{ t('price_depends') }}
										</p>
									</div>
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
</script>

<i18n lang="yaml">
ua:
    our_services: Наші послуги
    kind_of_baggage: Перевозимо легкові автомобілі, великогабаритний транспорт, промислове обладнання і водний транспорт. Вантажний евакуатор допоможе в екстрених ситуаціях. 
    tariff_in: Тарифи
    price_depends: Ціна формується в залежності від типу та ваги автомобіля і необхідної відстані
    cash_payment: Готівковий розрахунок
    payment_ways: Способи оплати
	
ru:
    our_services: 'Наши услуги'
    kind_of_baggage: 'Перевозим легковые автомобили, крупногабаритный транспорт, промышленное оборудование и водный транспорт. Грузовой эвакуатор поможет в экстренных ситуациях.'
    tariff_in: 'Тарифы'
    price_depends: 'Цена формируется в зависимости от типа и веса автомобиля и необходимого расстояния'
    cash_payment: 'Наличный расчет'
    payment_ways: 'Способы оплаты'

en:
    our_services: Our services
    kind_of_baggage: We transport cars, large vehicles, industrial equipment and water transport. A tow truck will help in emergency situations.
    tariff_in: Tariffs in
    price_depends: The price is formed depending on the type and weight of the car and the required distance
    cash_payment: Cash payment
    payment_ways: Payment methods
</i18n>