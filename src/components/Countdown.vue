<template>
  <div class="digWrap">
    <transition name="fade">
      <div class="digit">
        {{ tick }}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    seconds: {
      type: Number,
      default: 5
    },
    url: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      tick: this.seconds,
    }
  },

  mounted(){
    this.start()
  },

  methods: {
    start(){
      setTimeout(() => {
        if (this.tick > 0){
          this.tick--
          this.start()
          // console.log('seconds: ', this.tick);
        } else {
          window.location.href = this.url
        }
      }, 1000)
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .8s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
.digWrap{
  margin: 0 auto;
}
.digit {
  color: #f7dc8a;
  font-size: 80px;
  padding: 20px;
}

/* Мобильник */
@media screen and (max-width: 543px) {

}
</style>
