import HttpRequest from '@/utils/axios'
import config from '@/config/index'

/**
 * baseUrl 获取url地址
 * @type {string}
 */
export const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

const axios = new HttpRequest(baseUrl)
export default axios
