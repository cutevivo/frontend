/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const manageRouter = {
  path: '/manage',
  component: Layout,
  redirect: '/manage/course',
  name: 'Manage',
  meta: {
    title: '课程管理',
    icon: 'manage',
    roles: ['admin']
  },
  children: [
    {
      path: 'create',
      component: () => import('@/views/manage/course/create'),
      name: 'CreateCourse',
      meta: {
        title: '创建课程',
        icon: 'edit'
      }
    },
    {
      path: 'course',
      component: () => import('@/views/manage/course/list'),
      name: 'Course',
      meta: {
        title: '所有课程',
        icon: 'manage'
      }
    },
    {
      path: 'edit/:id(\\d+)',
      component: () => import('@/views/manage/course/edit'),
      name: 'EditCourse',
      meta: {
        title: '修改课程',
        noCache: true,
        activeMenu: '/manage/course'
      },
      hidden: true
    },
    {

      path: 'comment/:id(\\d+)',
      component: () => import('@/views/manage/comment/list'),
      name: 'Comments',
      meta: {
        title: '管理评论',
        noCache: true,
        activeMenu: '/manage/course'
      },
      hidden: true
    }
  ]
}

export default manageRouter
