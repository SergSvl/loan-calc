<template>
  <!-- <transition name="fade"> -->
    <router-view></router-view>
  <!-- </transition> -->
</template>

<script>
import '@babel/polyfill'
// import lang from 'element-ui/lib/locale/lang/en'
import lang from 'element-ui/lib/locale/lang/ru-RU'
import locale from 'element-ui/lib/locale'
locale.use(lang)

export default {
  name: 'app'
}
</script>

<style>
@font-face {
  font-family: 'Gilroy-Bold';
  src: local('Gilroy Bold'), local('Gilroy-Bold'),
    url('/assets/fonts/Gilroy/Gilroy-Bold.ttf') format('truetype');
  font-weight: 100;
  font-style: normal;
}
@font-face {
  font-family: 'Gilroy-SemiBold';
  src: local('Gilroy SemiBold'), local('Gilroy-SemiBold'),
    url('/assets/fonts/Gilroy/Gilroy-SemiBold.ttf') format('truetype');
  font-weight: 100;
  font-style: normal;
}
body{
  overflow: auto !important;
  line-height: 1.2;
  font-size: 18px;
  font-weight: 100;
  font-family: Gilroy-Bold;
}

/* .fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 * / {
  opacity: 0;
} */
</style>
