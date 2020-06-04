import Vue from 'vue'
import Vuex from 'vuex'
import state from '../state/state'
import mutations from '../mutations/mutations'
import actions from '../actions/action'

Vue.use(Vuex)

const store =()=>{
  return new Vuex.Store({
    state,
    mutations,
    actions
  })
}

export default store