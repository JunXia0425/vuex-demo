import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state){
      state.count++
    },
    decrement(state, payload){
      state.count-=payload.amount
    }
  },
  actions: {
    // asyncIncre(context){
    //   context.commit('increment')
    // }
    //es6解构
    asyncIncre({commit}){
      // 两秒后提交
      setTimeout(()=>commit('increment'),2000)
    }
  },
  modules: {
  }
})
