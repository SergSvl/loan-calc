 import Vue from 'vue';
 import Vuex from 'vuex';

 Vue.use(Vuex);

 export const store = new Vuex.Store({
    state: {
      homeBtn: false,
      logoutBtn: false,
      startPage: '',
    },
    getters: {
      homeBtn(state){
        return state.homeBtn;
      },
      logoutBtn(state){
        return state.logoutBtn;
      },
    },
    mutations: {
      btnHomeOn(state){
        state.homeBtn = true;
      },
      btnHomeOff(state){
        state.homeBtn = false;
      },
      btnLogoutOn(state){
        state.logoutBtn = true;
      },
      btnLogoutOff(state){
        state.logoutBtn = false;
      },
    },
    actions: {

    },
    strict: process.env.NODE_ENV !== 'production',
    env: process.env,
    base: process.env.BASE_URL,
    process: process,
  });
