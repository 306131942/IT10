import axios from 'axios'
import { Message } from 'element-ui'

axios.defaults.withCredentials = true
// 配置axios 拦截器
// 添加请求拦截器
axios.interceptors.request.use((config) => {
  // 在发送请求之前做某事
  return config
}, (error) => {
  // 请求错误时做些事
  Message({
    message: '服务器异常 ' + error.message,
    type: 'error'
  })
  return Promise.reject(error)
})
// 添加响应拦截器
axios.interceptors.response.use((response) => {
  // 对响应数据做些事
  const result = response.data
  let err
  if (!result) {
    Message({
      message: '数据异常！',
      type: 'error'
    })
    err = new Error({message: '数据异常！'})
    return Promise.reject(err)
  }
  if (result.code === '200') {
    // 成功
    return result.data
  } else if (result.code === '100') {
    // 失败
    Message({
      message: result.message,
      type: 'error'
    })
    err = new Error({message: result.message})
    return Promise.reject(err.message)
  } else if (result.retCode === '400') {
    Message({
      message: result.message,
      type: 'error'
    })
    err = new Error({message: result.message})
    window.location.href = result.data
    // return Promise.reject({message: '未登录'})
  } else {
    Message({
      message: result.message,
      type: 'error'
    })
    err = new Error({message: result.message})
    return Promise.reject(err.message)
  }
  err = new Error({message: '未知状态！'})
  return Promise.reject(err.message)
}, (error) => {
  // 请求错误时做些事
  Message({
    message: error.message,
    type: 'error'
  })
  return Promise.reject(error.message)
})
