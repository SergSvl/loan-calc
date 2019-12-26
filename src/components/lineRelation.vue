<template>
  <div class="barWrap">
    <div class="lineBar">
      <div class="lineBar-value" :style="width"></div>
    </div>
    <div class="pay-percent">
        <p class="percentWrap">
          <font-awesome-icon
            :icon="['fas', 'circle']"
            :mask="['far', '']"
            style="color: #8BC34A; font-size: 25px;"
          />
          &nbsp; {{ str1 }}
        </p>
        <p class="percentWrap">
          <font-awesome-icon far icon="circle"
            style="color: #03a9f4; font-size: 25px;"
          />
          &nbsp; {{ str2 }}
        </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    str1: {
      type: String,
      default: 0
    },
    str2: {
      type: String,
      default: 0
    },
    percent: {
      type: Number,
      default: 0
    }
  },
  /* метод data() вызывыется между хуками beforeCreated() и created() */
  data () {
    return {
      width: 'width:'+this.percent+'%',
    }
  },

  methods: {
    goBack() {

    },
  }
}
</script>

<style scoped>
.barWrap{
  margin: 0 auto;
}
.lineBar{
  display: flex;
  width: 90%;
  max-width: 400px;
  height: 25px;
  overflow: hidden;
  margin: 0px auto 30px;
}
.lineBar:after{
  display: block;
  content: '';
  border-radius: 0 10px 10px 0;
  background-color: #03a9f4;
  flex: 1;
}
.lineBar-value{
  background-color: #8BC34A;
  border-radius: 10px 0 0 10px;
  height: 100%;
  margin: 0 auto;
}
.pay-percent{
  max-width: 400px;
  text-align: left;
  /* width: 50%; */
  margin: 0 auto;
  left: 60px;
  position: relative;
}
.text-main {
  color: #fae465;
}
.percentWrap{
  margin: 20px 0;
}

/* Мобильник */
  @media screen and (max-width: 543px) {
    .pay-percent{
    max-width: 400px;
    text-align: left;
    margin: 0 auto;
    left: 0px;
    position: relative;
  }
  .lineBar{
    width: 100%;
  }
  }
</style>
