import Layout from '@/layout'

const userCourseRouter = {
  path: '/course',
  component: Layout,
  redirect: '/course/list',
  name: 'UserCourse',
  meta: {
    icon: 'shu',
    roles: ['user']
  },
  children: [
    {
      path: 'list',
      name: 'UserCourseList',
      component: () => import('@/views/user/course/list'),
      meta: {
        title: '我的课程',
        icon: 'shu'
      }
    },
    {
      path: 'info/:id(\\d+)',
      name: 'CourseInfo',
      component: () => import('@/views/user/course/info'),
      meta: {
        title: '课程信息',
        noCache: true,
        activeMenu: '/course/list'
      },
      hidden: true
    }
  ]
}

export default userCourseRouter
