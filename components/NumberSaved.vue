<template>
<div class="copy_link_mess">{{ t('number_saved') }}
</div>
</template>

<script setup>
const {t} = useI18n()

onMounted(() => {
    $('.text_copy_link').click(function() {
        var $text_copy = $(this);
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($text_copy.text()).select();
        document.execCommand("copy");
        $temp.remove();
        $('.copy_link_mess').fadeIn(400);
        setTimeout(function(){$('.copy_link_mess').fadeOut(400);},5000);
    });
})
</script>

<style>
.copy_link_mess{
    line-height:40px;
    border-radius:5px;
    background:#1DA1F2;
    color:#fff;
    position:fixed;
    padding:0 15px;
    z-index:99;
    bottom:30px;
    left:50%;
    margin-left:-120px;
    display:none;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 15px;
}
</style>

<i18n lang="yaml">
ua:
    number_saved: 'Номер збережено'

ru:
    number_saved: 'Номер сохранен'

en:
    number_saved: 'Number saved'
</i18n>