export default [
  {
    path: '/',
    component: () => import('../components/pages/Base.vue'),
    name: 'Base'
  },
  {
    path: '/admin',
    component: () => import('../components/pages/Admin.vue'),
    name: 'Admin'
  },
  {
    path: '/404',
    component: () => import('../components/pages/Error.vue'),
    name: 'Error'
  },
  {
    path: '*',
    redirect: '/404'
  }
]