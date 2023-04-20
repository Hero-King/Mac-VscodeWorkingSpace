import Mock from 'mockjs'

Mock.mock(/\/api\/cms-cloud-service\/workPlan\/qurryWorkPlanType/, (opt) => {
  return {
    code: 0,
    msg: 'success',
    data: [
      {
        id: '1',
        workTypeName: '告警工单',
        isSystem: 1,
        tenantId: 'geek',
        createDate: '2023-03-21 16:47:08',
        updateDate: '2023-03-21 16:47:10',
        createBy: 'system',
        updateBy: 'system'
      },
      {
        id: '2',
        workTypeName: '消缺工单',
        isSystem: 1,
        tenantId: 'geek',
        createDate: '2023-03-21 16:47:33',
        updateDate: '2023-03-21 16:47:35',
        createBy: 'system',
        updateBy: 'system'
      },
      {
        id: '3',
        workTypeName: '巡检工单',
        isSystem: 1,
        tenantId: 'geek',
        createDate: '2023-03-21 16:48:16',
        updateDate: '2023-03-21 16:48:18',
        createBy: 'system',
        updateBy: 'system'
      },
      {
        id: '4',
        workTypeName: '保养工单',
        isSystem: 1,
        tenantId: 'geek',
        createDate: '2023-03-21 16:48:36',
        updateDate: '2023-03-21 16:48:38',
        createBy: 'system',
        updateBy: 'system'
      },
      {
        id: '8',
        workTypeName: '14工单',
        isSystem: 0,
        tenantId: 'geek',
        createDate: '2023-04-19 09:11:59',
        updateDate: '2023-04-19 09:11:59',
        createBy: '27',
        updateBy: '27'
      },
      {
        id: '28',
        workTypeName: 'OK工单',
        isSystem: 0,
        tenantId: 'geek',
        createDate: '2023-04-19 09:11:59',
        updateDate: '2023-04-19 09:11:59',
        createBy: '27',
        updateBy: '27'
      },
      {
        id: '59',
        workTypeName: '大赛工单',
        isSystem: 0,
        tenantId: 'geek',
        createDate: '2023-04-19 09:11:59',
        updateDate: '2023-04-19 09:11:59',
        createBy: '27',
        updateBy: '27'
      },
      {
        id: '73',
        workTypeName: '17工单',
        isSystem: 0,
        tenantId: 'geek',
        createDate: '2023-04-19 09:11:59',
        updateDate: '2023-04-19 09:11:59',
        createBy: '27',
        updateBy: '27'
      },
      {
        id: '78',
        workTypeName: '18工单',
        isSystem: 0,
        tenantId: 'geek',
        createDate: '2023-04-19 09:11:59',
        updateDate: '2023-04-19 09:11:59',
        createBy: '27',
        updateBy: '27'
      },
      {
        id: '84',
        workTypeName: '1工单',
        isSystem: 0,
        tenantId: 'geek',
        createDate: '2023-04-19 09:11:59',
        updateDate: '2023-04-19 09:11:59',
        createBy: '27',
        updateBy: '27'
      }
    ],
    success: true
  }
})

Mock.mock(/\/api\/cms-cloud-service\/locationTree\/queryCacheAllTop/, (opt) => {
  return {
    code: 0,
    msg: 'success',
    data: [
      {
        id: '1497050260941504514',
        tenantId: 'geek',
        createBy: '195176',
        createDate: 1645759571000,
        updateBy: 'admin',
        updateDate: 1672897154000,
        locationType: 'common',
        energyCode: 'common',
        locationName: '冰机系统研究所',
        locationLevel: 0,
        parentId: '0',
        topParentId: '1497050260941504514',
        sort: 1,
        detailedAddress: '123213',
        personLiable: '光明',
        telephone: '13453270613',
        longitude: '114.298572',
        latitude: '30.584355',
        logoAddr: 'https://test.carbonminip.getech.cn/oss/test/48266c9d/__.png',
        industryType: '工业其他行业'
      },
      {
        id: '1590543023293394946',
        tenantId: 'geek',
        createBy: '李蒙龙',
        createDate: 1668049982000,
        updateBy: '李蒙龙',
        updateDate: 1677740500000,
        locationType: 'common',
        energyCode: 'common',
        locationName: '蜂巢',
        locationLevel: 0,
        parentId: '0',
        topParentId: '1590543023293394946',
        sort: 2,
        detailedAddress: null,
        personLiable: null,
        telephone: null,
        longitude: null,
        latitude: null,
        logoAddr: null,
        industryType: null
      },
      {
        id: '1592758207990792194',
        tenantId: 'geek',
        createBy: 'lv',
        createDate: 1668578123000,
        updateBy: '李蒙龙',
        updateDate: 1669802766000,
        locationType: 'common',
        energyCode: 'common',
        locationName: '暖通系统',
        locationLevel: 0,
        parentId: '0',
        topParentId: '1592758207990792194',
        sort: 3,
        detailedAddress: 'TS VD',
        personLiable: '大猫',
        telephone: '131000000',
        longitude: '11',
        latitude: '11',
        logoAddr: '',
        industryType: '电子设备制造业'
      },
      {
        id: '1587691650352775169',
        tenantId: 'geek',
        createBy: 'zenma',
        createDate: 1667370162000,
        updateBy: '李蒙龙',
        updateDate: 1669801348000,
        locationType: 'common',
        energyCode: 'common',
        locationName: '半导体研究所',
        locationLevel: 0,
        parentId: '0',
        topParentId: '1587691650352775169',
        sort: 4,
        detailedAddress: '湖区990#',
        personLiable: 'abc',
        telephone: '15678788889',
        longitude: '114.085947',
        latitude: '22.547',
        logoAddr: '',
        industryType: '电子设备制造'
      },
      {
        id: '1623862526278168577',
        tenantId: 'geek',
        createBy: 'shenzhen',
        createDate: 1675993971000,
        updateBy: 'shenzhen',
        updateDate: 1675994607000,
        locationType: 'common',
        energyCode: 'common',
        locationName: '测试',
        locationLevel: 0,
        parentId: '0',
        topParentId: '1623862526278168577',
        sort: 5,
        detailedAddress: '2424',
        personLiable: '123',
        telephone: '15661671234',
        longitude: '32',
        latitude: '23',
        logoAddr: '',
        industryType: '电子设备制造'
      },
      {
        id: '1497050616706596866',
        tenantId: 'geek',
        createBy: '195176',
        createDate: 1645759656000,
        updateBy: '195190',
        updateDate: 1660529167000,
        locationType: 'common',
        energyCode: 'common',
        locationName: '空压系统',
        locationLevel: 0,
        parentId: '0',
        topParentId: '1497050616706596866',
        sort: 6,
        detailedAddress: null,
        personLiable: null,
        telephone: null,
        longitude: null,
        latitude: null,
        logoAddr: null,
        industryType: null
      }
    ],
    success: true
  }
})

