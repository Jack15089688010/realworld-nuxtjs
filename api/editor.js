/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-05-06 23:39:13
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-06 23:39:23
 */
import {request} from '@/plugins/request'

// 发表文章
export const createArticle = data => {
  return request({
    method: 'POST',
    url: '/api/articles',
    data
  })
}
