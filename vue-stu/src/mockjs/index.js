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

Mock.mock('/api/getDict', 'post', {
  code: 0,
  'content|1-10': [
    {
      label: '@cname',
      value: '@name',
      id: '@id'
    }
  ]
})
