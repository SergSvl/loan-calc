 import Vue from 'vue';
 import Vuex from 'vuex';

 Vue.use(Vuex);

 export const store = new Vuex.Store({
    state: {
      typeCredit: '',
      principalBalance: 100000,
      monthlyPayment: 1000,
      dateMonthlyPayment: '',
      latePayments: '',
      wasThereTrial: '',
      whereCase: '',
      otherLoan: '',
    },
    getters: {
      typeCredit(state){
        return state.typeCredit;
      },
      principalBalance(state){
        return state.principalBalance;
      },
      monthlyPayment(state){
        return state.monthlyPayment;
      },
      dateMonthlyPayment(state){
        return state.dateMonthlyPayment;
      },
      latePayments(state){
        return state.latePayments;
      },
      wasThereTrial(state){
        return state.wasThereTrial;
      },
      whereCase(state){
        return state.whereCase;
      },
      otherLoan(state){
        return state.otherLoan;
      },
    },
    mutations: {
      setTypeCredit(state, val){
        state.typeCredit = val;
      },
      setPrincipalBalance(state, val){
        state.principalBalance = val;
      },
      setMonthlyPayment(state, val){
        state.monthlyPayment = val;
      },
      setDateMonthlyPayment(state, val){
        state.dateMonthlyPayment = val;
      },
      setLatePayments(state, val){
        state.latePayments = val;
      },
      setWasThereTrial(state, val){
        state.wasThereTrial = val;
      },
      setWhereCase(state, val){
        state.whereCase = val;
      },
      setOtherLoan(state, val){
        state.otherLoan = val;
      },
    },
    actions: {
      // setAllParams(store, data){
      //   console.log('data = ', data)
      //   store.commit('setTypeCredit', data.aTypeCredit);
      //   store.commit('setPrincipalBalance', data.aMonthlyPayment);
      //   store.commit('setMonthlyPayment', data.aMonthlyPayment);
      //   store.commit('setDateMonthlyPayment', data.aDateMonthlyPayment);
      //   store.commit('setLatePayments', data.aLatePayments);
      //   store.commit('setWasThereTrial', data.aWasThereTrial);
      //   store.commit('setWhereCase', data.aWhereCase);
      //   store.commit('setOtherLoan', data.aOtherLoan);
      // }
    },
    strict: process.env.NODE_ENV !== 'production',
  });
