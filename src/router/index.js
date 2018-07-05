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

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/ins',
      name: 'ins',
      component: ins
    },
    {
      path: '/query',
      name: 'query',
      component: query
    },
    {
      path: '/hospitalization',
      name: 'hospitalization',
      component: hospitalization
    },
    {
      path: '/overview',
      name: 'overview',
      component: overview
    },
    {
      path: '/report',
      name: 'report',
      component: report
    },
    {
      path: '/operation',
      name: 'operation',
      component: operation
    },
    {
      path: '/imaging',
      name: 'imaging',
      component: imaging
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    }
  ]
})
