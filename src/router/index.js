import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import demo from '@/view/demo'
import home from '@/view/home'
import report from '@/view/report'
import overview from '@/view/overview'
import query from '@/view/query'
import ins from '@/view/ins'
import operation from '@/view/operation'
import imaging from '@/view/imaging'
import hospitalization from '@/view/hospitalization'
import surver from '@/view/surver'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta: { keepAlive: true }

    },
    {
      path: '/surver',
      name: 'surver',
      component: surver,
      meta: { keepAlive: true }

    },
    {
      path: '/ins',
      name: 'ins',
      component: ins,
      meta: { keepAlive: true }

    },
    {
      path: '/query',
      name: 'query',
      component: query,
      meta: { keepAlive: true }

    },
    {
      path: '/hospitalization',
      name: 'hospitalization',
      component: hospitalization,
      meta: { keepAlive: true }

    },
    {
      path: '/overview',
      name: 'overview',
      component: overview,
      meta: { keepAlive: true }

    },
    {
      path: '/report',
      name: 'report',
      component: report,
      meta: { keepAlive: true }

    },
    {
      path: '/operation',
      name: 'operation',
      component: operation,
      meta: { keepAlive: true }

    },
    {
      path: '/imaging',
      name: 'imaging',
      component: imaging,
      meta: { keepAlive: true }

    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: { keepAlive: true }

    },
    {
      path: '/demo',
      name: 'demo',
      component: demo,
      meta: { keepAlive: true }

    }
  ]
})
