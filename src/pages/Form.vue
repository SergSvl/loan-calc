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
            <div class="titleForm">ДЛЯ ТОГО ЧТОБЫ РАССЧИТАТЬ СУММУ ЗАКРЫТИЯ КРЕДИТА, ПОЖАЛУЙСТА, ЗАПОЛНИТЕ ФОРМУ:</div>

            <el-card class="box-card">
              <div class="box-card-title">Выберите один вид кредита, который вы хотите закрыть</div>
              <div style="margin-top: 20px">
                <el-radio-group v-model="typeCredit"
                  fill="#F7DC8A" class="radioGroupVertical">
                  <el-radio label="Ипотека" border>Ипотека</el-radio>
                  <el-radio label="Авто кредит" border>Авто кредит</el-radio>
                  <el-radio label="Потребительский кредит" border>Потребительский кредит</el-radio>
                  <el-radio label="Товарный кредит" border>Товарный кредит</el-radio>
                  <el-radio label="Другой вид долга" border>Другой вид долга</el-radio>
                </el-radio-group>
              </div>
            </el-card>

            <el-card class="box-card">

              <div class="box-card-wrap">
                <span class="box-card-input-title">Остаток основного долга</span>
                <el-input class="box-card-input"
                  placeholder="Остаток основного долга"
                  v-model="principalBalance"
                  clearable>
                </el-input>
              </div>

              <div class="box-card-wrap">
                <span class="box-card-input-title">Размер ежемесячного платежа</span>
                <el-input class="box-card-input"
                  placeholder="Размер ежемесячного платежа"
                  v-model="monthlyPayment"
                  clearable>
                </el-input>
              </div>

              <div class="box-card-wrap">
                <span class="box-card-input-title">Дата ежемесячного платежа</span>
                <el-select v-model="dateMonthlyPayment" placeholder="Выберите число">
                  <el-option
                    v-for="item in 31"
                    :key="item"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </div>
            </el-card>

            <el-card class="box-card">
              <div class="box-card-title">У вас есть просрочка по платежам?</div>
              <div style="margin-top: 20px">
                <el-radio-group v-model="latePayments" fill="#F7DC8A">
                  <el-radio label="Да" border>Да</el-radio>
                  <el-radio label="Нет" border>Нет</el-radio>
                  <el-radio label="Не знаю" border>Не знаю</el-radio>
                </el-radio-group>
              </div>
            </el-card>

            <el-card class="box-card" v-if="latePayments == 'Да'">
              <div class="box-card-title">Был ли у вас суд?</div>
              <div style="margin-top: 20px">
                <el-radio-group v-model="wasThereTrial" fill="#F7DC8A">
                  <el-radio label="Да" border>Да</el-radio>
                  <el-radio label="Нет" border>Нет</el-radio>
                  <el-radio label="Не знаю" border>Не знаю</el-radio>
                </el-radio-group>
              </div>
            </el-card>

            <el-card class="box-card" v-if="wasThereTrial == 'Да'">
              <div class="box-card-title">Где находится ваше дело?</div>
              <div style="margin-top: 20px">
                <el-radio-group v-model="whereCase" fill="#F7DC8A">
                  <el-radio label="В суде" border>В суде</el-radio>
                  <el-radio label="У приставов" border>У приставов</el-radio>
                  <el-radio label="Не знаю" border>Не знаю</el-radio>
                </el-radio-group>
              </div>
            </el-card>

            <el-card class="box-card">
              <div class="box-card-title">Есть ли у вас другие кредиты?</div>
              <div style="margin-top: 20px">
                <el-radio-group v-model="otherLoan" fill="#F7DC8A">
                  <el-radio label="Да" border>Да</el-radio>
                  <el-radio label="Нет" border>Нет</el-radio>
                </el-radio-group>
              </div>
            </el-card>

            <div class="wrapBtnAction">
              <el-button @click="onOffer" class="btnAction" type="">Рассчитать</el-button>
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

export default {
  name: 'app',
  components: {
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
    'el-option': Option
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'typeCredit',
      'principalBalance',
      'monthlyPayment',
      'dateMonthlyPayment',
      'latePayments',
      'otherLoan'
    ]),
    typeCredit: {
      get(){
        return this.$store.state.typeCredit;
      },
      set(val){
        this.$store.commit("setTypeCredit", val);
      }
    },
    principalBalance: {
      get(){
        return this.$store.state.principalBalance;
      },
      set(val){
        this.$store.commit("setPrincipalBalance", val);
      }
    },
    monthlyPayment: {
      get(){
        return this.$store.state.monthlyPayment;
      },
      set(val){
        this.$store.commit("setMonthlyPayment", val);
      }
    },
    dateMonthlyPayment: {
      get(){
        return this.$store.state.dateMonthlyPayment;
      },
      set(val){
        this.$store.commit("setDateMonthlyPayment", val);
      }
    },
    latePayments: {
      get(){
        return this.$store.state.latePayments;
      },
      set(val){
        this.$store.commit("setLatePayments", val);
      }
    },
    wasThereTrial: {
      get(){
        return this.$store.state.wasThereTrial;
      },
      set(val){
        this.$store.commit("setWasThereTrial", val);
      }
    },
    whereCase: {
      get(){
        return this.$store.state.whereCase;
      },
      set(val){
        this.$store.commit("setWhereCase", val);
      }
    },
    otherLoan: {
      get(){
        return this.$store.state.otherLoan;
      },
      set(val){
        this.$store.commit("setOtherLoan", val);
      }
    },
  },
  methods: {
    onOffer(){
      if (this.typeCredit != '' && this.principalBalance != '' && this.monthlyPayment != ''
          && this.dateMonthlyPayment != '' && this.latePayments != '' && this.otherLoan != ''){
        this.$router.push({name:'offer'})
        document.documentElement.scrollIntoView(true);
      } else {
        this.notReady()
      }
    },
    notReady() {
      this.$notify.warning({
        title: 'Внимание',
        message: 'Нужно заполнить все поля'
      });
    },
  }
}
</script>

<style scoped>
  .el-radio {
    margin: 5px 10px;
  }
  .el-radio__label{
    font-size: 16px;
  }
  .box-card-wrap{
    margin: 0 auto;
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
  /* @media screen and (max-width: 992px) {
  } */

  /* Мобильник */
  /* @media screen and (max-width: 543px) {
  } */
</style>
