import Vue from 'vue'
import Router from 'vue-router'

//Component pages
import SighIn from '../pages/SighIn'
import Index from '../pages/Index'
import PageNotFound from '../pages/PageNotFound'

//Route Module
import DashBoard from '../pages/dashboard/DashBoard'
import NewsRoute from './routes/news'
import ProductsRoute from './routes/products'
import SlidersRoute from './routes/sliders'
import AccountsRoute from './routes/accounts'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    //Sign In
    {
      path: '/admin/signin',
      name: 'SignIn',
      component: SighIn,
      meta: {
        title: 'SignIn'
      }
    },

    //If path = admin - Redirect to admin/signin
    {
      path: '/admin',
      redirect: '/admin/signin',
      component: Index,
      //Children page
      children: [
        //Dashboard
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: DashBoard,
          meta: {
            title: 'Dashboard'
          }
        },
        //Module
        ...NewsRoute,
        ...ProductsRoute,
        ...SlidersRoute,
        ...AccountsRoute,
        //Page not found
        {
          path: '*',
          name: 'PageNotFound',
          component: PageNotFound
        }
      ]
    }
  ],
})

export default router
