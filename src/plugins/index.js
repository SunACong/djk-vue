/*
 * @Description:
 * @Author: 孙少聪
 * @Date: 2023-01-05 21:25:37
 * @LastEditTime: 2023-01-05 21:26:01
 * @LastEditors: 孙少聪
 */
import modal from './modal'

export default {
  install(Vue) {
    // 模态框对象
    Vue.prototype.$modal = modal
  }
}
