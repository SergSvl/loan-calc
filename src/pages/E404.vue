<template>
  <el-container>
    <el-header class="header" height="auto">
      <div class="logoHeader">
        <div class="wrapLogo">
          <div class="logo"></div>
        </div>
      </div>
        <!-- <el-image :src="logoPc" lazy></el-image> -->
    </el-header>
    <transition name="fade" mode="out-in" appear>
      <el-main>
        <el-row>
          <el-col>
            <el-card class="box-card">
              <div class="titleForm">Страница не найдена</div>
              <el-button type="" class="btnAction" @click="toHome">На главную</el-button>
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
  methods: {
    toHome(){
      this.$router.push({name:'home'})
    }
  }
}
</script>

<style scoped>
  .titleForm{
    font-size: 20px;
  }

  /* Планшет */
  @media screen and (max-width: 992px) {
    .titleForm{
      text-align: center;
    }
  }

  /* Мобильник */
  @media screen and (max-width: 543px) {
    .titleForm{
      font-size: 16px;
    }
    .box-card > div {
      padding: 10px;
    }
  }
</style>
