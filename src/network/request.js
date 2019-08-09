import axios from 'axios'

export function request (config) {
  // 创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  /*  // 请求拦截：
  instance.interceptors.request.use(config => {
    // 拦截成功，最后必须把成功后的代码返回。
    return config
  }, err => {
    // 拦截失败
  })

  // 响应拦截：
  instance.interceptors.response.use(res => {
    // 把处理后的结果返回
    return res
  }, err => {
    // 连接失败
  }) */

  // 返回：
  return instance(config)
}
