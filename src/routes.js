import VueRouter from 'vue-router'
import Home from './pages/Home'
import Offer from './pages/Offer'
import E404 from './pages/E404'
// import wordersInfo from './pages/worders/Info'
// import archiveStart from './pages/archive/Start'
// import wordersLogin from './pages/worders/Login'
// import archiveLogin from './pages/archive/Login'
// import About from './pages/About'

// import path from 'path'
// path: path.resolve(__dirname, './dist'),
// console.log(__dirname);
// console.log(path.resolve(__dirname, '//login'));

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
      // component: wordersLogin
      component: () => import('./pages/Form')
    },
    {
      path: '/offer',
      name: "offer",
      component: () => import('./pages/Offer')
    },
    // {
    //   path: '/archive/login',
    //   // component: archiveLogin
    //   component:  () => import('./pages/archive/Login')
    // },
  ]
})
