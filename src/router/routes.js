export default [
  {
    name: 'NotFound',
    path: '*',
    component: () => import('@/views/NotFound/NotFound')
  },
  {
    name: 'Forbidden',
    path: '/forbidden',
    component: () => import('@/views/Forbidden/Forbidden')
  },
  {
    name: 'Home',
    path: '/',
    component: () => import('@/views/Home/Home')
  }
]
