import  request from '../helpers/request'
export const getUserData =  () =>{
    return request.get("http://api-gateway-dpc-sit.earth-aws-us.xpaas.lenovo.com/api/v1/auth/token/8f439bbc-5831-4482-8294-1286d076df31")
}           
    