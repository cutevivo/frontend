import request from '@/utils/request'

export function fetchNote(id) {
  return request({
    url: '/note',
    method: 'get',
    params: { id }
  })
}

export function fetchNotes(courseId, chapterId) {
  return request({
    url: '/note/list',
    method: 'get',
    params: {
      courseId: courseId,
      chapterId: chapterId
    }
  })
}
