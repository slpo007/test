import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Deal from '@/components/Deal'
import My from '@/components/My'
import Delivery from'@/components/Delivery detail'
import Douban from'@/components/douban'


Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Deal',
      name: 'Deal',
      component: Deal
    },
    {
      path: '/My',
      name: 'My',
      component: My
    },
    {
      path: '/Delivery detail',
      name: 'Delivery detail',
      component: Delivery
    },
    {
      path: '/Douban',
      name: 'Douban',
      component: Douban
    }
  ]
})
