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
import achievements from '@/view/achievements'
import imgAnalysis from '@/view/imgAnalysis'
import pharmacy from '@/view/pharmacy'
import roomDynamic from '@/view/roomDynamic'
import hr from '@/view/hr'
import tat from '@/view/tat'
import laboratory from '@/view/laboratory'
import sum from '@/view/sum'
import mutation from '@/view/mutation'
import day from '@/view/day'
import wastage from '@/view/wastage'
import operation1 from '@/view/operation1'
import chartCenter from '@/view/chartCenter'
import structure from '@/view/structure'
import operationAnalysis from '@/view/operationAnalysis'

import dynamic from '@/view/dynamic'
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
      path: '/dynamic',
      name: 'dynamic',
      component: dynamic,
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
      path: '/day',
      name: 'day',
      component: day,
      meta: { keepAlive: true }
    },
    {
      path: '/structure',
      name: 'structure',
      component: structure,
      meta: { keepAlive: true }
    },
    {
      path: '/wastage',
      name: 'wastage',
      component: wastage,
      meta: { keepAlive: true }
    },
    {
      path: '/chartCenter',
      name: 'chartCenter',
      component: chartCenter,
      meta: { keepAlive: true }
    },
    {
      path: '/query',
      name: 'query',
      component: query,
      meta: { keepAlive: true }

    },
    {
      path: '/hr',
      name: 'hr',
      component: hr
    },
    {
      path: '/sum',
      name: 'sum',
      component: sum
    },
    {
      path: '/operationAnalysis',
      name: 'operationAnalysis',
      component: operationAnalysis
    },
    {
      path: '/laboratory',
      name: 'laboratory',
      component: laboratory
    },
    {
      path: '/hospitalization',
      name: 'hospitalization',
      component: hospitalization,
      meta: { keepAlive: true }
    },
    {
      path: '/mutation',
      name: 'mutation',
      component: mutation,
      meta: { keepAlive: true }
    },
    {
      path: '/operation1',
      name: 'operation1',
      component: operation1,
      meta: { keepAlive: true }
    },
    {
      path: '/roomDynamic',
      name: 'roomDynamic',
      component: roomDynamic
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
