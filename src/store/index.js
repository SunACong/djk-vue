/*
 * @Description:
 * @Author: 孙少聪
 * @Date: 2022-09-19 09:55:35
 * @LastEditTime: 2022-11-25 15:23:46
 * @LastEditors: 孙少聪
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings
  },
  getters
})

export default store
