import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/system/option/page',
    method: 'post',
    data
  })
}

export function getDetail(id) {
  return request({
    url: `/system/option/get/${id}`,
    method: 'get'
  })
}

export function getType() {
  return request({
    url: '/system/option/type',
    method: 'get'
  })
}

export function save(data) {
  return request({
    url: '/system/option/save',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: `/system/option/delete/${id}`,
    method: 'post'
  })
}

