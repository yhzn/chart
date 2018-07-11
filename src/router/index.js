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

    },
    {
      path: '/',
      name: 'structure',
      component: structure,
    },
    {
      path: '/dynamic',
      name: 'dynamic',
      component: dynamic,

    },
    {
      path: '/surver',
      name: 'surver',
      component: surver,

    },
    {
      path: '/ibms1',
      name: 'ibms1',
      component: ibms1,
    },
    {
      path: '/ibms2',
      name: 'ibms2',
      component: ibms2,
    },
    {
      path: '/ibms3',
      name: 'ibms3',
      component: ibms3,
    },
    {
      path: '/ibms4',
      name: 'ibms4',
      component: ibms4,
    },
    {
      path: '/ibms5',
      name: 'ibms5',
      component: ibms5,
    },
    {
      path: '/ibms6',
      name: 'ibms6',
      component: ibms6,
    },
    {
      path: '/ibms7',
      name: 'ibms7',
      component: ibms7,
    },
    {
      path: '/ibms08',
      name: 'ibms08',
      component: ibms08,
    },
    {
      path: '/ibms9',
      name: 'ibms9',
      component: ibms9,
    },
    {
      path: '/ibms10_01',
      name: 'ibms10_01',
      component: ibms10_01,
    },
    {
      path: '/ibms10_02',
      name: 'ibms10_02',
      component: ibms10_02,
    },
    {
      path: '/ibms11',
      name: 'ibms11',
      component: ibms11,
    },
    {
      path: '/ibms12',
      name: 'ibms12',
      component: ibms12,
    },
    {
      path: '/ibms13',
      name: 'ibms13',
      component: ibms13,
    },
    {
      path: '/ibms14',
      name: 'ibms14',
      component: ibms14,
    },
    {
      path: '/ibms15',
      name: 'ibms15',
      component: ibms15,
    },
    {
      path: '/ibms16',
      name: 'ibms16',
      component: ibms16,
    },
    {
      path: '/ibms17',
      name: 'ibms17',
      component: ibms17,
    },
    {
      path: '/ibms18',
      name: 'ibms18',
      component: ibms18,
    },
    {
      path: '/ibms19',
      name: 'ibms19',
      component: ibms19,
    },
    {
      path: '/ins',
      name: 'ins',
      component: ins,
    },
    {
      path: '/day',
      name: 'day',
      component: day,
    },
    {
      path: '/wastage',
      name: 'wastage',
      component: wastage,
    },
    {
      path: '/chartCenter',
      name: 'chartCenter',
      component: chartCenter,
    },
    {
      path: '/query',
      name: 'query',
      component: query,

    },
    {
      path: '/hr',
      name: 'hr',
      component: hr,
    },
    {
      path: '/sum',
      name: 'sum',
      component: sum,
    },
    {
      path: '/operationAnalysis',
      name: 'operationAnalysis',
      component: operationAnalysis,
    },
    {
      path: '/laboratory',
      name: 'laboratory',
      component: laboratory,
    },
    {
      path: '/hospitalization',
      name: 'hospitalization',
      component: hospitalization,
    },
    {
      path: '/mutation',
      name: 'mutation',
      component: mutation,
    },
    {
      path: '/operation1',
      name: 'operation1',
      component: operation1,
    },
    {
      path: '/roomDynamic',
      name: 'roomDynamic',
      component: roomDynamic,
    },
    {
      path: '/overview',
      name: 'overview',
      component: overview,

    },
    {
      path: '/report',
      name: 'report',
      component: report,

    },
    {
      path: '/operation',
      name: 'operation',
      component: operation,

    },
    {
      path: '/imaging',
      name: 'imaging',
      component: imaging,

    },
    {
      path: '/achievements',
      name: 'achievements',
      component: achievements,
    },
    {
      path: '/imgAnalysis',
      name: 'imgAnalysis',
      component: imgAnalysis,
    },
    {
      path: '/pharmacy',
      name: 'pharmacy',
      component: pharmacy,
    },
    {
      path: '/tat',
      name: 'tat',
      component: tat,
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,

    },
    {
      path: '/demo',
      name: 'demo',
      component: demo,

    }
  ]
})
