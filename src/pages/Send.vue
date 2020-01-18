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
            let res = await send(data);
            // console.log('Ответ: ', res);
            if (res.status){
              this.mailSuccess(res.result)
              this.$router.push({name:'success'})
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
      // console.log('Mail error: ', error);
      this.$notify.error({
        title: 'Ошибка',
        message: error ? error : 'Ошибка на почтовом сервере'
      });
    },
    mailSuccess(result) {
      this.$notify({
        title: 'Успешно',
        message: result,
        type: 'success'
      });
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
