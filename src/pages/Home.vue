<template>
  <div>
    <el-container v-responsive="['hidden-all','xl','lg']" width="1170px">
      <el-header height="90px" class="header"></el-header>
      <el-main>
        <el-row>
          <el-col :span="24">
            <div class="titleHome">Закрой свою задолженность<br><span>за 35%</span> от суммы</div>
            <el-image :src="srcPc"></el-image>
            <!-- <picture>
              <source :srcset="'/assets/img/bg_mob.png'" media="(max-width: 320px)">
              <source :srcset="'/assets/img/bg_plansh.png'" media="(max-width: 768px)">
              <source :srcset="'/assets/img/bg.png'" media="(max-width: 1920px)">
              <img class="img-fluid" :srcset="'/assets/img/bg.png'" />
            </picture> -->

            <el-button @click="onForm" type=""></el-button>
          </el-col>
        </el-row>
      </el-main>
    </el-container>

    <el-container v-responsive="['hidden-all','md','sm']" width="992px">
      <el-header height="90px" class="header"></el-header>
      <el-main>
        <el-row>
          <el-col :span="24">
            <div class="titleHome">Закрой свою задолженность<br><span>за 35%</span> от суммы</div>
            <el-image :src="srcPl"></el-image>
            <!-- <picture>
              <source :srcset="'/assets/img/bg_mob.png'" media="(max-width: 320px)">
              <source :srcset="'/assets/img/bg_plansh.png'" media="(max-width: 768px)">
              <source :srcset="'/assets/img/bg.png'" media="(max-width: 1920px)">
              <img class="img-fluid" :srcset="'/assets/img/bg.png'" />
            </picture> -->

            <el-button @click="onForm" type=""></el-button>
          </el-col>
        </el-row>
      </el-main>
    </el-container>

    <el-container v-responsive="['hidden-all','xs']" width="320px">
      <el-header height="90px" class="header"></el-header>
      <el-main>
        <el-row>
          <el-col :span="24">
            <div class="titleHome">Закрой свою задолженность<br><span>за 35%</span> от суммы</div>
            <el-image :src="srcMob"></el-image>
            <!-- <picture>
              <source :srcset="'/assets/img/bg_mob.png'" media="(max-width: 320px)">
              <source :srcset="'/assets/img/bg_plansh.png'" media="(max-width: 768px)">
              <source :srcset="'/assets/img/bg.png'" media="(max-width: 1920px)">
              <img class="img-fluid" :srcset="'/assets/img/bg.png'" />
            </picture> -->

            <el-button @click="onForm" type=""></el-button>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// <el-image :src="src" lazy></el-image>
  // import PortalBtn from '../components/PortalBtn';
  // import GetButtons from '../buttons';
  // import {store} from '../store/'
  // import {mapMutations} from 'vuex'
  import {Container, Main, Header, Card, Col, Row, Button, Image,
  //   Form, FormItem, Button, RadioGroup, Input, Select, Radio, CheckboxGroup,
  // CheckboxButton, Option, DatePicker, TimePicker, Switch, RadioButton,
  // Dialog
  } from 'element-ui';

  export default {
    name: 'app',
    components: {
      // Header,
      'el-container': Container,
      'el-header': Header,
      'el-main': Main,
      'el-col': Col,
      'el-row': Row,
      'el-button': Button,
      'el-image': Image,

      // 'el-form': Form,
      // 'el-form-item': FormItem,
      // 'el-button': Button,
      // 'el-radio-group': RadioGroup,
      // 'el-input': Input,
      // 'el-select': Select,
      // 'el-radio': Radio,
      // 'el-checkbox-group': CheckboxGroup,
      // 'el-checkbox-button': CheckboxButton,
      // 'el-option': Option,
      // 'el-date-picker': DatePicker,
      // 'el-time-picker': TimePicker,
      // 'el-switch': Switch,
      // 'el-radio-button': RadioButton,
      // 'el-dialog': Dialog
    },
    data () {
      return {
        srcPc: '/assets/img/bg.png',
        srcPl: '/assets/img/bg_plansh.png',
        srcMob: '/assets/img/bg_mob.png',
      }
    },
    created(){
      // this.btnHomeOff();
      // this.btnLogoutOff();
    },
    methods: {
      onForm(){

      }
      // ...mapMutations([
      //   'btnHomeOff',
      //   'btnLogoutOff'
      // ])
    }
  }
</script>

<style scoped>
  .el-container{
    max-width: 1170px;
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
    background-image: url("/assets/img/btn.png");
    background-repeat : no-repeat;
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
  }

</style>