Mock.mock(/\/cms-cloud-service\/workPlan\/qurryWorkPlan/, (opt) => {
  return {
    code: 0,
    msg: 'success',
    data: {
      total: '3',
      list: [
        {
          id: '11152',
          workPlanMark: '172304130001',
          workName: '17工单1',
          workTypeName: '17工单',
          workPlanLevel: 'emerge',
          workPlanStatus: 'closed',
          currentNode: null,
          createTime: '2023-04-13 13:27:28',
          creator: '195325',
          email: null
        },
        {
          id: '11154',
          workPlanMark: 'JJ2304130001',
          workName: ' JJ工单',
          workTypeName: 'JJ工单',
          workPlanLevel: 'emerge',
          workPlanStatus: 'processing',
          currentNode: 'SV00249435',
          createTime: '2023-04-13 19:10:51',
          creator: '195325',
          email: null
        },
        {
          id: '11151',
          workPlanMark: 'GJ2304130001',
          workName: '告警工单1',
          workTypeName: '告警工单',
          workPlanLevel: 'emerge',
          workPlanStatus: 'closed',
          currentNode: null,
          createTime: '2023-04-13 11:27:47',
          creator: '195325',
          email: null
        }
      ],
      pageNum: 1,
      pageSize: 10,
      size: 3,
      startRow: 1,
      endRow: 3,
      pages: 1,
      prePage: 0,
      nextPage: 0,
      isFirstPage: true,
      isLastPage: true,
      hasPreviousPage: false,
      hasNextPage: false,
      navigatePages: 8,
      navigatepageNums: [1],
      navigateFirstPage: 1,
      navigateLastPage: 1
    },
    success: true
  }
})

Mock.mock(/\/cms-cloud-service\/workPlan\/workPlanGlobalStatistic/, (opt) => {
  return {
    code: 0,
    msg: 'success',
    data: { totalQuantity: 2, pendingQuantity: 0, completedQuantity: 1, goingQuantity: 1, avgResponseTime: '71小时13分钟26秒', avgProcessTime: '3秒' },
    success: true
  }
})

Mock.mock(/\/cms-cloud-service\/workPlan\/workPlanTypeDistribution/, (opt) => {
  return {
    code: 0,
    msg: 'success',
    data: [
      { workTypeName: 'JJ工单', count: 1 },
      { workTypeName: '17工单', count: 1 }
    ],
    success: true
  }
})

