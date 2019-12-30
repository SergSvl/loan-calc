<template>
  <router-view></router-view>
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
body{
  overflow: auto !important;
  line-height: 1.2;
  font-size: 18px;
  font-weight: 100;
  font-family: Gilroy-Bold;
}
.logoHeader {
  margin: 0 auto;
  max-width: 1170px;
  height: 88px;
  padding-left: 5px;
}
.wrapLogo{
  border-radius: 50%;
  box-shadow: 0px 0px 15px #6d6d6d17;
  background-color: #fff;
  width: 84px;
  height: 84px;
}
.logo{
  background-color: transparent;
  background-image: url(/assets/img/logo.png);
  background-position-x: left;
  background-repeat: no-repeat;
  width: 84px;
  height: 84px;
}
.el-main{
  max-width: 1170px;
  width: 100%;
  margin: 108px auto 0;
  overflow: visible;
}
.header{
  width: 100%;
  padding: 10px 0;
  background-color: #f7dc8a;
  position: fixed;
  z-index: 1000;
}
.titleForm{
  font-size: 30px;
  font-weight: 100;
  font-family: Gilroy-SemiBold;
  margin: 25px 0;
}
.wrapBtnAction{
  text-align: center;
  margin: 40px 0;
}
.btnAction{
  background-color: #f7dc8a;
  font-size: 18px;
}
.btnAction:hover, .btnAction:focus {
  color: #fff; /*#409EFF;*/
  border-color: #c6e2ff;
  background-color: #f7dc8a;
}
.box-card{
  text-align: center;
  padding: 20px;
  margin: 30px 0;
}
.box-card-title{
  font-size: 20px;
}
.radioGroupVertical{
  width: 300px;
  text-align: left;
  flex-direction: column;
  margin: 0 auto;
  display: flex !important;
}

/* Планшет */
@media screen and (max-width: 992px) {
  .logo{
    background-image: url(/assets/img/logo_mob.png);
    height: 46px;
  }
  .wrapLogo{
    margin: 0 0 0 10px;
    width: 46px;
    height: 46px;
  }
  .logoHeader {
    height: 46px;
  }
}

/* Мобильник */
  @media screen and (max-width: 543px) {
    .box-card{
      padding: 0px;
    }
    .box-card-input-title{
      text-align: center;
      width: 160px;
    }
    .radioGroupVertical{
      width: auto;
    }
    .el-main{
      margin: 54px auto 0
    }
  }
</style>
