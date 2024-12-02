const router = [
  {
    path: '/work-order/statistics',
    component: () => import(/* webpackChunkName: "workOrder" */ '@/views/devops-center/work-order/statistics')
  },
  {
    path: '/work-order/query',
    component: () => import(/* webpackChunkName: "workOrder" */ '@/views/devops-center/work-order/query')
  },
  // 运维图谱
  {
    path: '/knowledge-base/graphTopology',
    component: () => import(/* webpackChunkName: "workOrder" */ '@/views/devops-center/knowledge-base/graphTopology')
  },
  // 运维记录
  {
    path: '/knowledge-base/takeNotes',
    component: () => import(/* webpackChunkName: "workOrder" */ '@/views/devops-center/knowledge-base/takeNotes')
  },
  // 标准知识库
  {
    path: '/knowledge-base/standard',
    component: () => import(/* webpackChunkName: "workOrder" */ '@/views/devops-center/knowledge-base/standard')
  },
  {
    path: '/device-management/equipmentAccount',
    component: () => import(/* webpackChunkName: "workOrder" */ '@/views/devops-center/device-management/equipmentAccount')
  }
]

export default router
