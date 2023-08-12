<template>
  <div id="top" data-magellan-expedition="fixed">
    <div class="row">
      <div class="large-12 columns">
        <div class="top-bar">
          <Burger v-model="menuOpened"></Burger>

          <ul class="title-area">
            <li class="name logo">
              <a style="font-size: 50px; line-height: 78px">
                <span style="color: #4e97cc">SG</span>
                <span style="color: #808080">trans</span>
              </a>
            </li>
          </ul>

          <section class="top-bar-section">
            <ul class="right" id="menu">
              <li>
                <a
                  style="word-spacing: 6px; font-size: 40px; color: #00bfff"
                  class="text_copy_link"
                  id="logo-number"
                >
                  <i class="fa fa-phone"></i> +380 98 133 76 27
                </a>
                <a
                  class="imhide"
                  href="viber://chat?number=%2B380981337627"
                  style="margin-right: 20px; display: none"
                >
                  <img src="/img/viber.png" width="50px" />
                </a>
                <a
                  class="imhide"
                  href="https://wa.me/380981337627"
                  target="_blank"
                  style="display: none"
                >
                  <img src="/img/whatsapp.png" width="50px" />
                </a>
              </li>
              <li class="imhide2">
                <a href="viber://chat?number=%2B380981337627">
                  <img
                    style="margin-top: 25%"
                    src="/img/viber.png"
                    width="50px"
                  />
                </a>
              </li>
              <li class="imhide2">
                <a href="https://wa.me/380981337627" target="_blank">
                  <img
                    style="margin-top: 25%"
                    src="/img/whatsapp.png"
                    width="50px"
                  />
                </a>
              </li>
            </ul>

            <div class="lang-switcher">
              <NuxtLink
                v-for="l in locales"
                :key="l.code"
                :to="switchLocalePath(l.code)+slash(l.code)"
                class="lang-item"
              >
                {{ l.code.toUpperCase() + "  " }}
              </NuxtLink>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locales, defaultLocale } = useI18n()
const menuOpened = useMenuOpened()
const switchLocalePath = useSwitchLocalePath()
const slash = (l) => l !== 'ua' ? '/' : ''
</script>

<style>
.lang-switcher {
  float: left;
  margin-left: 20px;
}

.lang-item {
  margin-right: 10px;
}

.router-link-active {
  color: #f06060;
}

@media only screen and (max-width: 768px) {
  .top-bar-section li a:not(.button) {
    line-height: 30px;
  }

  .top-bar {
    line-height: 35px;
  }

  .top-bar-section ul li>a {
    padding-left: 0;
  }

  .lang-switcher {
    position: absolute;
    top: 80px;
    right: 0;
  }
}
</style>

<i18n lang="yaml">
ua:
  hello: "Привіт, світ!"
en:
  hello: "hello world!"
ru:
  hello: "Привет мир!"
</i18n>
