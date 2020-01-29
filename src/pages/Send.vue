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
                  <el-input v-model="sendForm.name"
                    ref="inpName"
                    @input="onInput"
                    @blur="onInput"
                  ></el-input>
                </el-form-item>
                <el-form-item label="Телефон" prop="phone">
                  <el-input v-model="sendForm.phone"
                    ref="inpPhone"
                    @input="onInput"
                    @blur="onInput"
                  ></el-input>
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
              <el-button for="mailForm1, mailForm2" type="" class="btnAction" @click="submit('sendForm')">Отправить</el-button>
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
import {sendMail, sendTelegram} from '../api'

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
      },
      infoNotify: [],
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
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let data = {
            zaymy: JSON.stringify({
              id: user_config.subFolder,
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
            /*
              mail   telegram
                1       1
                1       0
                0       1
                0       0
            */
            if (user_config.sendMail && user_config.sendTelegram){
              this.sendToMail(data, false) // не редиректить
              this.sendToTelegram(data)
            } else if (user_config.sendMail){
              this.sendToMail(data, true) // редиректить
            } else if (user_config.sendTelegram){
              this.sendToTelegram(data)
            } else {
              this.sendError("Не выбран ни один способ отправки сообщения.");
            }
          } catch(err){
            console.log('Ошибка: ', err);
            if (err){
              this.sendError();
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
    async sendToMail(data, redirectNow){
      let res = await sendMail(data);
      if (res.status){
        this.sendSuccess(res.result)
        if (redirectNow) this.$router.push({name:'success'})
        // else setTimeout(() => {
        //   this.sendInfo('Отправляется сообщение в Телеграм...', 0) // не закрывать сообщение
        // }, 50)
      } else {
        this.sendError(res.error);
      }
    },
    sendToTelegram(data){
      let telegram = user_config.telegram
      for (let i=0; i < telegram.length; i++){
        data.zaymyTelegram = JSON.stringify({
          telegram_token: telegram[i].telegram_token,
          telegram_chat_id: telegram[i].telegram_chat_id
        })
        // console.log('i: ', i);
        // console.log('telegram[i]: ', telegram[i]);
        // console.log('data: ', data);
        this.sendTelegram(data)
      }
    },
    async sendTelegram(data){
      this.sendInfo('Отправляется сообщение в Телеграм...', 0) // 0 - значит не закрывать сообщение
      let res = await sendTelegram(data);
      // console.log('sendTelegram: ', res);
      if (res.status){
        // setTimeout(() => {
          this.sendSuccess("Сообщение отправлено", true) // true значит, что сообщение можно закрывать
        // }, 20)
        this.$router.push({name:'success'}) // redirect
      } else {
        this.sendError(res.error);
      }
    },
    validatetError() {
      this.$notify.error({
        title: 'Ошибка',
        message: 'Укажите Ваш телефон'
      });
    },
    sendError(error) {
      // console.log('Mail error: ', error);
      this.$notify.error({
        title: 'Ошибка',
        message: error ? '<div style="text-align:left">' + error + '</div>' : 'Ошибка на почтовом сервере',
        dangerouslyUseHTMLString: true,
        duration: 0
      });
    },
    sendSuccess(result, closeNotify) {
      closeNotify = closeNotify || false
      if (this.infoNotify.length > 0 && closeNotify){
        this.infoNotify.pop().close() // закрываем висящее окно с инфой при послуплении сообщения об успехе
      }
      this.$notify({
        title: 'Успешно',
        message: '<div style="text-align:left">' + result + '</div>',
        dangerouslyUseHTMLString: true,
        type: 'success'
      });
    },
    sendInfo(msg, timer) {
      let time
      if (timer == 0) time = 0
      else time = 5000
      // складываем сообщения в массив, чтобы потом все их закрыть
      this.infoNotify.push(
        this.$notify.info({
          title: 'Информация',
          message: '<div style="text-align:left">'+msg+'</div>',
          dangerouslyUseHTMLString: true,
          duration: time
        })
      );
      // console.log('infoNotify: ', this.infoNotify);
    },

    onInput(){
      let color = '#08f308'
      // console.log('inpName', this.$refs["inpName"])
      // console.log('inpName', this.$refs["inpName"].$el)
      // console.log('inpPhone', this.$refs["inpPhone"].$el)
      let name = this.$refs["inpName"].value || ''
      let phone = this.$refs["inpPhone"].value || ''
      setTimeout(() => {
        if (name) this.$refs["inpName"].$el.querySelector('.el-input__suffix').style.color = color
        if (phone) this.$refs["inpPhone"].$el.querySelector('.el-input__suffix').style.color = color
      }, 50)
    }
  },
}
</script>

<style scoped>
.titleForm{
  font-size: 20px;
}
/* .btnAction{
} */
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
/* @media screen and (max-width: 1200px) {

} */

/* Планшет */
@media screen and (max-width: 992px) {
.titleForm{
  text-align: center;
}
.el-form{
  width: auto;
}
}

/* Мобильник */
@media screen and (max-width: 543px) {
  .box-card > div {
    padding: 10px;
  }
  .titleForm{
    font-size: 16px;
  }
  .sendForm > div > label {
    float: none;
  }
}
</style>
