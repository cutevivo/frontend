import request from '@/utils/request'

export function getCourses() {
  debugger
  return request({
    url: '/course/all',
    method: 'get',
    params: {
    }
  })
}

export function getChapters(id) {
  return request({
    url: '/course/chapters',
    method: 'get',
    params: {
      courseId: id
    }
  })
}
