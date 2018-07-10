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
import ibms1 from '@/view/ibms1'
import ibms2 from '@/view/ibms2'
import ibms3 from '@/view/ibms3'
import ibms4 from '@/view/ibms4'
import ibms5 from '@/view/ibms5'
import ibms6 from '@/view/ibms6'
import ibms7 from '@/view/ibms7'
import ibms08 from '@/view/ibms08'
import ibms9 from '@/view/ibms9'
import ibms10_01 from '@/view/ibms10_01.vue'
import ibms10_02 from '@/view/ibms10_02.vue'
import ibms11 from '@/view/ibms11'
import ibms12 from '@/view/ibms12'
import ibms13 from '@/view/ibms13'
import ibms14 from '@/view/ibms14'
import ibms15 from '@/view/ibms15'
import ibms16 from '@/view/ibms16'
import ibms17 from '@/view/ibms17'
import ibms18 from '@/view/ibms18'
import ibms19 from '@/view/ibms19'


import dynamic from '@/view/dynamic'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: { keepAlive: true }

    },
    {
      path: '/',
      name: 'structure',
      component: structure,
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
      path: '/ibms1',
      name: 'ibms1',
      component: ibms1,
      meta: { keepAlive: true }
    },
    {
      path: '/ibms2',
      name: 'ibms2',
      component: ibms2,
      meta: { keepAlive: true }
    },
    {
      path: '/ibms3',
      name: 'ibms3',
      component: ibms3,
      meta: { keepAlive: true }
    },
    {
      path: '/ibms4',
      name: 'ibms4',
      component: ibms4,
      meta: { keepAlive: true }
    },
    {
      path: '/ibms5',
      name: 'ibms5',
      component: ibms5,
      meta: { keepAlive: true }
    },
    {
      path: '/ibms6',
      name: 'ibms6',
      component: ibms6,
      meta: { keepAlive: true }
    },
    {
      path: '/ibms7',
      name: 'ibms7',
      component: ibms7,
      meta: { keepAlive: true }
    },
    {
      path: '/ibms08',
      name: 'ibms08',
      component: ibms08,
      meta: { keepAlive: true }
    },
    {
      path: '/ibms9',
      name: 'ibms9',
      component: ibms9,
      meta: { keepAlive: true }
    },
    {
      path: '/ibms10_01',
      name: 'ibms10_01',
      component: ibms10_01,
      meta: { keepAlive: true }
    },
    {
      path: '/ibms10_02',
      name: 'ibms10_02',
      component: ibms10_02,
      meta: { keepAlive: true }
    },
    {
      path: '/ibms11',
      name: 'ibms11',
      component: ibms11,
      meta: { keepAlive: true }
    },
    {
      path: '/ibms12',
      name: 'ibms12',
      component: ibms12,
      meta: { keepAlive: true }
    },
    {
      path: '/ibms13',
      name: 'ibms13',
      component: ibms13,
      meta: { keepAlive: true }
    },
    {
      path: '/ibms14',
      name: 'ibms14',
      component: ibms14,
      meta: { keepAlive: true }
    },
    {
      path: '/ibms15',
      name: 'ibms15',
      component: ibms15,
      meta: { keepAlive: true }
    },
    {
      path: '/ibms16',
      name: 'ibms16',
      component: ibms16,
      meta: { keepAlive: true }
    },
    {
      path: '/ibms17',
      name: 'ibms17',
      component: ibms17,
      meta: { keepAlive: true }
    },
    {
      path: '/ibms18',
      name: 'ibms18',
      component: ibms18,
      meta: { keepAlive: true }
    },
    {
      path: '/ibms19',
      name: 'ibms19',
      component: ibms19,
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
      component: hr,
      meta: { keepAlive: true }
    },
    {
      path: '/sum',
      name: 'sum',
      component: sum,
      meta: { keepAlive: true }
    },
    {
      path: '/operationAnalysis',
      name: 'operationAnalysis',
      component: operationAnalysis,
      meta: { keepAlive: true }
    },
    {
      path: '/laboratory',
      name: 'laboratory',
      component: laboratory,
      meta: { keepAlive: true }
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
      component: roomDynamic,
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
      path: '/achievements',
      name: 'achievements',
      component: achievements,
      meta: { keepAlive: true }
    },
    {
      path: '/imgAnalysis',
      name: 'imgAnalysis',
      component: imgAnalysis,
      meta: { keepAlive: true }
    },
    {
      path: '/pharmacy',
      name: 'pharmacy',
      component: pharmacy,
      meta: { keepAlive: true }
    },
    {
      path: '/tat',
      name: 'tat',
      component: tat,
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
