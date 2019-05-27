import request from '@/utils/request'

export function getCourses() {
  return request({
    url: '/course/all',
    method: 'get',
    params: {
    }
  })
}

export function fetchCourse(id) {
  return request({
    url: '/course/info',
    method: 'get',
    params: {
      courseId: id
    }
  })
}
