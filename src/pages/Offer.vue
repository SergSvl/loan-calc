<template>
  <el-container>
    <el-header class="header" height="auto">
      <div class="logoHeader">
        <div class="wrapLogo">
          <div class="logo"></div>
        </div>
      </div>
    </el-header>
    <transition name="fade" mode="out-in" appear>
      <el-main>
        <el-row>
          <el-col>
            <el-page-header @back="goBack" title="Назад" content=""></el-page-header>

            <div class="titleForm">ВАШ ДОЛГ МОЖНО ЗАКРЫТЬ ЗА <span>{{ format(close) }}
              <!-- <font-awesome-icon :icon="['fas', 'ruble-sign']" style="color: #222; font-size: 26px;"/> -->
              </span>!</div>

            <el-card class="box-card">
              <lineRelation
                :str1="block1a"
                :str2="block1b"
                :percent="block1perc"
              ></lineRelation>
            </el-card>

            <el-card class="box-card">
              <div class="box-card-title">ВАШ ДОЛГ БУДЕТ ПОГАШЕН В ТЕЧЕНИЕ 9 - 10 МЕСЯЦЕВ</div>
              <div class="box-card-subtitle">Компания будет ежемесячно платить за вас {{ date }} числа {{ format(sumMonthly) }}</div>
              <lineRelation
                :str1="block2a"
                :str2="block2b"
                :percent="block2perc"
              ></lineRelation>
            </el-card>
            <el-card class="box-card">
              <div class="box-card-title">ИТОГО СУММА ДОГОВОРА {{ format(contractAmount) }}</div>
              <lineRelation
                :str1="block3a"
                :str2="block3b"
                :str3="block3c"
                :percent="block3perc"
              ></lineRelation>
            </el-card>

            <el-card class="box-card">
              <div class="box-card-title">КАК ЭТО РАБОТАЕТ?</div>
              <el-image :src="shema" lazy></el-image>
              <!-- <div class="box-card-wrap">
                <div class="text">Посмотрите короткое видео, в котором мы все объясняем</div>
                <div class="video">
                  <iframe width="100%" height="100%" :tabindex="-1" frameborder="0" :src="urlVideo" allowfullscreen></iframe>
                </div>
              </div> -->

              <div class="box-card-title">ПОСМОТРИТЕ КОРОТКОЕ ВИДЕО, В КОТОРОМ МЫ ВСЕ ОБЪЯСНЯЕМ</div>
              <div class="video">
                <iframe width="100%" height="100%" frameborder="0"
                  :tabindex="-1"
                  :src="urlVideo+'?controls=0'"
                  iv_load_policy="3"
                  disablekb="1"
                  fs="0"
                  allow="accelerometer;
                  autoplay;
                  encrypted-media;
                  gyroscope;
                  picture-in-picture"
                ></iframe>
              </div>
            </el-card>

            <div class="wrapBtnAction">
              <el-button @click="receiveConsultation" class="btnAction" type="">Заключить договор</el-button>
              <el-button @click="receiveConsultation" class="btnAction" type="">Получить консультацию</el-button>
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
      block1a: '',  // строка: "35% заплатите вы X ₽"
      block1b: '',  // строка: "65% заплатит компания Y ₽"
      block1perc: 0,  // число: basePercent
      block2a: '',  // строка: "Z ₽ минимальный ежемесячный платеж"
      block2b: '',  // строка: "W ₽ в счет досрочного погашения долга"
      block2perc: 0,  // число: minPayment * 100 / sumMonthly
      block3a: '',  // строка: "annualService ₽ в счет договора годового обслуживания"
      block3b: '',  // строка: "X ₽ для погашения долга"
      block3c: '',  // строка: "R ₽ офисный сбор"
      block3perc: 0,  // число: annualService * 100 / contractAmount
      contractAmount: 0, // итого сумма договора
      officeFee: 0, // офисный сбор - 1% от кредитв, в рублях
      shema: './assets/img/shema.jpg',
      rubl: ' ₽', // на русской раскладке клавы ввести правый Alt + 8
    }
  },

  methods: {
    format(number){
      return accounting.formatNumber(number) + this.rubl;
      // return accounting.formatMoney(number);
    },
    setFormatSettings(){
      // Settings object that controls default parameters for library methods:
      accounting.settings = {
        currency: {
          symbol : "$", // default currency symbol is '$'
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
      this.block1a = this.basePercent + '% заплатите вы ' + this.format(this.close)
    },
    setBlock1b(){
      // console.log('setBlock1b')
      this.block1b = this.residual + '% заплатит компания ' + this.format(this.close * this.residual / this.basePercent)
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
      this.block2a = this.format(this.minPayment) + ' минимальный ежемесячный платеж'
    },
    setBlock2b(){
      // console.log('setBlock2b')
      this.block2b = this.format(this.debtRepayment) + ' в счет досрочного погашения долга'
    },

    setBlock3a(){
      // console.log('setBlock3a')
      this.block3a = this.format(this.annualService) + ' в счет договора годового обслуживания'
    },
    setBlock3b(){
      // console.log('setBlock3b')
      this.block3b = this.format(this.close) + ' для погашения долга'
    },
    setBlock3с(){
      this.block3c = this.format(this.principalBalance / 100) + ' офисный сбор'
      // console.log('setBlock3с', this.block3c)
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
      this.contractAmount = this.close + this.annualService + this.officeFee
    },

    setBlock1percent(){
      this.block1perc = this.basePercent
    },
    setBlock2percent(){
      this.block2perc = this.minPayment * 100 / this.sumMonthly
    },
    setBlock3percent(){
      this.block3perc = (this.annualService + this.officeFee) * 100 / this.contractAmount
      // console.log('block3perc = ', this.block3perc)
    },
    setOfficeFee(){
      this.officeFee = this.principalBalance / 100
      // console.log('officeFee', this.officeFee)
    },
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
    this.setOfficeFee() // сначала нужно посчитать это число
    this.setContractAmount() // а уже потом - это!!
    this.setBlock3a()
    this.setBlock3b()
    this.setBlock3с()
    this.setBlock3percent()
  }
}
</script>

<style scoped>
  .titleForm span {
    background: #fae465;
    padding: 0px 5px;
    border-radius: .2em;
  }
  .wrapBtnAction button {
    margin: 0 0 20px;
  }
  .box-card-title{
    margin-bottom: 20px;
  }
  .box-card-subtitle{
    font-size: 18px;
    padding: 0 0 20px;
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
    height: 576px;
    width: 100%;
    /* max-width: 250px;
    margin-left: 20px; */
    margin: 40px auto;
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
  /* @media screen and (max-width: 1200px) {

  } */

  /* Планшет */
  @media screen and (max-width: 992px) {
    .video{
      height: 365px;
    }
  }

  /* Мобильник */
  @media screen and (max-width: 543px) {
    .box-card-wrap{
      display: block;
    }
    .box-card-wrap .text{
      width: 100%;
      text-align: center;
    }
    .video{
      height: 187px;
      margin: 0 auto;
    }
    .el-main{
      margin: 54px auto 0
    }
  }
</style>
