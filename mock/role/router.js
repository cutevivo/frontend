// Just a mock data

export const constantRoutes = [
  {
    path: '/redirect',
    component: 'layout/Layout',
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: 'views/redirect/index'
      }
    ]
  },
  {
    path: '/login',
    component: 'views/login/index',
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: 'views/login/auth-redirect',
    hidden: true
  },
  {
    path: '/404',
    component: 'views/error-page/404',
    hidden: true
  },
  {
    path: '/401',
    component: 'views/error-page/401',
    hidden: true
  },
  {
    path: '',
    component: 'layout/Layout',
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: 'views/dashboard/index',
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  }
]

export const asyncRoutes = [
  {
    path: '/manage',
    component: 'Layout',
    redirect: '/manage/course',
    name: 'Manage',
    meta: {
      title: '课程管理',
      icon: 'manage',
      role: ['admin']
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
          icon: 'manage',
          role: ['admin']
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
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]
