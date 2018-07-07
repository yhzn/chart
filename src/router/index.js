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
import achievements from '@/view/achievements'
import imgAnalysis from '@/view/imgAnalysis'
import pharmacy from '@/view/pharmacy'
import roomDynamic from '@/view/roomDynamic'
import hr from '@/view/hr'
import tat from '@/view/tat'

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
      path: '/hr',
      name: 'hr',
      component: hr
    },
    {
      path: '/hospitalization',
      name: 'hospitalization',
      component: hospitalization
    },
    {
      path: '/roomDynamic',
      name: 'roomDynamic',
      component: roomDynamic
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
      path: '/achievements',
      name: 'achievements',
      component: achievements
    },
    {
      path: '/imgAnalysis',
      name: 'imgAnalysis',
      component: imgAnalysis
    },
    {
      path: '/pharmacy',
      name: 'pharmacy',
      component: pharmacy
    },
    {
      path: '/tat',
      name: 'tat',
      component: tat
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
