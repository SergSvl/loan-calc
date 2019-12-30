<template>
  <div>
    <loading :active.sync="isLoading"
      :can-cancel="false"
      :is-full-page="true"
      color="#f7dc8a"
      :height="128"
      :width="128"
      :opacity="0.9"
    ></loading>

    <!-- <button @click.prevent="doAjax">fetch Data</button> -->

    <el-container v-responsive="['hidden-all','xl','lg']" width="1170px">
      <el-header height="90px" class="header"></el-header>

      <transition name="fade" mode="out-in" appear>
        <el-main>
          <el-row>
            <el-col :span="24">
              <div class="titleHome">Закрой свою задолженность<br><span>за {{basePercent}}%</span> от суммы</div>
              <transition name="fadeImg" mode="out-in" appear>
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
      <transition name="fade" mode="out-in" appear>
        <el-main>
          <el-row>
            <el-col :span="24">
              <div class="titleHome">Закрой свою задолженность<br><span>за {{basePercent}}%</span> от суммы</div>
              <transition name="fadeImg" mode="out-in" appear>
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
      <transition name="fade" mode="out-in" appear>
        <el-main>
          <el-row>
            <el-col :span="24">
              <div class="titleHome">Закрой свою задолженность<br><span>за {{basePercent}}%</span> от суммы</div>
              <transition name="fadeImg" mode="out-in" appear>
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
  import Loading from 'vue-loading-overlay';
  import 'vue-loading-overlay/dist/vue-loading.css';

  export default {
    name: 'app',
    components: {
      'el-container': Container,
      'el-header': Header,
      'el-main': Main,
      'el-col': Col,
      'el-row': Row,
      'el-button': Button,
      'el-image': Image,
      Loading
    },

    data () {
      return {
        srcPc: '/assets/img/bg.png',
        srcPl: '/assets/img/bg_plansh.png',
        srcMob: '/assets/img/bg_mob.png',
        basePercent: user_config.basePercent,
        isLoading: false,
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
      // doAjax() {
      //   this.isLoading = true;
      //   // simulate AJAX
      //   setTimeout(() => {
      //     this.isLoading = false
      //   },5000)
      // },
    },

    created(){
      this.isLoading = true;
    },

    mounted(){
      this.isLoading = false;
      // console.log('mounted')
    }

  }
</script>

<style scoped>
  .fade-enter-active {
    transition: opacity 2.5s ease;
  }
  .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .fadeImg-enter-active {
    transition: opacity 3.5s;
  }
  .fadeImg-leave-active {
    transition: opacity 0.5s;
  }
  .fadeImg-enter, .fadeImg-leave-to {
    opacity: 0;
  }

  .el-container{
    max-width: 1170px;
    text-align: center;
    margin: 0 auto;
    padding: 15px;
    /* border: 1px solid black; */
  }
  .el-main{
    padding: 0px;
    margin: 0 auto;
  }
  .header{
    width: 100%;
    background-color: transparent;
    background-image: url(/assets/img/logo.png);
    background-position-x: left;
    background-repeat: no-repeat;
    position: relative;
  }
  .titleHome{
    font-size: 42px;
    position: absolute;
    font-weight: 600;
    /* font-family: Gilroy-Bold; */
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
  .el-button {
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
    .titleHome {
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
    .titleHome {
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
