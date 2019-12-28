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
              <div class="titleForm">Страница не найдена</div>

              <el-button type="primary" class="btnSend" @click="toHome">На главную</el-button>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </transition>
  </el-container>
</template>

<script>
import {Container, Header, Main, Card, Col, Row, Button} from 'element-ui'
import {store} from '../store/'
export default {
  name: 'app',
  components: {
    'el-container': Container,
    'el-header': Header,
    'el-main': Main,
    'el-card': Card,
    'el-col': Col,
    'el-row': Row,
    'el-button': Button
  },
  data(){
    return {

    }
  },
  methods: {
    toHome(){
      this.$router.push({name:'home'})
    }
  }
}
</script>

<style scoped>
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
    .titleForm{
      font-size: 16px;
    }
    .box-card > div {
      padding: 10px;
    }
  }
</style>
