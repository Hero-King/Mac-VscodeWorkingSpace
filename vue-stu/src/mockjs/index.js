import Mock from 'mockjs'

Mock.mock('/api/getTableData', 'get', {
  'data|10': [
    {
      'id|+1': 1,
      name: '@cname',
      'age|1-100': 10,
      date: '@date'
    }
  ]
})
