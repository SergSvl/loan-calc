<template>
<!-- v-loading="isLoading" -->
  <div>
    <!-- <spinner :status="spinnerStatus"
      :color="spinnerColor"
      :size="spinnerSize"
      :depth="spinnerDepth"
      :clockwise="spinnerClockwise"
      :speed="spinnerSpeed"
    ></spinner> -->

    <el-container v-responsive="['hidden-all','xl','lg']" width="1170px">
      <el-header height="90px" class="header"></el-header>
      <transition name="fade">
        <el-main>
          <el-row>
            <el-col :span="24">
              <div class="titleHome">Закрой свою задолженность<br><span>за 35%</span> от суммы</div>
              <transition name="fadeImg" mode="out-in">
                <el-image :src="srcPc" lazy></el-image>
              </transition>
              <el-button @click="onForm" type=""></el-button>
            </el-col>
          </el-row>
        </el-main>
      </transition>
    </el-container>

    <el-container v-responsive="['hidden-all','md','sm']" width="992px">
      <el-header height="90px" class="header"></el-header>
      <transition name="fade">
        <el-main>
          <el-row>
            <el-col :span="24">
              <div class="titleHome">Закрой свою задолженность<br><span>за 35%</span> от суммы</div>
              <transition name="fadeImg">
                <el-image :src="srcPl" lazy></el-image>
              </transition>
              <el-button @click="onForm" type=""></el-button>
            </el-col>
          </el-row>
        </el-main>
      </transition>
    </el-container>

    <el-container v-responsive="['hidden-all','xs']" width="320px">
      <el-header height="90px" class="header"></el-header>
      <transition name="fade">
        <el-main>
          <el-row>
            <el-col :span="24">
              <div class="titleHome">Закрой свою задолженность<br><span>за 35%</span> от суммы</div>
              <transition name="fadeImg">
                <el-image :src="srcMob" lazy></el-image>
              </transition>
              <el-button @click="onForm" type=""></el-button>
            </el-col>
          </el-row>
        </el-main>
      </transition>
    </el-container>
  </div>
</template>

<script>
  import {Container, Main, Header, Card, Col, Row, Button, Image } from 'element-ui';
  // import Spinner from 'vue-spinner-component/src/Spinner.vue'
  // import loading from 'vue-loading';
  // export default {
  //     directives: { loading },
  //     data () {
  //         return { isLoading: false }
  //     }
  // }
  export default {
    name: 'app',
    // directives: { loading },
    components: {
      // Spinner,
      'el-container': Container,
      'el-header': Header,
      'el-main': Main,
      'el-col': Col,
      'el-row': Row,
      'el-button': Button,
      'el-image': Image,
    },

    data () {
      return {
        srcPc: '/assets/img/bg.png',
        srcPl: '/assets/img/bg_plansh.png',
        srcMob: '/assets/img/bg_mob.png',
        // spinnerStatus: true,
        // spinnerColor: '',
        // spinnerSize: 20,
        // spinnerDepth: '',
        // spinnerClockwise: true,
        // spinnerSpeed: 10,
      }
    },

    methods: {
      onForm(){
        this.$router.push({name:'form'}) // алиас нужно передавать через name!
      },
      openFullScreenLoading() {
        this.fullscreenLoading = true;
      },
      closeFullScreenLoading() {
        this.fullscreenLoading = false;
      },
    },

    created(){
      // this.openFullScreenLoading()
    },

    mounted(){
      // this.closeFullScreenLoading()
    }

  }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }
  .el-container{
    max-width: 1170px;
    /* width: fit-content; */
    text-align: center;
    margin: 0 auto;
    padding: 15px;
    /* border: 1px solid black; */
  }
  .titleHome{
    font-size: 42px;
    position: absolute;
    font-weight: 600;
    font-family: Gilroy-Bold;
    z-index: 2;
    width: 670px;
    text-align: left;
    top: 165px;
    line-height: 1.5;
  }
  .titleHome span{
    color: #dbb646 !important;
  }
  .el-image {
    /* border: 1px solid black !important; */
    z-index: 0;
    display: table;
    margin: 0 auto;
  }
  .el-button{
    position: absolute;
    left: 0px;
    top: 355px;
    height: 91px;
    width: 310px;
    border-color: transparent;
    background-image: url("/assets/img/btn.png");
    background-repeat : no-repeat;
  }
  .el-button:focus {
    background-color: transparent;
    border-color: transparent;
  }
  .el-button:hover {
    border-color: transparent;
    background-color: transparent;
    background-image: url("/assets/img/btn_hover.png");
  }
  .el-main{
    /* background-image: url(/assets/img/bg.png); */
    padding: 0px;
    overflow: visible;
  }
  .header{
    width: 100%;
    background-color: transparent;
    background-image: url(/assets/img/logo.png);
    background-position-x: left;
    background-repeat: no-repeat;
  }

  .fadeImg-enter-active, .fadeImg-leave-active {
    transition: opacity 0.3s;
  }
  .fadeImg-enter, .fadeImg-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }

  /* ПК */
  @media screen and (max-width: 1200px) {
    .input_rgba, .wrap_preview_site, .save_btn {
      width: 100% !important;
    }
    .wrap_preview_site {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }

  /* Планшет */
  @media screen and (max-width: 992px) {
    .header{
      background-image: url(/assets/img/logo_mob.png);
    }
    .el-image {
      margin: -70px auto;
    }
    .titleHome[data-v-5a90ec03] {
      font-size: 30px;
      width: 670px;
      top: 30px;
    }
    .el-button{
      left: 0px;
      top: 145px;
      height: 78px;
      width: 265px;
      background-image: url("/assets/img/btn_plansh.png");
      background-repeat : no-repeat;
    }
    .el-button:hover {
      background-color: transparent;
      background-image: url("/assets/img/btn_hover_plansh.png");
    }
  }

  /* Мобильник */
  @media screen and (max-width: 543px) {
    .header{
      background-image: url(/assets/img/logo_mob.png);
    }
    .titleHome[data-v-5a90ec03] {
      font-size: 30px;
      width: 100%;
      top: -30px;
      text-align: center;
      /* border: 1px solid red !important; */
    }
    .el-button{
      position: relative;
      top: -230px;
      height: 75px;
      width: 258px;
      background-image: url("/assets/img/btn_mob.png");
    }
    .el-button:hover {
      background-color: transparent;
      background-image: url("/assets/img/btn_hover_mob.png");
    }
  }

</style>
