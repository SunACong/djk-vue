import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/module/productQuality',
    component: Layout,
    meta: { title: '产品合格判定模型', icon: 'el-icon-aim' },
    redirect: '/module/productQuality/planAndInspect',
    children: [{
      path: 'planAndInspect',
      name: 'PlanAndInspect',
      component: () => import('@/views/module/productQuality/planAndInspect'),
      meta: { title: '合格判定', icon: 'dashboard' }
    }
      // , {
      //   path: 'productStandard',
      //   name: 'ProductStandard',
      //   component: () => import('@/views/module/productQuality/productStandard'),
      //   meta: { title: '判定标准', icon: 'dashboard' }
      // }, {
      //   path: 'productLqcmr',
      //   name: 'ProductLqcmr',
      //   component: () => import('@/views/module/productQuality/productLqcmr'),
      //   meta: { title: '力学性能指标', icon: 'dashboard' }
      // }, {
      //   path: 'productLqci',
      //   name: 'ProductLqci',
      //   component: () => import('@/views/module/productQuality/productLqci'),
      //   meta: { title: '产品随行卡指标', icon: 'dashboard' }
      // }
    ]
  },
  {
    path: '/module/healthDegree',
    component: Layout,
    meta: { title: '设备健康状况分析', icon: 'dashboard' },
    redirect: '/module/healthDegree/oneCastroll',
    children: [{
      path: 'oneCastroll',
      name: 'OneCastroll',
      component: () => import('@/views/module/healthDegree/oneCastroll.vue'),
      meta: { title: '铸轧机设备参数1#', icon: 'dashboard' }
    }, {
      path: 'twoCastroll',
      name: 'TwoCastroll',
      component: () => import('@/views/module/healthDegree/twoCastroll.vue'),
      meta: { title: '铸轧机设备参数2#', icon: 'dashboard' }
    }, {
      path: 'threeCastroll',
      name: 'ThreeCastroll',
      component: () => import('@/views/module/healthDegree/threeCastroll.vue'),
      meta: { title: '铸轧机设备参数3#', icon: 'dashboard' }
    }, {
      path: 'fourCastroll',
      name: 'FourCastroll',
      component: () => import('@/views/module/healthDegree/fourCastroll.vue'),
      meta: { title: '铸轧机设备参数4#', icon: 'dashboard' }
    }, {
      path: 'fiveCastroll',
      name: 'FiveCastroll',
      component: () => import('@/views/module/healthDegree/fiveCastroll.vue'),
      meta: { title: '铸轧机设备参数5#', icon: 'dashboard' }
    }, {
      path: 'rollingMachine11',
      name: 'RollingMachine11',
      component: () => import('@/views/module/healthDegree/rollingMachine11.vue'),
      meta: { title: '铸轧机工艺参数1#', icon: 'dashboard' }
    }, {
      path: 'rollingMachine22',
      name: 'RollingMachine22',
      component: () => import('@/views/module/healthDegree/rollingMachine22.vue'),
      meta: { title: '铸轧机工艺参数2#', icon: 'dashboard' }
    }, {
      path: 'rollingMachine33',
      name: 'RollingMachine33',
      component: () => import('@/views/module/healthDegree/rollingMachine33.vue'),
      meta: { title: '铸轧机工艺参数3#', icon: 'dashboard' }
    }, {
      path: 'rollingMachine44',
      name: 'RollingMachine44',
      component: () => import('@/views/module/healthDegree/rollingMachine44.vue'),
      meta: { title: '铸轧机工艺参数4#', icon: 'dashboard' }
    }, {
      path: 'rollingMachine55',
      name: 'RollingMachine55',
      component: () => import('@/views/module/healthDegree/rollingMachine55.vue'),
      meta: { title: '铸轧机工艺参数5#', icon: 'dashboard' }
    }, {
      path: 'recoilingMachine',
      name: 'RecoilingMachine',
      component: () => import('@/views/module/healthDegree/recoilingMachine.vue'),
      meta: { title: '重卷机设备参数', icon: 'dashboard' }
    }, {
      path: 'recoilingMachineGong',
      name: 'RecoilingMachineGong',
      component: () => import('@/views/module/healthDegree/recoilingMachineGong.vue'),
      meta: { title: '重卷机工艺参数', icon: 'dashboard' }
    },
    {
      path: 'AnneaF1',
      name: 'AnneaF1',
      component: () => import('@/views/module/healthDegree/AnneaF1.vue'),
      meta: { title: '退火炉参数1#', icon: 'dashboard' }
    },

    {
      path: 'AnneaF2',
      name: 'AnneaF2',
      component: () => import('@/views/module/healthDegree/AnneaF2.vue'),
      meta: { title: '退火炉参数2#', icon: 'dashboard' }
    },

    {
      path: 'AnneaF3',
      name: 'AnneaF3',
      component: () => import('@/views/module/healthDegree/AnneaF3.vue'),
      meta: { title: '退火炉参数3#', icon: 'dashboard' }
    },

    {
      path: 'AnneaF4',
      name: 'AnneaF4',
      component: () => import('@/views/module/healthDegree/AnneaF4.vue'),
      meta: { title: '退火炉参数4#', icon: 'dashboard' }
    },
    {
      path: 'AnneaF5',
      name: 'AnneaF5',
      component: () => import('@/views/module/healthDegree/AnneaF5.vue'),
      meta: { title: '退火炉参数5#', icon: 'dashboard' }
    },
    {
      path: 'AnneaF6',
      name: 'AnneaF6',
      component: () => import('@/views/module/healthDegree/AnneaF6.vue'),
      meta: { title: '退火炉参数6#', icon: 'dashboard' }
    },

    {
      path: 'AnneaF7',
      name: 'AnneaF7',
      component: () => import('@/views/module/healthDegree/AnneaF7.vue'),
      meta: { title: '退火炉参数7#', icon: 'dashboard' }
    },
    // {
    //   path: 'avaluate',
    //   name: 'Avaluate',
    //   component: () => import('@/views/module/healthDegree/avaluate.vue'),
    //   meta: { title: '值域', icon: 'dashboard' }
    // },
    {
      path: 'rollingMachineSet',
      name: 'RollingMachineSet',
      component: () => import('@/views/module/healthDegree/rollingMachineSet.vue'),
      meta: { title: '铸轧机参数设置', icon: 'dashboard' }
    },

    {
      //parameterSet
      path: 'recoillingSet',
      name: 'recoillingSet',
      component: () => import('@/views/module/healthDegree/recoillingSet.vue'),
      meta: { title: '重卷机参数设置', icon: 'dashboard' }
    },

    {
      path: 'AnneaFurSet',
      name: 'AnneaFurSet',
      component: () => import('@/views/module/healthDegree/AnneaFurSet.vue'),
      meta: { title: '退火炉参数设置', icon: 'dashboard' }
    },

    {
      path: 'searchRollingMachine',
      name: 'SearchRollingMachine',
      component: () => import('@/views/module/healthDegree/searchRollingMachine.vue'),
      meta: { title: '产品生产记录', icon: 'dashboard' }
    }]
  },

  {
    path: '/module/processMonitor',
    component: Layout,
    meta: { title: '产品流程监控模型', icon: 'el-icon-finished' },
    redirect: '/module/processMonitor/allProcessMonitor',
    children: [{
      path: 'allProcessMonitor',
      name: 'AllProcessMonitor',
      component: () => import('@/views/module/processMonitor/allProcessMonitor'),
      meta: { title: '整体生产流程', icon: 'dashboard' }
    },

    {
      path: 'castProcessMonitor',
      name: 'CastProcessMonitor',
      component: () => import('@/views/module/processMonitor/castProcessMonitor'),
      meta: { title: '铸轧生产流程', icon: 'dashboard' }
    }, {
      path: 'coldProcessMonitor',
      name: 'ColdProcessMonitor',
      component: () => import('@/views/module/processMonitor/coldProcessMonitor'),
      meta: { title: '冷轧生产流程', icon: 'dashboard' }
    }, {
      path: 'computeIndex',
      name: 'ComputeIndex',
      component: () => import('@/views/module/processMonitor/computeIndex'),
      meta: { title: '生产周期计算', icon: 'dashboard' }
    }, {
      path: 'predictIndex',
      name: 'PredictIndex',
      component: () => import('@/views/module/processMonitor/predictIndex'),
      meta: { title: '交期风险预判', icon: 'dashboard' }
    }, {
      path: 'processIndex',
      name: 'ProcessIndex',
      component: () => import('@/views/module/processMonitor/processIndex'),
      meta: { title: '异常流程显示', icon: 'dashboard' }
    }]
  },
  // 404 page must be placed at the end !!!
  // { path: '*', redirect: '/404', hidden: true }
  { path: '*', redirect: '/module/productQuality', hidden: true }
]

const createRouter = () => new Router({
  mode: 'history', // require service support
  base: 'model/api',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
