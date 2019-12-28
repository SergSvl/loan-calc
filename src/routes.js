import VueRouter from 'vue-router'
import Home from './pages/Home'
import E404 from './pages/E404'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '',
      name: "home", // это имя подставляется в router-link в тэг :to={name:"home"}
      component: Home
    },
    {
      path: '*',
      component: E404
    },
    {
      path: '/form',
      name: "form",
      component: () => import('./pages/Form')
    },
    {
      path: '/offer',
      name: "offer",
      component: () => import('./pages/Offer')
    },
    {
      path: '/send',
      name: "send",
      component:  () => import('./pages/Send')
    }
  ]
})
