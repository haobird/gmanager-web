import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/system/loo/page',
    method: 'post',
    data
  })
}

export function getDetail(id) {
  return request({
    url: `/system/loo/get/${id}`,
    method: 'get'
  })
}

