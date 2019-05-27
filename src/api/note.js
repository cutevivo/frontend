import request from '@/utils/request'

export function fetchNote(id) {
  return request({
    url: '/note',
    method: 'get',
    params: { id }
  })
}

export function fetchMyNotes(id) {
  return request({
    url: '/user/written_notes',
    method: 'get',
    params: { id }
  })
}

export function fetchUserNotes(id, api) {
  return request({
    url: `/user/${api}`,
    method: 'get',
    params: {
      userId: id
    }
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

export function postNote(form) {
  return request({
    url: '/note/add',
    method: 'post',
    data: {
      header: form.title,
      content: JSON.stringify(form.content),
      comment: JSON.stringify(form.content_short || ''),
      score: form.importance,
      courseId: form.courseId,
      chapterId: form.chapterId,
      userId: form.userId
    }
  })
}
