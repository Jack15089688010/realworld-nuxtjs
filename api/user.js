/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-04 15:09:41
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-08 11:22:41
 */
import { request } from '@/plugins/request'


// 用户登录
export const login = data => {
  return request({
    method: 'POST',
    url: '/api/users/login',
    data
  })
}

// 用户注册
export const register = data => {
  return request({
    method: 'POST',
    url: '/api/users',
    data
  })
}

export const updateUser = data => request("/api/user", {
  method: "PUT",
  data
})