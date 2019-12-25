<template>
  <router-view></router-view>
</template>

<script>
import '@babel/polyfill'
// import {mapGetters, mapMutations} from 'vuex'
// import PortalBtn from './components/Form';
// Настройки темы element-ui
// import {
//   Container, Main, Header, Col, Row,
// //   Form, FormItem, Button, RadioGroup, Input, Select, Radio, CheckboxGroup,
// // CheckboxButton, Option, DatePicker, TimePicker, Switch, RadioButton,
// // Dialog
// } from 'element-ui';
// import lang from 'element-ui/lib/locale/lang/en'
// import lang from 'element-ui/lib/locale/lang/ru-RU'
// import locale from 'element-ui/lib/locale'
// locale.use(lang)

export default {
  name: 'app',
  components: {
    // Header,
    // 'el-container': Container,
    // 'el-header': Header,
    // 'el-main': Main,
    // 'el-col': Col,
    // 'el-row': Row,

    // 'el-form': Form,
    // 'el-form-item': FormItem,
    // 'el-button': Button,
    // 'el-radio-group': RadioGroup,
    // 'el-input': Input,
    // 'el-select': Select,
    // 'el-radio': Radio,
    // 'el-checkbox-group': CheckboxGroup,
    // 'el-checkbox-button': CheckboxButton,
    // 'el-option': Option,
    // 'el-date-picker': DatePicker,
    // 'el-time-picker': TimePicker,
    // 'el-switch': Switch,
    // 'el-radio-button': RadioButton,
    // 'el-dialog': Dialog
  },

  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
@font-face {
  font-family: 'Gilroy-Bold';
  src: local('Gilroy Bold'), local('Gilroy-Bold'),
    url('/assets/fonts/Gilroy/Gilroy-Bold.ttf') format('truetype');
  font-weight: 100;
  font-style: normal;
}
@font-face {
  font-family: 'Gilroy-SemiBold';
  src: local('Gilroy SemiBold'), local('Gilroy-SemiBold'),
    url('/assets/fonts/Gilroy/Gilroy-SemiBold.ttf') format('truetype');
  font-weight: 100;
  font-style: normal;
}
body{
  overflow: auto !important;
}
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
} */

</style>
