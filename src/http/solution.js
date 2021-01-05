

import * as http from './base'

/**
 * 登陆
 * @param {object} data 
 */
const login = (data) => {
  return http.post('/users/login', data)
}


export { login }