<template>
  <el-container>
    <el-header class="header" height="auto">
      <div class="logoHeader">
        <el-image :src="logoPc" lazy></el-image>
      </div>
    </el-header>
    <transition name="slide-fade">
      <el-main>
        <el-row>
          <el-col>
            <el-page-header @back="goBack" title="Назад" content=""></el-page-header>

            <div class="titleForm">ВАШ ДОЛГ МОЖНО ЗАКРЫТЬ ЗА <span>{{ onClose() }} РУБ</span>!</div>

            <el-card class="box-card">
              <lineRelation
                :str1="block1a"
                :str2="block1b"
                :percent="35"
              ></lineRelation>
            </el-card>

            <el-card class="box-card">
              <div class="box-card-title">ВАШ ДОЛГ БУДЕТ ПОГАШЕН В ТЕЧЕНИЕ 9 - 10 МЕСЯЦЕВ</div>
              <div class="box-card-subtitle">Компания будет ежемесячно платить за вас {{ getDate() }} числа {{ getSumMonthly() }} руб</div>
              <lineRelation
                :str1="block2a"
                :str2="block2b"
                :percent="35"
              ></lineRelation>
            </el-card>

            <el-card class="box-card">
              <div class="box-card-title">ИТОГО СУММА ДОГОВОРА 10 349 РУБ</div>
              <lineRelation></lineRelation>
            </el-card>

            <el-card class="box-card">
              <div class="box-card-wrap">
                <div class="text">Как это работает?<br> Посмотрите короткое видео, в котором мы все объясняем.</div>
                <div class="video">
                  <iframe width="100%" height="100%" frameborder="0" src="https://www.youtube.com/embed/0YJFzV_AFD4"></iframe>
                </div>

              </div>
            </el-card>

            <div class="wrapBtnCalculate">
              <el-button @click="receiveConsultation" class="btnCalculate" type="">Заключить договор</el-button>
              <el-button @click="receiveConsultation" class="btnCalculate" type="">Получить консультацию</el-button>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </transition>
  </el-container>
</template>

<script>
import {Container, Header, Main, Card, Col, Row, Button, PageHeader, Image, RadioGroup, Radio,
Input, Select, Option} from 'element-ui';
import {store} from '../store/'
import {mapGetters} from 'vuex'
import lineRelation from '../components/lineRelation';

export default {
  name: 'app',
  components: {
    lineRelation,
    'el-container': Container,
    'el-header': Header,
    'el-main': Main,
    'el-card': Card,
    'el-col': Col,
    'el-row': Row,
    'el-button': Button,
    'el-page-header': PageHeader,
    'el-image': Image,
    'el-radio-group': RadioGroup,
    'el-radio': Radio,
    'el-input': Input,
    'el-select': Select,
    'el-option': Option,
  },
  data () {
    return {
      logoPc: '/assets/img/logo.png',
      logoPl: '/assets/img/logo_plansh.png',
      logoMob: '/assets/img/logo_mob.png',
      block1a: "35% заплатите вы " + this.onClose() + "руб",
      block1b: "65% заплатит компания " + this.onClose() * 65 / 35 + " руб",
      block2a: 'руб минимальный ежемесячный платеж',
      block2b: 'руб в счет досрочного погашения долга',
    }
  },

  methods: {
    goBack() {
      this.$router.push({name:'form'})
    },
    onOffer(){
      this.$router.push({name:'offer'})
    },
    receiveConsultation(){

    },
    onClose(){
      return this.principalBalance * 35 / 100
    },
    // sum1(){
    //   return "35% заплатите вы " + this.onClose() + "руб"
    // },
    // sum2(){
    //   return "65% заплатит компания " + this.onClose() * 65 / 35 + " руб"
    // },
    getDate(){
      if (this.dateMonthlyPayment == 1){
        return 31
      } else{
        return this.dateMonthlyPayment - 1
      }
    },
    getSumMonthly(){
      return this.principalBalance * 10.5 / 100
    }
  },

  computed: {
    ...mapGetters([
      'typeCredit',
      'principalBalance',
      'monthlyPayment',
      'dateMonthlyPayment',
      'latePayments',
      'wasThereTrial',
      'whereCase',
      'otherLoan'
    ])
  },

  created(){
    // google.charts.load('current', {'packages':['corechart']});
    // google.charts.setOnLoadCallback(this.drawChart);
  }
}
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 3.3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }

  .el-main{
    max-width: 1170px;
    width: 100%;
    overflow: visible;
    margin: 0 auto;
  }
  .header{
    width: 100%;
    padding: 10px 0;
    background-color: #f7dc8a;
  }
  .titleForm{
    font-size: 30px;
    font-weight: 100;
    font-family: Gilroy-SemiBold;
    margin: 25px 0;
  }
  .titleForm span {
    background: #fae465;
    padding: 0px 5px;
    border-radius: .2em;
  }
  .logoHeader{
    padding: 0 0 0 15px;
    max-width: 1170px;
    margin: 0 auto;
    height: 88px;
  }
  .wrapBtnCalculate{
    text-align: center;
    margin: 40px 0;
  }
  .btnCalculate{
    background-color: #f7dc8a;
    font-size: 18px;
  }
  .btnCalculate button {
    margin: 0 0 20px;
  }
  .box-card{
    text-align: center;
    padding: 20px;
    margin: 30px 0;
  }
  .box-card-title{
    font-size: 20px;
  }
  .box-card-subtitle{
    font-size: 18px;
    padding: 20px 0;
  }
  .radioGroupVertical{
    width: 300px;
    text-align: left;
    flex-direction: column;
    margin: 0 auto;
    display: flex;
  }
  .el-radio {
    margin: 5px 10px;
  }
  .el-radio__label{
    font-size: 16px;
  }
  .box-card-wrap{
    display: flex;
    margin: 0 auto;
    justify-content: center;
  }
  .box-card-wrap .text {
    width: 25%;
    line-height: 1.6;
    text-align: left;
  }
  .video{
    height: 140px;
    width: 100%;
    max-width: 250px;
    margin-left: 20px;
  }
  .box-card-input-title{
    margin: 20px 20px 20px 0;
    width: 210px;
    text-align: right;
    display: inline-block;
    font-size: 14px;
    color: #606266;
  }
  .box-card-input{
    width: auto;
  }
  .el-form{
    width: 600px;
    margin: 0 auto;
  }
  .el-form > label{
    width: 300px;
  }
  .el-form > div > div > div {
    margin-left: 300px;
  }

  /* ПК */
  @media screen and (max-width: 1200px) {

  }

  /* Планшет */
  @media screen and (max-width: 992px) {

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
    .box-card-wrap{
      display: block;
    }
    .box-card-wrap .text{
      width: 100%;
      text-align: center;
    }
    .video{
      margin: 0 auto;
    }
  }
</style>
