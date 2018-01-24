import axios from 'axios'

axios.interceptors.request.use(config => {
  // console.log('request interceptor 1 invoked')
  config.params = Object.assign({}, config.params, {t: Date.now()})
  return config
}, error => {
  // console.log('request interceptor 2 invoked')
  return Promise.reject(error)
})

axios.interceptors.response.use(res => {
  /*if (!res.data.status || res.data.status !== 1) {
    console.log('response interceptor 1 invoked')
  }*/

  if (res && res.data) {
    res.data.origin = res
    return res.data
  } else {
    return {
      status: 0,
      origin: res
    }
  }
}, error => {
  // console.log('response interceptor 2 invoked')
  return Promise.reject(error)
})

export default axios