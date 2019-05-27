import Layout from '@/layout'

const userNoteRouter = {
  path: '/note',
  component: Layout,
  redirect: '/note/list',
  name: 'Notes',
  meta: {
    title: '笔记管理',
    icon: 'manage',
    roles: ['user']
  },
  children: [
    {
      path: 'list',
      name: 'UserNotes',
      component: () => import('@/views/user/note/list'),
      meta: {
        title: '我的笔记',
        icon: 'mynote'
      }
    },
    {
      path: 'collection',
      name: 'Collection',
      component: () => import('@/views/user/note/collection'),
      meta: {
        title: '我的收藏',
        icon: 'starnote'
      }
    },
    {
      path: 'edit',
      name: 'EditNote',
      component: () => import('@/views/user/note/edit'),
      meta: {
        title: '编辑笔记',
        icon: 'statistics',
        activeMenu: '/note'
      },
      hidden: true
    },
    {
      path: 'view/:id(\\d+)',
      name: 'ViewNote',
      component: () => import('@/views/user/note/view'),
      meta: {
        title: '查看笔记',
        icon: 'statistics',
        activeMenu: '/note'
      },
      hidden: true
    }
  ]
}

export default userNoteRouter
