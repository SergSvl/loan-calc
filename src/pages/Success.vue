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
              <div class="titleForm">Ваша заявка отправлена. В ближайшее время с вами свяжется менеджер. А пока вы будете перенаправлены на страницу с более подробной информацией о проекте Finiko.</div>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </transition>
  </el-container>
</template>

<script>
import {Container, Header, Main, Card, Col, Row} from 'element-ui'

export default {
  name: 'app',
  components: {
    'el-container': Container,
    'el-header': Header,
    'el-main': Main,
    'el-card': Card,
    'el-col': Col,
    'el-row': Row
  },

  mounted(){
    setTimeout(() => {
      window.location.href = user_config.redirectURL
    }, user_config.redirectWait)
  },

  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .titleForm{
    font-size: 20px;
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
