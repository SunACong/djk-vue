/*
 * @Description:
 * @Author: 孙少聪
 * @Date: 2022-09-19 09:55:35
 * @LastEditTime: 2023-01-02 10:50:59
 * @LastEditors: 孙少聪
 */
import axios from 'axios'
import { Message } from 'element-ui'

// create an axios instance
const service = axios.create({
  baseURL: '/modelApi', // url = base url + request url
  // baseURL: 'http://localhost:9528/modelApi', // url = base url + request url
  // baseURL: 'https://www.hengzhong.xyz:9528/modelApi', // url = base url + request url
  timeout: 60000 // request timeout
})

/**
 * @description:  请求拦截器
 * @return {*}
 * @Author: 孙少聪
 * @Date: 2022-11-25 14:59:13
 * @LastEditTime: Do not edit
 * @LastEditors: 孙少聪
 */
service.interceptors.request.use(
/*  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  } */
)

/**
 * @description: 响应拦截器
 * @return {*}
 * @Author: 孙少聪
 * @Date: 2022-11-25 14:59:37
 * @LastEditors: 孙少聪
 */
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 200) {
      Message({
        message: response.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(new Error(res.message || '响应错误'))
    } else {
      return res
    }
    // return res
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
