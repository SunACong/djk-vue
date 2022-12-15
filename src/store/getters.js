/*
 * @Description:
 * @Author: 孙少聪
 * @Date: 2022-09-26 14:34:23
 * @LastEditTime: 2022-12-12 09:38:02
 * @LastEditors: 孙少聪
 */
const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  name: state => state.user.name
}
export default getters
