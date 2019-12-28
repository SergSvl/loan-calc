<template>
  <el-container>
    <el-header class="header" height="auto">
      <div class="logoHeader">
        <!-- <el-image :src="logoPc" lazy></el-image> -->
      </div>
    </el-header>
    <transition name="slide-fade">
      <el-main>
        <el-row>
          <el-col>
            <el-page-header @back="goBack" title="Назад" content=""></el-page-header>

            <div class="titleForm">ВАШ ДОЛГ МОЖНО ЗАКРЫТЬ ЗА <span>{{ format(close) }} РУБ</span>!</div>

            <el-card class="box-card">
              <lineRelation
                :str1="block1a"
                :str2="block1b"
                :percent="block1perc"
              ></lineRelation>
            </el-card>

            <el-card class="box-card">
              <div class="box-card-title">ВАШ ДОЛГ БУДЕТ ПОГАШЕН В ТЕЧЕНИЕ 9 - 10 МЕСЯЦЕВ</div>
              <div class="box-card-subtitle">Компания будет ежемесячно платить за вас {{ date }} числа {{ format(sumMonthly) }} руб</div>
              <lineRelation
                :str1="block2a"
                :str2="block2b"
                :percent="block2perc"
              ></lineRelation>
            </el-card>

            <el-card class="box-card">
              <div class="box-card-title">ИТОГО СУММА ДОГОВОРА {{ format(contractAmount) }} РУБ</div>
              <lineRelation
                :str1="block3a"
                :str2="block3b"
                :percent="block3perc"
              ></lineRelation>
            </el-card>

            <el-card class="box-card">
              <div class="box-card-wrap">
                <div class="text">Как это работает?<br> Посмотрите короткое видео, в котором мы все объясняем.</div>
                <div class="video">
                  <iframe width="100%" height="100%" :tabindex="-1" frameborder="0" :src="urlVideo" allowfullscreen></iframe>
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
      urlVideo: user_config.youtube_video, //'https://www.youtube.com/embed/0YJFzV_AFD4',
      basePercent: user_config.basePercent, //35, // 35% - постоянный процент выплаты
      companyPayment: user_config.companyPayment, //10.5, // 10,5% - процент выплаты компании
      annualService: user_config.annualService, //10000, // сумма годового обслуживания
      returnDate: user_config.returnDate, //28, // предыдущее число выплаты, если клиет указал 1-е число
      date: 1, // вычисляемая дата ежемесячной выплаты компании
      residual: 0,  // остаток процентов от 100 минус basePercent
      close: 0, // сумма закрываемого долга, равная basePercent %
      sumMonthly: 0,  // сумма ежемесячного платежа компании заданного числа
      minPayment: 0,  // размер ежемесячного платежа
      debtRepayment: 0, // сумма в счет досрочного погашения долга
      block1a: '',  // строка: "35% заплатите вы X руб"
      block1b: '',  // строка: "65% заплатит компания Y руб"
      block1perc: 0,  // число: basePercent
      block2a: '',  // строка: "Z руб минимальный ежемесячный платеж"
      block2b: '',  // строка: "W руб в счет досрочного погашения долга"
      block2perc: 0,  // число: minPayment * 100 / sumMonthly
      block3a: '',  // строка: "annualService руб в счет договора годового обслуживания"
      block3b: '',  // строка: "X руб для погашения долга"
      block3perc: 0,  // число: annualService * 100 / contractAmount
      contractAmount: 0,  // итого сумма договора
    }
  },

  methods: {
    format(number){
      return accounting.formatNumber(number);
    },
    goBack() {
      this.$router.push({name:'form'})
    },
    onOffer(){
      this.$router.push({name:'offer'})
    },
    receiveConsultation(){
      this.$router.push({name:'send'})
    },
    setClose(){
      // console.log('setClose')
      this.close = this.principalBalance * this.basePercent / 100
    },
    setResidual(){
      this.residual = 100 - this.basePercent
    },

    setBlock1a(){
      // console.log('setBlock1a')
      this.block1a = this.basePercent + '% заплатите вы ' + this.format(this.close) + ' руб'
    },
    setBlock1b(){
      // console.log('setBlock1b')
      this.block1b = this.residual + '% заплатит компания ' + this.format(this.close * this.residual / this.basePercent) + ' руб'
    },

    setMinPayment(){
      // console.log('setMinPayment')
      this.minPayment = this.monthlyPayment
    },
    setDebtRepayment(){
      // console.log('setDebtRepayment')
      this.debtRepayment = this.sumMonthly - this.monthlyPayment
    },

    setBlock2a(){
      // console.log('setBlock2a')
      this.block2a = this.format(this.minPayment) + ' руб минимальный ежемесячный платеж'
    },
    setBlock2b(){
      // console.log('setBlock2b')
      this.block2b = this.format(this.debtRepayment) + ' руб в счет досрочного погашения долга'
    },

    setBlock3a(){
      // console.log('setBlock3a')
      this.block3a = this.format(this.annualService) + ' руб в счет договора годового обслуживания'
    },
    setBlock3b(){
      // console.log('setBlock3b')
      this.block3b = this.format(this.close) + ' руб для погашения долга'
    },

    getDate(){
      if (this.dateMonthlyPayment == '' || this.dateMonthlyPayment == 1){
        this.date = this.returnDate
      } else{
        this.date = this.dateMonthlyPayment - 1
      }
    },
    getSumMonthly(){
      this.sumMonthly = this.principalBalance * this.companyPayment / 100
    },
    setContractAmount(){
      this.contractAmount = this.close + this.annualService
    },

    setBlock1percent(){
      this.block1perc = this.basePercent
    },
    setBlock2percent(){
      this.block2perc = this.minPayment * 100 / this.sumMonthly
    },
    setBlock3percent(){
      this.block3perc = this.annualService * 100 / this.contractAmount
    },
    setFormatSettings(){
      // Settings object that controls default parameters for library methods:
      accounting.settings = {
        currency: {
          symbol : "$",   // default currency symbol is '$'
          format: "%s%v", // controls output: %s = symbol, %v = value/number (can be object: see below)
          decimal : ".",  // decimal point separator
          thousand: ",",  // thousands separator
          precision : 2   // decimal places
        },
        number: {
          precision : 0,  // default precision on numbers is 0
          thousand: " ",
          decimal : "."
        }
      }
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

  /* метод data() вызывыется между хуками beforeCreate() и created() */
  created(){
    // console.log('created:')
    this.setFormatSettings()
    this.setClose()
    this.getSumMonthly()
    this.setResidual()
    this.setBlock1a()
    this.setBlock1b()
    this.setBlock1percent()
    this.getDate()
    this.setMinPayment()
    this.setDebtRepayment()
    this.setBlock2a()
    this.setBlock2b()
    this.setBlock2percent()
    this.setContractAmount()
    this.setBlock3a()
    this.setBlock3b()
    this.setBlock3percent()
    // console.log('this.principalBalance', this.principalBalance)
    // console.log('this.close', this.close)
    // console.log('this.residual', this.residual)
    // console.log('this.block1a', this.block1a)
    // console.log('this.block1b', this.block1b)
    // console.log('this.minPayment', this.minPayment)
    // console.log('this.block2a', this.block2a)
    // console.log('this.block2b', this.block2b)
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
    margin: 108px auto 0
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
  .titleForm span {
    background: #fae465;
    padding: 0px 5px;
    border-radius: .2em;
  }
  .logoHeader{
    margin: 0 0 0 15px;
    max-width: 1170px;
    height: 88px;
    background-color: transparent;
    background-image: url(/assets/img/logo.png);
    background-position-x: left;
    background-repeat: no-repeat;
  }
  .wrapBtnCalculate{
    text-align: center;
    margin: 40px 0;
  }
  .btnCalculate{
    background-color: #f7dc8a;
    font-size: 18px;
  }
  .btnCalculate:hover {
    color: #fff; /*#409EFF;*/
    border-color: #c6e2ff;
  }
  .wrapBtnCalculate button {
    margin: 0 0 20px;
  }
  .box-card{
    text-align: center;
    padding: 20px;
    margin: 30px 0;
  }
  .box-card-title{
    font-size: 20px;
    margin-bottom: 20px;
  }
  .box-card-subtitle{
    font-size: 18px;
    padding: 0 0 20px;
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
    .logoHeader{
      background-image: url(/assets/img/logo_mob.png);
        margin: 0 0 0 10px;
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
    .el-main{
      margin: 54px auto 0
    }
  }
</style>
