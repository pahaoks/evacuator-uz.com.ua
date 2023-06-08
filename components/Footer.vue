<template>
  <footer>
    <div class="row">
      <div class="large-6 columns">
        <ul
          class="inline-list"
          style="font-size: 20px; margin-top: 2px !important"
        >
          <li class="copyright">{{ new Date().getFullYear() }} &copy; SGtrans</li>
        </ul>
      </div>
      <div class="large-6 columns">
        <ul class="inline-list social-media right">
          <a style="font-size: 30px; color: #00bfff"
            ><i class="fa fa-phone"></i> +380 98 133 76 27</a
          >
        </ul>
      </div>
    </div>
    <a href="tel:+380981337627" id="popup__toggle"
      ><div class="circlephone" style="transform-origin: center"></div>
      <div class="circle-fill" style="transform-origin: center"></div>
      <div class="img-circle" style="transform-origin: center">
        <div
          class="img-circleblock"
          style="transform-origin: center"
        ></div></div
    ></a>
  </footer>
</template>

<script setup></script>

<i18n lang="yaml"></i18n>
