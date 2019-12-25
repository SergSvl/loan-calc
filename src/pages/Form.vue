<template>
  <el-container>
    <el-header class="header"></el-header>
    <el-main>
      <el-row>
        <el-col :span="24">
          <h1>ДЛЯ ТОГО ЧТОБЫ РАССЧИТАТЬ СУММУ ЗАКРЫТИЯ КРЕДИТА, ПОЖАЛУЙСТА, ЗАПОЛНИТЕ ФОРМУ:</h1>
          <el-card class="box-card">
            <div class="">Создание новой записи</div>
          </el-card>
          <el-card class="box-card">
            <div class="">Создание новой записи</div>
          </el-card>
          <el-card class="box-card">
            <div class="">Создание новой записи</div>
          </el-card>
          <el-card class="box-card">
            <div class="">Создание новой записи</div>
          </el-card>
          <el-button type="success">Рассчитать</el-button>
          </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import {Header, Card, Col, Row, Button,
//   Form, FormItem, Button, RadioGroup, Input, Select, Radio, CheckboxGroup,
// CheckboxButton, Option, DatePicker, TimePicker, Switch, RadioButton,
// Dialog
} from 'element-ui';

export default {
  name: 'app',
  components: {
    'el-header': Header,
    'el-card': Card,
    'el-col': Col,
    'el-row': Row,
    'el-button': Button,

    // 'el-form': Form,
    // 'el-form-item': FormItem,
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
}
</script>


<style scoped>
  .header{
    width: 100%;
    /* height: 50px; */
    background-color: yellow;
  }
</style>
