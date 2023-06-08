<template>
    <div class="benefits">
        <div class="benefits__inner">
            <h2 class="benefits__header">
                {{ t('about_us_in_digits') }}
            </h2>
            <div class="benefits__element">
                <img class="benefits__icon" src="/img/projects.svg" :alt="t('orders_done')">
                <p class="benefits__number" data-max="1500" id="zamovlen">0</p>
                <p class="benefits__title">{{ t('orders_done') }}</p>
            </div>
            <div class="benefits__element">
                <img class="benefits__icon" src="/img/calendar.svg" :alt="t('calls_everyday') ">
                <p class="benefits__number" id="vuklukiv" data-max="5">0</p>
                <p class="benefits__title">{{ t('calls_everyday') }}</p>
            </div>
            <div class="benefits__element">
                <img class="benefits__icon" src="/img/workers.svg" :alt="t('years_of_work')">
                <p class="benefits__number" id="rokivrobotu" data-max="5">0</p>
                <p class="benefits__title">{{ t('years_of_work') }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const { t } = useI18n()

onMounted(() => {
    var num = $(".benefits__number");
    
    num.each(function(indx, el) {
        var max = $(el).data("max");
        var duration = 1600;
        var visibility = checkViewport(el);
        $(el).on("animeNum", function() {
            $({n: 0}).animate({n: max}, {
                easing: "linear",
                duration: duration,
                step: function(now, fx) {
                    $(el).html(now | 0)
                }
            })
        }).data("visibility", visibility);
        visibility && $(el).trigger("animeNum")
    });

    function checkViewport(el) {
    var H = document.documentElement.clientHeight,
        h = el.scrollHeight,
        pos = el.getBoundingClientRect();
        return pos.top + h > 0 && pos.bottom - h < H
    }

    $(window).scroll(function() {
        num.each(function(indx, el) {
            var visibility = checkViewport(el);
            el = $(el);
            var old = el.data("visibility");
            old != visibility && el.data("visibility", visibility) && !old && el.trigger("animeNum")
        })
    })
    
    setInterval(function () {
        if( $("#rokivrobotu").text().indexOf('5') != -1) {
            var r = ("<div class='benefits__number'>1500+</div>")
            var c = ("<div class='benefits__number'>5+</div>")
            var p = ("<div class='benefits__number'>5+</div>")
            if( $("#rokivrobotu").text().indexOf('+') != -1) { } else {
                $("#zamovlen").replaceWith(r)
                $("#vuklukiv").replaceWith(c)
                $("#rokivrobotu").replaceWith(p)
            }
            $("#conscript").remove();
        }
    }, 1);});
</script>

<i18n lang="yaml">
ua:
    about_us_in_digits: 'Про нас в цифрах'
    orders_done: 'замовлень виконано'
    calls_everyday: 'викликів щодня'
    years_of_work: 'років роботи'

ru:
    about_us_in_digits: 'О нас в цифрах'
    orders_done: 'заказов выполнено'
    calls_everyday: 'вызовов ежедневно'
    years_of_work: 'лет работы'

en:
    about_us_in_digits: 'About us with numbers'
    orders_done: 'orders done'
    calls_everyday: 'calls everyday'
    years_of_work: 'years of work'


</i18n>