Mock.mock(/\/cms-cloud-service\/workPlan\/workPlanStatistics/, (opt) => {
  return {
    code: 0,
    msg: 'success',
    data: {
      timeExpansionAxis: [
        '2023-04-01 00:00',
        '2023-04-02 00:00',
        '2023-04-03 00:00',
        '2023-04-04 00:00',
        '2023-04-05 00:00',
        '2023-04-06 00:00',
        '2023-04-07 00:00',
        '2023-04-08 00:00',
        '2023-04-09 00:00',
        '2023-04-10 00:00',
        '2023-04-11 00:00',
        '2023-04-12 00:00',
        '2023-04-13 00:00',
        '2023-04-14 00:00',
        '2023-04-15 00:00',
        '2023-04-16 00:00',
        '2023-04-17 00:00',
        '2023-04-18 00:00',
        '2023-04-19 00:00',
        '2023-04-20 00:00'
      ],
      completedWorkPlanCount: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      goingWorkPlanCount: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      timeoutWorkPlanPercent: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    success: true
  }
})

Mock.mock(/\/cms-cloud-service\/workPlan\/workPlanDetails/, (opt) => {
  opt.body = JSON.parse(opt.body)

  return {
    code: 0,
    msg: 'success',
    data: {
      id: '11152',
      workName: '17工单1',
      workMark: '172304130001',
      workTypeName: '17工单',
      workLevel: 'emerge',
      targetTime: '2023-04-14 00:00:00',
      processSuggestion: '嗯',
      remark: '11111',
      status: 'closed',
      responseTimeDuration: 62,
      processTimeDuration: 239,
      executor: '195325',
      classify: '设备表盘显示异常',
      knowledgeId: '1',
      tenantId: 'geek',
      createDate: '2023-04-13 13:27:28',
      updateDate: '2023-04-13 13:31:27',
      createBy: '195325',
      updateBy: '195325',
      alarmLogs: [
        {
          id: '100011448',
          tenantId: 'geek',
          createBy: null,
          createDate: '2023-04-13 13:27:22',
          updateBy: null,
          updateDate: null,
          alarmLogId: null,
          alarmId: '100072',
          status: 'relieve',
          alarmType: 'event',
          alarmName: 'Event-001',
          alarmObject: 'DM-001',
          deviceMark: 'DM-001',
          paramMark: null,
          alarmContent: ' 值：1565496 限值：10',
          alarmLevel: 'general',
          relieveDate: '2023-04-13 17:13:43',
          remark: null,
          pictureEffectFlag: 0,
          soundEffectFlag: 0,
          dingFlag: null,
          emailFlag: 0,
          buttonList: null
        }
      ],
      deviceMarks: [],
      workLocations: [
        {
          id: '1497050260941504514',
          tenantId: 'geek',
          createBy: '195176',
          createDate: 1645759571000,
          updateBy: 'admin',
          updateDate: 1672897154000,
          locationType: 'common',
          energyCode: 'common',
          locationName: '冰机系统研究所',
          locationLevel: 0,
          parentId: '0',
          topParentId: '1497050260941504514',
          sort: 1
        },
        {
          id: '1497050616706596866',
          tenantId: 'geek',
          createBy: '195176',
          createDate: 1645759656000,
          updateBy: '195190',
          updateDate: 1660529167000,
          locationType: 'common',
          energyCode: 'common',
          locationName: '空压系统',
          locationLevel: 0,
          parentId: '0',
          topParentId: '1497050616706596866',
          sort: 6
        },
        {
          id: '1587691650352775169',
          tenantId: 'geek',
          createBy: 'zenma',
          createDate: 1667370162000,
          updateBy: '李蒙龙',
          updateDate: 1669801348000,
          locationType: 'common',
          energyCode: 'common',
          locationName: '半导体研究所',
          locationLevel: 0,
          parentId: '0',
          topParentId: '1587691650352775169',
          sort: 4
        },
        {
          id: '1590543023293394946',
          tenantId: 'geek',
          createBy: '李蒙龙',
          createDate: 1668049982000,
          updateBy: '李蒙龙',
          updateDate: 1677740500000,
          locationType: 'common',
          energyCode: 'common',
          locationName: '蜂巢',
          locationLevel: 0,
          parentId: '0',
          topParentId: '1590543023293394946',
          sort: 2
        },
        {
          id: '1592758207990792194',
          tenantId: 'geek',
          createBy: 'lv',
          createDate: 1668578123000,
          updateBy: '李蒙龙',
          updateDate: 1669802766000,
          locationType: 'common',
          energyCode: 'common',
          locationName: '暖通系统',
          locationLevel: 0,
          parentId: '0',
          topParentId: '1592758207990792194',
          sort: 3
        },
        {
          id: '1623862526278168577',
          tenantId: 'geek',
          createBy: 'shenzhen',
          createDate: 1675993971000,
          updateBy: 'shenzhen',
          updateDate: 1675994607000,
          locationType: 'common',
          energyCode: 'common',
          locationName: '测试',
          locationLevel: 0,
          parentId: '0',
          topParentId: '1623862526278168577',
          sort: 5
        }
      ],
      files: [
        {
          id: '34',
          workId: '11152',
          fileName: 'title.png',
          resourceId: '3242',
          fileType: 'pic',
          createDate: '2023-04-13 13:27:28',
          createBy: '195325',
          storePath: 'https://test.carbonminip.getech.cn/oss/test/eb1d5128/title.png'
        },
        {
          id: '35',
          workId: '11152',
          fileName: 'avatar.png',
          resourceId: '3243',
          fileType: 'pic',
          createDate: '2023-04-13 13:27:28',
          createBy: '195325',
          storePath: 'https://test.carbonminip.getech.cn/oss/test/44b038d9/avatar.png'
        }
      ],
      knowledges: [{ knowledgeId: '1', knowledgeName: 'wjj测试' }],
      workPlanActionCollections: [
        {
          id: '45',
          workId: '11152',
          actionType: 'add',
          remark: '11111',
          isResolved: 0,
          needIssueClassify: 0,
          createDate: '2023-04-13 13:27:28',
          createBy: '195325'
        },
        {
          id: '46',
          workId: '11152',
          actionType: 'agree',
          remark: '2222',
          isResolved: 0,
          executor: '195328',
          needIssueClassify: 0,
          createDate: '2023-04-13 13:28:30',
          createBy: '195327',
          executorName: '王俊杰3',
          technicianName: '王俊杰3'
        },
        {
          id: '47',
          workId: '11152',
          actionType: 'process',
          remark: '11111',
          isResolved: 1,
          executor: '195325',
          needIssueClassify: 0,
          createDate: '2023-04-13 13:30:44',
          createBy: '195328',
          executorName: '王俊杰1',
          technicianName: '王俊杰1',
          nameMontagePhone: 'SV0024943618200249436',
          actionFile: [
            {
              id: '6',
              workId: '11152',
              actionId: '47',
              fileName: 'logo.png',
              resourceId: '3244',
              createDate: '2023-04-13 13:30:44',
              createBy: '195328',
              storePath: 'https://test.carbonminip.getech.cn/oss/test/5d12eff1/logo.png'
            }
          ]
        },
        {
          id: '48',
          workId: '11152',
          actionType: 'confirm',
          remark: '感谢',
          isResolved: 1,
          needIssueClassify: 0,
          createDate: '2023-04-13 13:31:27',
          createBy: '195325'
        }
      ]
    },
    success: true
  }
})

Mock.mock(/\/cms-cloud-service\/workPlan\/queryWorkload/, (opt) => {
  return {
    code: 0,
    msg: 'success',
    data: [
      {
        id: '1497050260941504514',
        tenantId: 'geek',
        createBy: '195176',
        createDate: 1645759571000,
        updateBy: 'admin',
        updateDate: 1672897154000,
        locationType: 'common',
        energyCode: 'common',
        locationName: '冰机系统研究所',
        locationLevel: 0,
        parentId: '0',
        topParentId: '1497050260941504514',
        sort: 1,
        detailedAddress: '123213',
        personLiable: '光明',
        telephone: '13453270613',
        longitude: '114.298572',
        latitude: '30.584355',
        logoAddr: 'https://test.carbonminip.getech.cn/oss/test/48266c9d/__.png',
        industryType: '工业其他行业'
      },
      {
        id: '1590543023293394946',
        tenantId: 'geek',
        createBy: '李蒙龙',
        createDate: 1668049982000,
        updateBy: '李蒙龙',
        updateDate: 1677740500000,
        locationType: 'common',
        energyCode: 'common',
        locationName: '蜂巢',
        locationLevel: 0,
        parentId: '0',
        topParentId: '1590543023293394946',
        sort: 2,
        detailedAddress: null,
        personLiable: null,
        telephone: null,
        longitude: null,
        latitude: null,
        logoAddr: null,
        industryType: null
      },
      {
        id: '1592758207990792194',
        tenantId: 'geek',
        createBy: 'lv',
        createDate: 1668578123000,
        updateBy: '李蒙龙',
        updateDate: 1669802766000,
        locationType: 'common',
        energyCode: 'common',
        locationName: '暖通系统',
        locationLevel: 0,
        parentId: '0',
        topParentId: '1592758207990792194',
        sort: 3,
        detailedAddress: 'TS VD',
        personLiable: '大猫',
        telephone: '131000000',
        longitude: '11',
        latitude: '11',
        logoAddr: '',
        industryType: '电子设备制造业'
      },
      {
        id: '1587691650352775169',
        tenantId: 'geek',
        createBy: 'zenma',
        createDate: 1667370162000,
        updateBy: '李蒙龙',
        updateDate: 1669801348000,
        locationType: 'common',
        energyCode: 'common',
        locationName: '半导体研究所',
        locationLevel: 0,
        parentId: '0',
        topParentId: '1587691650352775169',
        sort: 4,
        detailedAddress: '湖区990#',
        personLiable: 'abc',
        telephone: '15678788889',
        longitude: '114.085947',
        latitude: '22.547',
        logoAddr: '',
        industryType: '电子设备制造'
      },
      {
        id: '1623862526278168577',
        tenantId: 'geek',
        createBy: 'shenzhen',
        createDate: 1675993971000,
        updateBy: 'shenzhen',
        updateDate: 1675994607000,
        locationType: 'common',
        energyCode: 'common',
        locationName: '测试',
        locationLevel: 0,
        parentId: '0',
        topParentId: '1623862526278168577',
        sort: 5,
        detailedAddress: '2424',
        personLiable: '123',
        telephone: '15661671234',
        longitude: '32',
        latitude: '23',
        logoAddr: '',
        industryType: '电子设备制造'
      },
      {
        id: '1497050616706596866',
        tenantId: 'geek',
        createBy: '195176',
        createDate: 1645759656000,
        updateBy: '195190',
        updateDate: 1660529167000,
        locationType: 'common',
        energyCode: 'common',
        locationName: '空压系统',
        locationLevel: 0,
        parentId: '0',
        topParentId: '1497050616706596866',
        sort: 6,
        detailedAddress: null,
        personLiable: null,
        telephone: null,
        longitude: null,
        latitude: null,
        logoAddr: null,
        industryType: null
      }
    ],
    success: true
  }
})

Mock.mock(/\/cms-cloud-service\/workPlan\/qurryMyWorkPlan/, (opt) => {
  return {
    code: 0,
    msg: 'success',
    data: {
      total: '4',
      list: [
        {
          id: '11160',
          workPlanMark: 'BY2304190001',
          workName: '1212',
          workTypeName: '保养工单',
          workPlanLevel: 'general',
          workPlanStatus: 'pendding',
          currentNode: '于平;郭志旺;应超1;四;三;zenma;luotong;邱丹;李四;吕;9999999;管理员;ADMIN;ceshj1212;ceshj1212',
          createTime: '2023-04-19 17:35:37',
          creator: '1641290013433942033',
          email: null
        },
        {
          id: '11159',
          workPlanMark: 'XJ2304190001',
          workName: '1111',
          workTypeName: '巡检工单',
          workPlanLevel: 'general',
          workPlanStatus: 'pendding',
          currentNode: '于平;郭志旺;应超1;四;三;zenma;luotong;邱丹;李四;吕;9999999;管理员;ADMIN;ceshj1212;ceshj1212',
          createTime: '2023-04-19 17:34:14',
          creator: '1641290013433942034',
          email: null
        },
        {
          id: '11158',
          workPlanMark: 'OK2304180001',
          workName: 'okkkk',
          workTypeName: 'OK工单',
          workPlanLevel: 'important',
          workPlanStatus: 'pendding',
          currentNode: '于平;郭志旺;应超1;四;三;zenma;luotong;邱丹;李四;吕;9999999;管理员;ADMIN;ceshj1212;ceshj1212',
          createTime: '2023-04-18 14:38:17',
          creator: '195243',
          email: null
        },
        {
          id: '11157',
          workPlanMark: 'BY2304180001',
          workName: 'wjj测试',
          workTypeName: '保养工单',
          workPlanLevel: 'general',
          workPlanStatus: 'pendding',
          currentNode: '于平;郭志旺;应超1;四;三;zenma;luotong;邱丹;李四;吕;9999999;管理员;ADMIN;ceshj1212;ceshj1212',
          createTime: '2023-04-18 14:29:57',
          creator: '195242',
          email: null
        }
      ],
      pageNum: 1,
      pageSize: 10,
      size: 4,
      startRow: 1,
      endRow: 4,
      pages: 1,
      prePage: 0,
      nextPage: 0,
      isFirstPage: true,
      isLastPage: true,
      hasPreviousPage: false,
      hasNextPage: false,
      navigatePages: 8,
      navigatepageNums: [1],
      navigateFirstPage: 1,
      navigateLastPage: 1
    },
    success: true
  }
})

Mock.mock(/\/cms-cloud-service\/workPlan\/myWorkPlanCount/, (opt) => ({
  code: 0,
  msg: 'success',
  data: { totalQuantity: 4, pendingQuantity: 4, completedQuantity: 1, avgProcessTime: '0秒', myInitiationQuantity: 1 },
  success: true
}))

Mock.mock(/\/cms-cloud-service\/maintainKnowledge\/selectGraphTopology/, (opt) => {
  return {
    code: 0,
    msg: 'success',
    data: {
      data: [
        { id: '0', name: '设备表盘显示异常', symbolSize: '1', value: '1', category: '0', source: null, target: null },
        { id: '1', name: '措施A', symbolSize: '1', value: '1', category: '1', source: null, target: null }
      ],
      links: [{ id: '0', name: null, symbolSize: null, value: null, category: null, source: '0', target: '1' }],
      categories: [
        { id: '0', name: '现象', symbolSize: null, value: null, category: null, source: null, target: null },
        { id: '1', name: '措施', symbolSize: null, value: null, category: null, source: null, target: null }
      ]
    },
    success: true
  }
})

Mock.mock(/\/cms-cloud-service\/maintainKnowledge\/selectBaseType/, (opt) => {
  return {
    code: 0,
    msg: 'success',
    data: {
      categoryList: ['设备运维', '生产安全'],
      issueList: ['设备表盘显示异常', '设备运行异常', '设备温度异常', '设备振动异常', '12', '122', '123'],
      methodList: ['措施A', '措施B', '措施C', '多因素综合判断']
    },
    success: true
  }
})

Mock.mock(/\/cms-cloud-service\/maintainKnowledge\/selectBasePageList/, (opt) => {
  return {
    code: 0,
    msg: 'success',
    data: {
      total: '1',
      list: [
        {
          id: '1',
          name: 'wjj测试',
          categoryName: '设备运维',
          issueName: '设备表盘显示异常',
          issueDesc: '1111122',
          methodName: '措施A',
          methodDesc: '22222233',
          tenantId: 'geek',
          createDate: '2023-04-13 10:56:38',
          updateDate: '2023-04-13 13:38:14',
          createBy: '195242',
          updateBy: '195325',
          issueFileList: [
            {
              id: '3240',
              originName: 'title.png',
              storePath: 'https://test.carbonminip.getech.cn/oss/test/896d6655/title.png',
              sha256: '69e63b3d4f70244d250fb7da6726cc6ab8f9439ad48c0a078fc528aeb5bfb56b',
              type: '2000101',
              ownerId: '1',
              fromGroup: 'file',
              remark: null,
              instime: '2023-04-13 10:56:19',
              updtime: '2023-04-13 10:56:19'
            }
          ],
          methodFileList: [
            {
              id: '3241',
              originName: '1669614768147compare.xlsx',
              storePath: 'https://test.carbonminip.getech.cn/oss/test/682b25bf/1669614768147compare.xlsx',
              sha256: '1234e1a5c80c026390cf00b2de7cb8772e4c345b7093c9cccc3ec5e5cc93400e',
              type: '2000101',
              ownerId: '1',
              fromGroup: 'file',
              remark: null,
              instime: '2023-04-13 10:56:36',
              updtime: '2023-04-13 10:56:36'
            }
          ],
          workList: [
            {
              id: '11151',
              workName: '告警工单1',
              workMark: 'GJ2304130001',
              workTypeName: '告警工单',
              workLevel: 'emerge',
              targetTime: '2023-04-15 00:00:00',
              processSuggestion: '解决啦',
              remark: '123 转给 应超1 好的我知道了',
              status: 'closed',
              responseTimeDuration: 260,
              processTimeDuration: 6866,
              executor: '195325',
              technician: null,
              classify: '设备表盘显示异常',
              knowledgeId: '1',
              tenantId: 'geek',
              createDate: '2023-04-13 11:27:47',
              updateDate: '2023-04-13 13:22:13',
              createBy: '195325',
              updateBy: '195325'
            },
            {
              id: '11152',
              workName: '17工单1',
              workMark: '172304130001',
              workTypeName: '17工单',
              workLevel: 'emerge',
              targetTime: '2023-04-14 00:00:00',
              processSuggestion: '嗯',
              remark: '11111',
              status: 'closed',
              responseTimeDuration: 62,
              processTimeDuration: 239,
              executor: '195325',
              technician: null,
              classify: '设备表盘显示异常',
              knowledgeId: '1',
              tenantId: 'geek',
              createDate: '2023-04-13 13:27:28',
              updateDate: '2023-04-13 13:31:27',
              createBy: '195325',
              updateBy: '195325'
            }
          ]
        }
      ],
      pageNum: 1,
      pageSize: 10,
      size: 1,
      startRow: 1,
      endRow: 1,
      pages: 1,
      prePage: 0,
      nextPage: 0,
      isFirstPage: true,
      isLastPage: true,
      hasPreviousPage: false,
      hasNextPage: false,
      navigatePages: 8,
      navigatepageNums: [1],
      navigateFirstPage: 1,
      navigateLastPage: 1
    },
    success: true
  }
})

Mock.mock(/\/business\/hvDeviceInfo\/deviceTypeList/, (opt) => {
  return {
    code: 0,
    data: [
      {
        id: '0',
        tenantId: 'geek',
        modelType: null,
        modelMark: 'recc',
        modelName: '表计',
        category: 'other',
        modelGroup: null,
        categoryName: null,
        createBy: null,
        createDate: null
      },
      {
        id: '0',
        tenantId: 'geek',
        modelType: null,
        modelMark: 'photovoltaicDb',
        modelName: '光伏电量电表',
        category: 'other',
        modelGroup: null,
        categoryName: null,
        createBy: null,
        createDate: null
      },
      {
        id: '0',
        tenantId: 'geek',
        modelType: null,
        modelMark: 'kongyaliml',
        modelName: '空压liml',
        category: 'air',
        modelGroup: null,
        categoryName: null,
        createBy: null,
        createDate: null
      },
      {
        id: '0',
        tenantId: 'geek',
        modelType: null,
        modelMark: 'nuantongliml',
        modelName: '暖通liml',
        category: 'hv',
        modelGroup: null,
        categoryName: null,
        createBy: null,
        createDate: null
      },
      {
        id: '0',
        tenantId: 'geek',
        modelType: null,
        modelMark: 'kongyazyhj',
        modelName: '空压zyhj',
        category: 'air',
        modelGroup: null,
        categoryName: null,
        createBy: null,
        createDate: null
      },
      {
        id: '0',
        tenantId: 'geek',
        modelType: null,
        modelMark: '121222',
        modelName: '12222',
        category: 'air',
        modelGroup: null,
        categoryName: null,
        createBy: null,
        createDate: null
      },
      {
        id: '0',
        tenantId: 'geek',
        modelType: null,
        modelMark: 'dddddaaaa',
        modelName: 'adasdasd',
        category: 'air',
        modelGroup: null,
        categoryName: null,
        createBy: null,
        createDate: null
      },
      {
        id: '0',
        tenantId: 'geek',
        modelType: null,
        modelMark: 'D001',
        modelName: 'D001',
        category: 'other',
        modelGroup: null,
        categoryName: null,
        createBy: null,
        createDate: null
      },
      {
        id: '0',
        tenantId: 'geek',
        modelType: null,
        modelMark: 'transformer_virtual',
        modelName: '虚拟变压器',
        category: 'other',
        modelGroup: null,
        categoryName: null,
        createBy: null,
        createDate: null
      },
      {
        id: '0',
        tenantId: 'geek',
        modelType: null,
        modelMark: 'ECR',
        modelName: '制冷机',
        category: 'hv',
        modelGroup: null,
        categoryName: null,
        createBy: null,
        createDate: null
      },
      {
        id: '0',
        tenantId: 'geek',
        modelType: null,
        modelMark: 'Cooling tower',
        modelName: '冷却塔',
        category: 'hv',
        modelGroup: null,
        categoryName: null,
        createBy: null,
        createDate: null
      },
      {
        id: '0',
        tenantId: 'geek',
        modelType: null,
        modelMark: 'Pump',
        modelName: '水泵',
        category: 'hv',
        modelGroup: null,
        categoryName: null,
        createBy: null,
        createDate: null
      },
      {
        id: '0',
        tenantId: 'geek',
        modelType: null,
        modelMark: 'System',
        modelName: '制冷系统',
        category: 'hv',
        modelGroup: null,
        categoryName: null,
        createBy: null,
        createDate: null
      },
      {
        id: '0',
        tenantId: 'geek',
        modelType: null,
        modelMark: 'ACOP1',
        modelName: '空压机模型1',
        category: 'air',
        modelGroup: null,
        categoryName: null,
        createBy: null,
        createDate: null
      },
      {
        id: '0',
        tenantId: 'geek',
        modelType: null,
        modelMark: 'ACOP2',
        modelName: '空压机模型2',
        category: 'air',
        modelGroup: null,
        categoryName: null,
        createBy: null,
        createDate: null
      },
      {
        id: '0',
        tenantId: 'geek',
        modelType: null,
        modelMark: 'ACOP3',
        modelName: '空压机模型3',
        category: 'air',
        modelGroup: null,
        categoryName: null,
        createBy: null,
        createDate: null
      },
      {
        id: '0',
        tenantId: 'geek',
        modelType: null,
        modelMark: 'RDRY',
        modelName: '干燥机',
        category: 'air',
        modelGroup: null,
        categoryName: null,
        createBy: null,
        createDate: null
      },
      {
        id: '0',
        tenantId: 'geek',
        modelType: null,
        modelMark: '7号',
        modelName: '离心制冷机',
        category: '1',
        modelGroup: null,
        categoryName: null,
        createBy: null,
        createDate: null
      },
      {
        id: '0',
        tenantId: 'geek',
        modelType: null,
        modelMark: 'transformer_master',
        modelName: '总变压器',
        category: 'other',
        modelGroup: null,
        categoryName: null,
        createBy: null,
        createDate: null
      },
      {
        id: '0',
        tenantId: 'geek',
        modelType: null,
        modelMark: 'ABC',
        modelName: 'abc',
        category: 'air',
        modelGroup: null,
        categoryName: null,
        createBy: null,
        createDate: null
      },
      {
        id: '0',
        tenantId: 'geek',
        modelType: null,
        modelMark: 'B2',
        modelName: '空压机2',
        category: 'air',
        modelGroup: null,
        categoryName: null,
        createBy: null,
        createDate: null
      },
      {
        id: '0',
        tenantId: 'geek',
        modelType: null,
        modelMark: 'testGZW',
        modelName: '测试GZW',
        category: 'other',
        modelGroup: null,
        categoryName: null,
        createBy: null,
        createDate: null
      },
      {
        id: '0',
        tenantId: 'geek',
        modelType: null,
        modelMark: 'a1',
        modelName: 'a1',
        category: 'air',
        modelGroup: null,
        categoryName: null,
        createBy: null,
        createDate: null
      },
      {
        id: '0',
        tenantId: 'geek',
        modelType: null,
        modelMark: '111',
        modelName: '111',
        category: 'other',
        modelGroup: null,
        categoryName: null,
        createBy: null,
        createDate: null
      },
      {
        id: '0',
        tenantId: 'geek',
        modelType: null,
        modelMark: 'calculate_ele_lml',
        modelName: '电量计算-lml',
        category: 'other',
        modelGroup: null,
        categoryName: null,
        createBy: null,
        createDate: null
      }
    ],
    success: true
  }
})

Mock.mock(/\/cms-cloud-service\/deviceBook\/selectListBylocationId/, (opt) => {
  return {
    code: 0,
    msg: 'success',
    data: {
      total: '14',
      list: [
        {
          id: '1590159765086990387',
          deviceLocationId: '1590159765124739124',
          topParentId: '1590543023293394946',
          locationId: '1590543023293394946',
          modelMark: 'photovoltaicDb',
          modelName: '光伏电量电表',
          classification: null,
          principal: null,
          deviceMark: '3434',
          deviceName: '3434',
          qrcodeUrl: 'https://test.carbonminip.getech.cn/oss/test/82cda750/1590159765086990387_QRcode.jpg',
          qrcodeResource: '3184',
          resourceId: null,
          resourceUrl: null
        },
        {
          id: '1590159765086990377',
          deviceLocationId: '1590159765124739114',
          topParentId: '1590543023293394946',
          locationId: '1590543023293394946',
          modelMark: 'transformer_virtual',
          modelName: '虚拟变压器',
          classification: null,
          principal: '',
          deviceMark: 'transformer_virtual_001',
          deviceName: '虚拟变压器001',
          qrcodeUrl: 'https://test.carbonminip.getech.cn/oss/test/186cc2b3/1590159765086990377_QRcode.jpg',
          qrcodeResource: '2362',
          resourceId: '2074',
          resourceUrl: 'https://test.carbonminip.getech.cn/oss/test/9ee271f8/1590159765086990377_QRcode.jpg'
        },
        {
          id: '1590159765086990378',
          deviceLocationId: '1590159765124739115',
          topParentId: '1590543023293394946',
          locationId: '1590543023293394946',
          modelMark: 'transformer_virtual',
          modelName: '虚拟变压器',
          classification: null,
          principal: '',
          deviceMark: 'transformer_virtual_002',
          deviceName: '虚拟变压器002',
          qrcodeUrl: 'https://test.carbonminip.getech.cn/oss/test/23d79f8b/1590159765086990378_QRcode.jpg',
          qrcodeResource: '2065',
          resourceId: null,
          resourceUrl: null
        },
        {
          id: '1590159765086990379',
          deviceLocationId: '1590159765124739116',
          topParentId: '1590543023293394946',
          locationId: '1590543023293394946',
          modelMark: 'photovoltaicDb',
          modelName: '光伏电量电表',
          classification: null,
          principal: null,
          deviceMark: 'photovoltaicDb_001',
          deviceName: '光伏电表001',
          qrcodeUrl: 'https://test.carbonminip.getech.cn/oss/test/7e809ca8/1590159765086990379_QRcode.jpg',
          qrcodeResource: '2010',
          resourceId: null,
          resourceUrl: null
        },
        {
          id: '1590159765086990383',
          deviceLocationId: '1590159765124739120',
          topParentId: '1590543023293394946',
          locationId: '1590543023293394946',
          modelMark: 'photovoltaicDb',
          modelName: '光伏电量电表',
          classification: null,
          principal: null,
          deviceMark: '12',
          deviceName: '212',
          qrcodeUrl: 'https://test.carbonminip.getech.cn/oss/test/f8db51f5/1590159765086990383_QRcode.jpg',
          qrcodeResource: '2011',
          resourceId: null,
          resourceUrl: null
        },
        {
          id: '1590159765086990384',
          deviceLocationId: '1590159765124739121',
          topParentId: '1590543023293394946',
          locationId: '1590543023293394946',
          modelMark: 'dddddaaaa',
          modelName: 'adasdasd',
          classification: null,
          principal: null,
          deviceMark: '1222',
          deviceName: '123',
          qrcodeUrl: 'https://test.carbonminip.getech.cn/oss/test/d7d39ed7/1590159765086990384_QRcode.jpg',
          qrcodeResource: '2018',
          resourceId: null,
          resourceUrl: null
        },
        {
          id: '1590159765086990385',
          deviceLocationId: '1590159765124739122',
          topParentId: '1590543023293394946',
          locationId: '1590543023293394946',
          modelMark: 'photovoltaicDb',
          modelName: '光伏电量电表',
          classification: null,
          principal: null,
          deviceMark: '1221',
          deviceName: '1221',
          qrcodeUrl: 'https://test.carbonminip.getech.cn/oss/test/9d85bb64/1590159765086990385_QRcode.jpg',
          qrcodeResource: '2019',
          resourceId: null,
          resourceUrl: null
        },
        {
          id: '1590159765086990386',
          deviceLocationId: '1590159765124739123',
          topParentId: '1590543023293394946',
          locationId: '1590543023293394946',
          modelMark: 'photovoltaicDb',
          modelName: '光伏电量电表',
          classification: null,
          principal: null,
          deviceMark: '34',
          deviceName: '34',
          qrcodeUrl: 'https://test.carbonminip.getech.cn/oss/test/bdf93d9b/1590159765086990386_QRcode.jpg',
          qrcodeResource: '2020',
          resourceId: null,
          resourceUrl: null
        },
        {
          id: '1630857900788232211',
          deviceLocationId: '1590159765124739143',
          topParentId: '1590543023293394946',
          locationId: '1590543023293394946',
          modelMark: 'photovoltaicDb',
          modelName: '光伏电量电表',
          classification: null,
          principal: null,
          deviceMark: 'testguozhiwang',
          deviceName: 'testguozhiwang',
          qrcodeUrl: 'https://test.carbonminip.getech.cn/oss/test/8faeee7b/1630857900788232211_QRcode.jpg',
          qrcodeResource: '3186',
          resourceId: null,
          resourceUrl: null
        },
        {
          id: '1590159765086990380',
          deviceLocationId: '1590159765124739117',
          topParentId: '1590543023293394946',
          locationId: '1590543023293394946',
          modelMark: 'photovoltaicDb',
          modelName: '光伏电量电表',
          classification: null,
          principal: null,
          deviceMark: 'photovoltaicDb_002',
          deviceName: '光伏电表002',
          qrcodeUrl: 'https://test.carbonminip.getech.cn/oss/test/e6df6e83/1590159765086990380_QRcode.jpg',
          qrcodeResource: '2021',
          resourceId: null,
          resourceUrl: null
        },
        {
          id: '1630857900788232213',
          deviceLocationId: '1590159765124739145',
          topParentId: '1590543023293394946',
          locationId: '1590543023293394946',
          modelMark: 'testGZW',
          modelName: '测试GZW',
          classification: null,
          principal: '',
          deviceMark: 'testDeviceGZW',
          deviceName: '测试设备GZ',
          qrcodeUrl: 'https://test.carbonminip.getech.cn/oss/test/eabfb3e6/1630857900788232213_QRcode.jpg',
          qrcodeResource: '3282',
          resourceId: '2343',
          resourceUrl: 'https://test.carbonminip.getech.cn/oss/test/5d75bef9/activemq_manage.jpg'
        },
        {
          id: '1590159765086990381',
          deviceLocationId: '1590159765124739118',
          topParentId: '1590543023293394946',
          locationId: '1590543023293394946',
          modelMark: 'photovoltaicDb',
          modelName: '光伏电量电表',
          classification: null,
          principal: null,
          deviceMark: 'q',
          deviceName: '1',
          qrcodeUrl: 'https://test.carbonminip.getech.cn/oss/test/da524fd5/1590159765086990381_QRcode.jpg',
          qrcodeResource: '2022',
          resourceId: null,
          resourceUrl: null
        },
        {
          id: '1630857900788232212',
          deviceLocationId: '1590159765124739144',
          topParentId: '1590543023293394946',
          locationId: '1590543023293394946',
          modelMark: 'recc',
          modelName: '表计',
          classification: null,
          principal: null,
          deviceMark: 'test123gzw',
          deviceName: 'test123gzw',
          qrcodeUrl: 'https://test.carbonminip.getech.cn/oss/test/b22b2034/1630857900788232212_QRcode.jpg',
          qrcodeResource: '3185',
          resourceId: '1878',
          resourceUrl: 'https://test.carbonminip.getech.cn/oss/test/54b1ea18/南阳城区规划.jpg'
        },
        {
          id: '1590159765086990382',
          deviceLocationId: '1590159765124739119',
          topParentId: '1590543023293394946',
          locationId: '1590543023293394946',
          modelMark: 'photovoltaicDb',
          modelName: '光伏电量电表',
          classification: null,
          principal: null,
          deviceMark: '122',
          deviceName: '122',
          qrcodeUrl: 'https://test.carbonminip.getech.cn/oss/test/f0f7a003/1590159765086990382_QRcode.jpg',
          qrcodeResource: '2023',
          resourceId: null,
          resourceUrl: null
        }
      ],
      pageNum: 1,
      pageSize: 20,
      size: 14,
      startRow: 1,
      endRow: 14,
      pages: 1,
      prePage: 0,
      nextPage: 0,
      isFirstPage: true,
      isLastPage: true,
      hasPreviousPage: false,
      hasNextPage: false,
      navigatePages: 8,
      navigatepageNums: [1],
      navigateFirstPage: 1,
      navigateLastPage: 1
    },
    success: true
  }
})

Mock.mock(/\/cms-cloud-service\/locationTree\/query/, (opt) => {
  return {
    code: 0,
    msg: 'success',
    data: [
      {
        id: '1497050260941504514',
        tenantId: 'geek',
        createBy: '195176',
        createDate: 1645759571000,
        updateBy: 'admin',
        updateDate: 1672897154000,
        locationType: 'common',
        energyCode: 'common',
        locationName: '冰机系统研究所',
        locationLevel: 0,
        parentId: '0',
        topParentId: '1497050260941504514',
        sort: 1,
        children: [
          {
            id: '1638795148917821441',
            tenantId: 'geek',
            createBy: 'zenma',
            createDate: 1679554186000,
            updateBy: 'zenma',
            updateDate: 1679554186000,
            locationType: 'device',
            energyCode: 'common',
            locationName: 'ABC',
            locationLevel: 1,
            parentId: '1497050260941504514',
            topParentId: '1497050260941504514',
            sort: 3,
            children: [],
            name: 'ABC',
            hasChild: false
          }
        ],
        name: '冰机系统研究所',
        hasChild: true
      },
      {
        id: '1590543023293394946',
        tenantId: 'geek',
        createBy: '李蒙龙',
        createDate: 1668049982000,
        updateBy: '李蒙龙',
        updateDate: 1677740500000,
        locationType: 'common',
        energyCode: 'common',
        locationName: '蜂巢',
        locationLevel: 0,
        parentId: '0',
        topParentId: '1590543023293394946',
        sort: 2,
        children: [],
        name: '蜂巢',
        hasChild: false
      },
      {
        id: '1592758207990792194',
        tenantId: 'geek',
        createBy: 'lv',
        createDate: 1668578123000,
        updateBy: '李蒙龙',
        updateDate: 1669802766000,
        locationType: 'common',
        energyCode: 'common',
        locationName: '暖通系统',
        locationLevel: 0,
        parentId: '0',
        topParentId: '1592758207990792194',
        sort: 3,
        children: [
          {
            id: '1592763714088501249',
            tenantId: 'geek',
            createBy: 'lv',
            createDate: 1668579436000,
            updateBy: 'lv',
            updateDate: 1668579436000,
            locationType: 'device',
            energyCode: 'common',
            locationName: '雪雕部',
            locationLevel: 1,
            parentId: '1592758207990792194',
            topParentId: '1592758207990792194',
            sort: 5,
            children: [],
            name: '雪雕部',
            hasChild: false
          }
        ],
        name: '暖通系统',
        hasChild: true
      },
      {
        id: '1587691650352775169',
        tenantId: 'geek',
        createBy: 'zenma',
        createDate: 1667370162000,
        updateBy: '李蒙龙',
        updateDate: 1669801348000,
        locationType: 'common',
        energyCode: 'common',
        locationName: '半导体研究所',
        locationLevel: 0,
        parentId: '0',
        topParentId: '1587691650352775169',
        sort: 4,
        children: [
          {
            id: '1591634110695116801',
            tenantId: 'geek',
            createBy: '张阔',
            createDate: 1668310118000,
            updateBy: '张阔',
            updateDate: 1668310118000,
            locationType: 'device',
            energyCode: 'common',
            locationName: '暖通1',
            locationLevel: 1,
            parentId: '1587691650352775169',
            topParentId: '1587691650352775169',
            sort: 0,
            children: [
              {
                id: '1610530001321537538',
                tenantId: 'geek',
                createBy: 'shenzhen',
                createDate: 1672815249000,
                updateBy: 'shenzhen',
                updateDate: 1672815249000,
                locationType: 'device',
                energyCode: 'common',
                locationName: '12',
                locationLevel: 2,
                parentId: '1591634110695116801',
                topParentId: '1587691650352775169',
                sort: 0,
                children: null,
                name: '12',
                hasChild: false
              }
            ],
            name: '暖通1',
            hasChild: true
          }
        ],
        name: '半导体研究所',
        hasChild: true
      },
      {
        id: '1623862526278168577',
        tenantId: 'geek',
        createBy: 'shenzhen',
        createDate: 1675993971000,
        updateBy: 'shenzhen',
        updateDate: 1675994607000,
        locationType: 'common',
        energyCode: 'common',
        locationName: '测试',
        locationLevel: 0,
        parentId: '0',
        topParentId: '1623862526278168577',
        sort: 5,
        children: [],
        name: '测试',
        hasChild: false
      },
      {
        id: '1497050616706596866',
        tenantId: 'geek',
        createBy: '195176',
        createDate: 1645759656000,
        updateBy: '195190',
        updateDate: 1660529167000,
        locationType: 'common',
        energyCode: 'common',
        locationName: '空压系统',
        locationLevel: 0,
        parentId: '0',
        topParentId: '1497050616706596866',
        sort: 6,
        children: [],
        name: '空压系统',
        hasChild: false
      }
    ],
    success: true
  }
})

Mock.mock(/\/cms-cloud-service\/deviceBook\/queryDeviceGroupData/, opt => ({"code":0,"msg":"success","data":[{"name":"蜂巢","topParentId":"1590543023293394946","modelGroup":null,"modelMark":null,"modelName":null,"locationId":null,"id":null,"deviceMark":null,"deviceName":null,"resourceId":null,"qrcodeResourceId":null,"resourceUrl":null,"qrcodeUrl":null,"companyName":"蜂巢","modelGroupName":null,"child":[{"name":"其他","topParentId":"1590543023293394946","modelGroup":"other","modelMark":null,"modelName":null,"locationId":null,"id":null,"deviceMark":null,"deviceName":null,"resourceId":null,"qrcodeResourceId":null,"resourceUrl":null,"qrcodeUrl":null,"companyName":"蜂巢","modelGroupName":"其他","child":[{"name":"原单位表计模型_liml","topParentId":"1590543023293394946","modelGroup":"other","modelMark":"ydw_limltest","modelName":"原单位表计模型_liml","locationId":null,"id":null,"deviceMark":null,"deviceName":null,"resourceId":null,"qrcodeResourceId":null,"resourceUrl":null,"qrcodeUrl":null,"companyName":"蜂巢","modelGroupName":"其他","child":[{"name":"原单位表计001","topParentId":"1590543023293394946","modelGroup":"other","modelMark":"ydw_limltest","modelName":"原单位表计模型_liml","locationId":"1590543023293394946","id":"1630857900788232219","deviceMark":"ydw_device001","deviceName":"原单位表计001","resourceId":null,"qrcodeResourceId":null,"resourceUrl":"","qrcodeUrl":"","companyName":"蜂巢","modelGroupName":"其他","child":null}]}]},{"name":"变压器","topParentId":"1590543023293394946","modelGroup":"transfer","modelMark":null,"modelName":null,"locationId":null,"id":null,"deviceMark":null,"deviceName":null,"resourceId":null,"qrcodeResourceId":null,"resourceUrl":null,"qrcodeUrl":null,"companyName":"蜂巢","modelGroupName":"变压器","child":[{"name":"测试GZW","topParentId":"1590543023293394946","modelGroup":"transfer","modelMark":"testGZW","modelName":"测试GZW","locationId":null,"id":null,"deviceMark":null,"deviceName":null,"resourceId":null,"qrcodeResourceId":null,"resourceUrl":null,"qrcodeUrl":null,"companyName":"蜂巢","modelGroupName":"变压器","child":[{"name":"测试设备GZ","topParentId":"1590543023293394946","modelGroup":"transfer","modelMark":"testGZW","modelName":"测试GZW","locationId":"1590543023293394946","id":"1630857900788232213","deviceMark":"testDeviceGZW","deviceName":"测试设备GZ","resourceId":null,"qrcodeResourceId":null,"resourceUrl":"https://test.carbonminip.getech.cn/oss/test/5d75bef9/activemq_manage.jpg","qrcodeUrl":"https://test.carbonminip.getech.cn/oss/test/eabfb3e6/1630857900788232213_QRcode.jpg","companyName":"蜂巢","modelGroupName":"变压器","child":null}]}]}]},{"name":"半导体研究所","topParentId":"1587691650352775169","modelGroup":null,"modelMark":null,"modelName":null,"locationId":null,"id":null,"deviceMark":null,"deviceName":null,"resourceId":null,"qrcodeResourceId":null,"resourceUrl":null,"qrcodeUrl":null,"companyName":"半导体研究所","modelGroupName":null,"child":[{"name":"变压器","topParentId":"1587691650352775169","modelGroup":"transfer","modelMark":null,"modelName":null,"locationId":null,"id":null,"deviceMark":null,"deviceName":null,"resourceId":null,"qrcodeResourceId":null,"resourceUrl":null,"qrcodeUrl":null,"companyName":"半导体研究所","modelGroupName":"变压器","child":[{"name":"测试GZW","topParentId":"1587691650352775169","modelGroup":"transfer","modelMark":"testGZW","modelName":"测试GZW","locationId":null,"id":null,"deviceMark":null,"deviceName":null,"resourceId":null,"qrcodeResourceId":null,"resourceUrl":null,"qrcodeUrl":null,"companyName":"半导体研究所","modelGroupName":"变压器","child":[{"name":"测试结点2","topParentId":"1587691650352775169","modelGroup":"transfer","modelMark":"testGZW","modelName":"测试GZW","locationId":"1610530001321537538","id":"1630857900788232214","deviceMark":"testGZW01","deviceName":"测试结点2","resourceId":null,"qrcodeResourceId":null,"resourceUrl":"","qrcodeUrl":"https://test.carbonminip.getech.cn/oss/test/e6b61a2c/1630857900788232214_QRcode.jpg","companyName":"半导体研究所","modelGroupName":"变压器","child":null},{"name":"gzw011","topParentId":"1587691650352775169","modelGroup":"transfer","modelMark":"testGZW","modelName":"测试GZW","locationId":"1591634110695116801","id":"1630857900788232215","deviceMark":"gzw001","deviceName":"gzw011","resourceId":null,"qrcodeResourceId":null,"resourceUrl":"","qrcodeUrl":"https://test.carbonminip.getech.cn/oss/test/06b31b4e/1630857900788232215_QRcode.jpg","companyName":"半导体研究所","modelGroupName":"变压器","child":null},{"name":"gzw002","topParentId":"1587691650352775169","modelGroup":"transfer","modelMark":"testGZW","modelName":"测试GZW","locationId":"1591634110695116801","id":"1630857900788232216","deviceMark":"gzw002","deviceName":"gzw002","resourceId":null,"qrcodeResourceId":null,"resourceUrl":"","qrcodeUrl":"https://test.carbonminip.getech.cn/oss/test/59135780/1630857900788232216_QRcode.jpg","companyName":"半导体研究所","modelGroupName":"变压器","child":null},{"name":"gzw003","topParentId":"1587691650352775169","modelGroup":"transfer","modelMark":"testGZW","modelName":"测试GZW","locationId":"1610530001321537538","id":"1630857900788232217","deviceMark":"gzw003","deviceName":"gzw003","resourceId":null,"qrcodeResourceId":null,"resourceUrl":"","qrcodeUrl":"https://test.carbonminip.getech.cn/oss/test/f209180e/1630857900788232217_QRcode.jpg","companyName":"半导体研究所","modelGroupName":"变压器","child":null}]}]}]}],"success":true}))

Mock.mock(/\/business\/device\/deviceParamInfoList/, opt => (
  {"code":0,"data":[{"id":"1590159765183459644","modelMark":"testGZW","modelName":"测试GZW","deviceMark":"testDeviceGZW","deviceName":"测试设备GZ","paramMark":"brand","paramName":"品牌","paramValue":"章鱼博士","unit":"","paramValType":"text","paramValueCode":null},{"id":"1590159765183459645","modelMark":"testGZW","modelName":"测试GZW","deviceMark":"testDeviceGZW","deviceName":"测试设备GZ","paramMark":"model","paramName":"型号","paramValue":"svolt-6667","unit":"","paramValType":"text","paramValueCode":null},{"id":"1590159765183459646","modelMark":"testGZW","modelName":"测试GZW","deviceMark":"testDeviceGZW","deviceName":"测试设备GZ","paramMark":"position","paramName":"安装位置","paramValue":"上海嘉定北","unit":"","paramValType":"text","paramValueCode":null},{"id":"1590159765183459647","modelMark":"testGZW","modelName":"测试GZW","deviceMark":"testDeviceGZW","deviceName":"测试设备GZ","paramMark":"power","paramName":"额定功率","paramValue":"1TGWH","unit":"","paramValType":"number","paramValueCode":null}],"success":true}
))

Mock.mock(/\/cms-cloud-service\/deviceParamInfo\/queryDeviceParamLastData/, opt=> ({"code":0,"msg":"success","data":[],"success":true}))