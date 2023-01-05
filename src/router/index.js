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
    path: '*',
    component: Layout,
    meta: { title: '产品合格判定模型', icon: 'dashboard' },
    redirect: '/module/productQuality/productQuality',
    children: [{
      path: 'productQuality',
      name: 'ProductQuality',
      component: () => import('@/views/module/productQuality/productQuality'),
      meta: { title: '合格判定', icon: 'dashboard' }
    }, {
      path: 'productStandard',
      name: 'ProductStandard',
      component: () => import('@/views/module/productQuality/productStandard'),
      meta: { title: '判定标准', icon: 'dashboard' }
    }]
  },
  {
    path: '/healthDegree',
    component: Layout,
    meta: { title: '设备健康状况分析', icon: 'dashboard' },
    redirect: '/module/healthDegree/roollingMachine',
    children: [{
      path: 'rollingMachine1',
      name: 'RollingMachine1',
      component: () => import('@/views/module/healthDegree/rollingMachine1.vue'),
      meta: { title: '铸扎机1#', icon: 'dashboard' }
    }, {
      path: 'rollingMachine2',
      name: 'RollingMachine2',
      component: () => import('@/views/module/healthDegree/rollingMachine2.vue'),
      meta: { title: '铸扎机2#', icon: 'dashboard' }
    }, {
      path: 'rollingMachine3',
      name: 'RollingMachine3',
      component: () => import('@/views/module/healthDegree/rollingMachine3.vue'),
      meta: { title: '铸扎机3#', icon: 'dashboard' }
    }, {
      path: 'rollingMachine4',
      name: 'RollingMachine4',
      component: () => import('@/views/module/healthDegree/rollingMachine4.vue'),
      meta: { title: '铸扎机4#', icon: 'dashboard' }
    }, {
      path: 'rollingMachine5',
      name: 'RollingMachine5',
      component: () => import('@/views/module/healthDegree/rollingMachine5.vue'),
      meta: { title: '铸扎机5#', icon: 'dashboard' }
    }, {
      path: 'recoilingMachine',
      name: 'RecoilingMachine',
      component: () => import('@/views/module/healthDegree/recoilingMachine.vue'),
      meta: { title: '重卷机', icon: 'dashboard' }
    }, {
      path: 'annealingFurnace',
      name: 'AnnealingFurance',
      component: () => import('@/views/module/healthDegree/annealingFurnace.vue'),
      meta: { title: '退火炉', icon: 'dashboard' }
    }, {
      path: 'test',
      name: 'Test',
      component: () => import('@/views/module/healthDegree/test.vue'),
      meta: { title: '测试', icon: 'dashboard' }
    }, {
      path: 'avaluate',
      name: 'Avaluate',
      component: () => import('@/views/module/healthDegree/avaluate.vue'),
      meta: { title: '值域', icon: 'dashboard' }
    }, {
      path: 'rollingMachineSet',
      name: 'RollingMachineSet',
      component: () => import('@/views/module/healthDegree/rollingMachineSet.vue'),
      meta: { title: '铸扎机参数设置', icon: 'dashboard' }
    }, {
      path: 'parameterSet',
      name: 'ParameterSet',
      component: () => import('@/views/module/healthDegree/recoillingSet.vue'),
      meta: { title: '重卷机参数设置', icon: 'dashboard' }
    }, {
      path: 'searchRollingMachine',
      name: 'SearchRollingMachine',
      component: () => import('@/views/module/healthDegree/searchRollingMachine.vue'),
      meta: { title: '产品生产记录', icon: 'dashboard' }
    }]
  },

  {
    path: '/processMonitor',
    component: Layout,
    meta: { title: '产品流程监控模型', icon: 'dashboard' },
    redirect: '/processMonitor',
    children: [{
      path: '/processMonitor/processMonitor',
      name: 'ProcessMonitor',
      component: () => import('@/views/module/processMonitor'),
      meta: { title: '产品流程监控模型', icon: 'dashboard' }
    }, {
      path: '/processMonitor/computeIndex',
      name: 'ComputeIndex',
      component: () => import('@/views/module/computeIndex'),
      meta: { title: '生产周期计算', icon: 'dashboard' }
    }, {
      path: '/processMonitor/predictIndex',
      name: 'PredictIndex',
      component: () => import('@/views/module/predictIndex'),
      meta: { title: '交期风险预判', icon: 'dashboard' }
    }, {
      path: '/processMonitor/processIndex',
      name: 'ProcessIndex',
      component: () => import('@/views/module/processIndex'),
      meta: { title: '异常流程显示', icon: 'dashboard' }
    }]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
  // { path: '*', redirect: '/productQuality', hidden: true }
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
