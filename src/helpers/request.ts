import axios from 'axios'
import {message} from 'antd'
import { errorList } from '../constants/errorHttp'
// 创建axios实例

let service = axios.create({
  // baseURL: process.env.BASE_API, // api 的 base_url

  timeout: 5000, // 请求超时时间
  headers:{
    // "Content-Type":'application/json',
    // 'Cache-Control': 'no-cache',
    // "authKey" : localStorage.getItem('authkey'),
    // "appType":5,
    // "version":'1.0.01'
  }
});

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error) // for debug
    Promise.reject(error)
  }
);

// response 拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;
    console.log(res)
    if (Number(res.code) !== 0) {
      message.error(errorList.ZERO_CODE)

      if (Number(res.code) === 1002 || Number(res.code) === 1003) {
        message.error(errorList.TOKEN_EXPIRE)
      }
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    message.error(errorList.ZERO_CODE)
    return Promise.reject(error)
  }
)
let get = (url:string,params?:object) =>{
  return axios.get(url, {
    params: params
  })
  .catch(function (error) {
    console.log(error);
  })
  
}

let post = (url:string,data?:object) =>{
  return axios.post(url, data)
  .catch(function (error) {
    console.log(error);
  })
  
}
const request = {
  get,
  post
}
export default request
