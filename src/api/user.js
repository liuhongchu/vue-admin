import axios from '@/utils/api.request'
/**
 * 用户登录接口
 * @param userName
 * @param password
 * @param captcha
 * @returns {ClientRequest | ClientHttp2Stream | * | never | AxiosPromise<any>}
 */
export const login = ({ userName, password, captcha }) => {
  const data = {
    userName,
    password,
    captcha
  }
  return axios.request({
    url: 'login',
    data,
    method: 'post'
  })
}
/**
 * 获取用户基本信息接口
 * @param token
 * @param name
 * @returns {ClientRequest | ClientHttp2Stream | * | never | AxiosPromise<any>}
 */
export const getUserInfo = (token, name) => {
  return axios.request({
    url: '/sys/user/findByName',
    params: {
      name: name
    },
    headers: {
      token: token
    },
    method: 'get'
  })
}

/**
 * 获取左边菜单
 * @param token
 * @returns {*}
 */
export const getMenuTree = (token, name) => {
  return axios.request({
    url: '/sys/menu/findNavTree',
    params: {
      userName: name
    },
    headers: {
      token: token
    },
    method: 'get'
  })
}

/**
 * 注销或者退出系统接口
 * @param token
 * @returns {ClientRequest | ClientHttp2Stream | * | never | AxiosPromise<any>}
 */
export const logout = (token) => {
  return axios.request({
    url: 'logout',
    method: 'post'
  })
}

