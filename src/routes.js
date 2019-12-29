import VueRouter from 'vue-router'
import Home from './pages/Home'
import E404 from './pages/E404'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: user_config.subFolder+'',
      name: "home", // это имя подставляется в router-link в тэг :to={name:"home"}
      component: Home
    },
    {
      path: '*',
      component: E404
    },
    {
      path: user_config.subFolder+'/form',
      name: "form",
      component: () => import('./pages/Form')
    },
    {
      path: user_config.subFolder+'/offer',
      name: "offer",
      component: () => import('./pages/Offer')
    },
    {
      path: user_config.subFolder+'/send',
      name: "send",
      component:  () => import('./pages/Send')
    }
  ]
})
