import request from '@/utils/request'

export function fetchNote(id) {
  return request({
    url: '/note',
    method: 'get',
    params: { id }
  })
}
