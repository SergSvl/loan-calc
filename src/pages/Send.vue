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
            <el-card class="box-card">
              <div class="titleForm">ПОЖАЛУЙСТА, УКАЖИТЕ ВАШИ КОНТАКТНЫЕ ДАННЫЕ, ЧТОБЫ МЫ МОГЛИ С ВАМИ СВЯЗАТЬСЯ:</div>

              <el-form id="mailForm1"
                v-responsive="['hidden-all','xl','lg','md','sm']" width="1170px"
                :validate-on-rule-change="true"
                :model="sendForm"
                :rules="rules"
                ref="sendForm"
                label-width="auto"
                style="width: 50%"
                class="sendForm"
                label-position="left"
                :status-icon="true"
                :inline-message="true"
              >
                <el-form-item label="Ваше имя" prop="name">
                  <el-input v-model="sendForm.name"></el-input>
                </el-form-item>
                <el-form-item label="Телефон" prop="phone">
                  <el-input v-model="sendForm.phone"></el-input>
                </el-form-item>
              </el-form>

              <el-form id="mailForm2"
                v-responsive="['hidden-all','xs']" width="320px"
                :model="sendForm"
                :rules="rules"
                ref="sendForm"
                label-width="auto"
                class="sendForm"
                label-position="top"
                :status-icon="true"
                :inline-message="true"
              >
                <el-form-item label="Ваше имя" prop="name">
                  <el-input v-model="sendForm.name"></el-input>
                </el-form-item>
                <el-form-item label="Телефон" prop="phone">
                  <el-input v-model="sendForm.phone"></el-input>
                </el-form-item>
              </el-form>
              <el-button for="mailForm1, mailForm2" type="primary" class="btnSend" @click="submit('sendForm')">Отправить</el-button>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </transition>
  </el-container>
</template>

<script>
import {Container, Header, Main, Card, Col, Row, Button, Input, Form, FormItem} from 'element-ui'
import {store} from '../store/'
import {mapGetters} from 'vuex'
import {send} from '../api'

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
    'el-input': Input,
    'el-form-item': FormItem,
    'el-form': Form
  },

  data () {
    return {
      sendForm: {
        name: '',
        phone: ''
      },
      rules: {
        name: [
          { required: false, message: 'Укажите Ваше имя' },
        ],
        phone: [
          { required: true, message: 'Укажите Ваш телефон' },
        ],
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

  methods: {
    submit(formName){
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          let data = {
            zaymy: JSON.stringify({
              name: this.sendForm.name,
              phone: this.sendForm.phone,
              typeCredit: this.typeCredit,
              principalBalance: this.principalBalance,
              monthlyPayment: this.monthlyPayment,
              dateMonthlyPayment: this.dateMonthlyPayment,
              latePayments: this.latePayments,
              wasThereTrial: this.wasThereTrial,
              whereCase: this.whereCase,
              otherLoan: this.otherLoan
            })
          }
          try{
            let res = await send(data);
            // console.log('Ответ: ', res);
            if (res.status){
              this.mailSuccess(res.result)
              this.$router.push({name:'home'})
            } else {
              this.mailError(res.error);
            }
          } catch(err){
            console.log('Ошибка: ', err);
            if (err){
              this.mailError();
            } else {
              console.log('Не Ошибка?!');
            }
          }
        } else {
          this.validatetError();
          return false;
        }
      });
    },
    validatetError() {
      this.$notify.error({
        title: 'Ошибка',
        message: 'Укажите Ваш телефон'
      });
    },
    mailError(error) {
      this.$notify.error({
        title: 'Ошибка',
        message: error
      });
    },
    mailSuccess(result) {
      this.$notify({
        title: 'Успешно',
        message: result,
        type: 'success'
      });
    },
  },
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
    font-size: 20px;
    font-weight: 100;
    font-family: Gilroy-SemiBold;
    margin: 25px 0;
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
  .wrapBtnSend{
    text-align: center;
    margin: 40px 0;
  }
  .btnSend{
    background-color: #f7dc8a;
    font-size: 18px;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    border: 1px solid #DCDFE6;
    color: #606266;
  }
  .btnSend:hover {
    color: #fff; /*#409EFF;*/
    border-color: #c6e2ff;
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
    display: flex;
  }
  .el-radio {
    margin: 5px 10px;
  }
  .el-radio__label{
    font-size: 16px;
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
    .titleForm{
      text-align: center;
    }
    .el-form{
      width: auto;
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
    .box-card > div {
      padding: 10px;
    }
    .radioGroupVertical{
      width: auto;
    }
    .titleForm{
      font-size: 16px;
    }
    .sendForm > div > label {
      float: none;
    }
  }
</style>
