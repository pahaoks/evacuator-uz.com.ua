<template>
  <div class="section">
    <h2>{{ t('contact_us') }}</h2>
    <div class="row">
      <div class="large-12 columns">
        <a class="contact-link" href="mailto:evacuatoruz@gmail.com">
          <i class="contact-icon contact-icon--email"></i>
          <span>evacuatoruz@gmail.com</span>
        </a>

        <a class="contact-link" href="tel:+380981337627">
          <i class="contact-icon contact-icon_shrink contact-icon--phone"></i>
          <i class="contact-icon contact-icon_shrink contact-icon--telegram"></i>
          <i class="contact-icon contact-icon_shrink contact-icon--whatsapp"></i>
          <i class="contact-icon contact-icon_shrink contact-icon--viber"></i>
          <span>+38(098)-133-76-27</span>
        </a>

        <a class="contact-link" href="tel:+421918123753">
          <i class="contact-icon contact-icon_shrink contact-icon--phone"></i>
          <span>+421918123753</span>
        </a>

        <a class="contact-link" href="https://www.instagram.com/svi_transporter">
          <i class="contact-icon contact-icon_shrink contact-icon--instagram"></i>
          <span>@svi_transporter</span>
        </a>

        <a class="contact-link" href="https://www.tiktok.com/@evacuator_uz.com.ua">
          <i class="contact-icon contact-icon_shrink contact-icon--tiktok"></i>
          <span>@evacuator_uz.com.ua</span>
        </a>

        <a class="contact-link" href="https://www.facebook.com/SVItransporter">
          <i class="contact-icon contact-icon_shrink contact-icon--facebook"></i>
          <span>@SVItransporter</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
let { t } = useI18n()
</script>

<style>
.contact-link {
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
  margin-bottom: 10px;
  font-size: 20px;
}
.contact-icon {
  width: 38px;
  height: 38px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 8px;
}
.contact-icon_shrink {
  margin-right: 4px;
}
.contact-icon--email {
  background-image: url('/img/email-icon.png');
}
.contact-icon--phone {
  background-image: url('/img/phone-icon.png');
}
.contact-icon--telegram {
  background-image: url('/img/telegram-icon.png');
}
.contact-icon--whatsapp {
  background-image: url('/img/whatsapp.png');
}
.contact-icon--instagram {
  background-image: url('/img/instagram-icon.png');
}
.contact-icon--tiktok {
  background-image: url('/img/tiktok-icon.png');
}
.contact-icon--facebook {
  background-image: url('/img/facebook-icon.png');
}
.contact-icon--viber {
  background-image: url('/img/viber.png');
  width: 35px;
  height: 35px;
}
</style>

<i18n lang="yaml">
ua:
  contact_us: Контакти
  phone: Телефон
en:
  contact_us: Contact Us
  phone: Phone
ru:
  contact_us: Контакты
  phone: Телефон
</i18n>